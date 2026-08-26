/* Pythagorean (3-limit) sounding. Open string = 216 Hz = 2^3 · 3^3. */
window.MusicaArs = window.MusicaArs || {};
MusicaArs.audio = {
  ctx: null,
  master: null,
  base: 216,
  ready: false,
  voices: [],

  async unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.2;
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") await this.ctx.resume();
    this.ready = true;
    return this.ready;
  },

  freqFromLength(len) {
    const L = Math.max(0.08, Math.min(1, +len || 1));
    return this.base / L;
  },

  /* Silence every sounding voice without a click.

     A click is a discontinuity in the waveform. Cutting a ringing string off
     while its amplitude is still appreciable makes one, and since every new
     sound calls stopAll first, the click of the OLD note is heard as a pop at
     the head of the NEW one. So: hold the gain wherever the envelope has got
     to, ramp it LINEARLY to true zero over RELEASE, and only then stop the
     oscillators. A linear ramp is used rather than an exponential one because
     an exponential ramp can never reach zero. */
  RELEASE: 0.055,

  stopAll() {
    if (!this.ctx) { this.voices = []; return; }
    const now = this.ctx.currentTime;
    const end = now + this.RELEASE;
    for (const v of this.voices) {
      try {
        const p = v.gain.gain;
        if (p.cancelAndHoldAtTime) {
          p.cancelAndHoldAtTime(now);
        } else {
          const cur = p.value;
          p.cancelScheduledValues(now);
          p.setValueAtTime(cur, now);
        }
        p.linearRampToValueAtTime(0, end);
        v.oscs.forEach(o => {
          try { o.stop(end + 0.02); } catch (_) { /* already stopped */ }
        });
      } catch (_) { /* already torn down */ }
    }
    this.voices = [];
  },

  /* Scheduling lead. Anything closer than one audio buffer to "now" risks
     landing inside the quantum already being rendered, in which case the
     opening ramp is skipped and the note begins at full amplitude — the other
     way to make a click. macOS buffers are commonly 512 frames, ~11 ms. */
  LEAD: 0.04,

  _voice(freq, dur, when, pan) {
    const ctx = this.ctx;
    const t0 = Math.max(when == null ? ctx.currentTime : when, ctx.currentTime) + this.LEAD;
    const g = ctx.createGain();
    g.gain.value = 0;                       /* silent before any automation */
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.9, t0 + 0.028);
    g.gain.exponentialRampToValueAtTime(0.22, t0 + Math.min(0.24, dur * 0.25));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    g.gain.linearRampToValueAtTime(0, t0 + dur + 0.02);

    const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    if (panner) {
      panner.pan.value = pan || 0;
      g.connect(panner);
      panner.connect(this.master);
    } else {
      g.connect(this.master);
    }

    const partials = [
      [1, 0.72, "sine"],
      [2, 0.16, "sine"],
      [3, 0.09, "sine"],
      [4, 0.04, "triangle"]
    ];
    const oscs = partials.map(([n, amp, type]) => {
      const o = ctx.createOscillator();
      o.type = type;
      o.frequency.value = freq * n;
      const pg = ctx.createGain();
      pg.gain.value = amp;
      o.connect(pg);
      pg.connect(g);
      o.start(t0);
      o.stop(t0 + dur + 0.06);
      return o;
    });
    const rec = { oscs, gain: g };
    this.voices.push(rec);
    setTimeout(() => {
      this.voices = this.voices.filter(v => v !== rec);
    }, (t0 - ctx.currentTime + dur + 0.2) * 1000);
  },

  async tone(freq, dur = 1.15) {
    await this.unlock();
    this.stopAll();
    this._voice(freq, dur, null, 0);
  },

  async interval(f1, f2, mode = "together", dur = 1.4) {
    await this.unlock();
    this.stopAll();
    const now = this.ctx.currentTime;
    if (mode === "low") {
      this._voice(f1, dur, now, -0.15);
    } else if (mode === "high") {
      this._voice(f2, dur, now, 0.15);
    } else if (mode === "seq") {
      this._voice(f1, 0.85, now, -0.2);
      this._voice(f2, 0.95, now + 0.95, 0.2);
    } else {
      this._voice(f1, dur, now, -0.25);
      this._voice(f2, dur, now, 0.25);
    }
  },

  async sequence(freqs, note = 0.42, gap = 0.38) {
    await this.unlock();
    this.stopAll();
    const now = this.ctx.currentTime;
    freqs.forEach((f, i) => {
      this._voice(f, note, now + i * gap, -0.2 + i * 0.05);
    });
  },

  /* Three or more sounds at once, spread across the stereo field. */
  async chord(freqs, dur = 1.7) {
    await this.unlock();
    this.stopAll();
    const now = this.ctx.currentTime;
    const n = Math.max(1, freqs.length - 1);
    freqs.forEach((f, i) => {
      this._voice(f, dur, now, -0.28 + (0.56 * i) / n);
    });
  }
};

/* Cents: the logarithmic measure later Europe adopted for comparing tunings.
   1200 cents to the diapason, by definition. It is a measure, not a cause. */
MusicaArs.cents = function cents(ratio) {
  return 1200 * Math.log2(ratio);
};
MusicaArs.fromCents = function fromCents(c) {
  return Math.pow(2, c / 1200);
};

MusicaArs.parseRatio = function parseRatio(s) {
  if (typeof s === "number") return s;
  const t = String(s).trim();
  if (t.includes("/")) {
    const [a, b] = t.split("/").map(Number);
    return a / b;
  }
  if (t.includes(":")) {
    const [a, b] = t.split(":").map(Number);
    return a / b;
  }
  return Number(t);
}
