const CDN = "https://cdn.jsdelivr.net/gh/workinwithai-create/PreEight@main/public/samples";
const STEPS = 16;
const LULL = 8;
const RISE = 8;
const TOTAL = LULL + RISE;
const recipes = [
  { id: "bass-lift", name: "Bass lift", blurb: "Upright climbs stepwise across the eight bars into the landing root." },
  { id: "kit-open", name: "Kit open", blurb: "Hats open gradually; crash on bar 16 beat 1 reserved for next section." },
  { id: "nylon-climb", name: "Nylon climb", blurb: "Nylon arpeggios rise a fifth over bars 9–16 then yield." },
  { id: "brass-door", name: "Brass door", blurb: "Trumpet enters mid-rise and opens the door on the last bar." },
  { id: "pedal-rise", name: "Pedal rise", blurb: "Bass holds dominant while piano adds tension tones that resolve." },
  { id: "half-hush", name: "Half hush", blurb: "First four rise bars sparse; density doubles for last four." },
  { id: "tom-build", name: "Tom build", blurb: "Toms and low piano fill every other bar of the rise." },
  { id: "violin-swell", name: "Violin swell", blurb: "Violin sustains and swells into the final bar." },
  { id: "stop-and-go", name: "Stop & go", blurb: "Bar 12 is air; energy snaps back for 13–16." },
  { id: "double-time", name: "Double time", blurb: "Hats double in the last four bars of the rise." }
];
function bar(symbol, piano, guitar, bass) { return { symbol, piano, guitar, bass }; }
const grooves = [
  {
    id: "amber", name: "Amber Walk", bpm: 98, key: "A minor",
    lull: [
      bar("Am", [45,48,52,57], [45,52,57], 33), bar("F", [41,45,48,53], [41,48,53], 41),
      bar("C", [48,52,55,60], [48,52,55], 36), bar("G", [43,47,50,55], [43,47,50], 31),
      bar("Am", [45,48,52,57], [45,52,57], 33), bar("F", [41,45,48,53], [41,48,53], 41),
      bar("C", [48,52,55,60], [48,52,55], 36), bar("G", [43,47,50,55], [43,47,50], 31)
    ],
    rise: [
      bar("Am", [45,48,52,57], [45,52,57], 33), bar("Bm", [47,50,54,59], [47,54,59], 35),
      bar("C", [48,52,55,60], [48,52,55], 36), bar("D", [50,54,57,62], [50,57,62], 38),
      bar("Em", [40,43,47,52], [40,47,52], 28), bar("F", [41,45,48,53], [41,48,53], 41),
      bar("G", [43,47,50,55], [43,47,50], 31), bar("E7", [40,44,47,52], [40,47,50], 28)
    ]
  },
  {
    id: "porch", name: "Porch Climb", bpm: 86, key: "E major",
    lull: [
      bar("E", [40,44,47,52], [40,47,52], 28), bar("B", [35,39,42,47], [35,42,47], 23),
      bar("C#m", [44,47,51,56], [44,51,56], 32), bar("A", [33,37,40,45], [33,40,45], 33),
      bar("E", [40,44,47,52], [40,47,52], 28), bar("B", [35,39,42,47], [35,42,47], 23),
      bar("C#m", [44,47,51,56], [44,51,56], 32), bar("A", [33,37,40,45], [33,40,45], 33)
    ],
    rise: [
      bar("A", [33,37,40,45], [33,40,45], 33), bar("B", [35,39,42,47], [35,42,47], 23),
      bar("C#m", [44,47,51,56], [44,51,56], 32), bar("D", [38,42,45,50], [38,45,50], 26),
      bar("E", [40,44,47,52], [40,47,52], 28), bar("F#m", [42,45,49,54], [42,49,54], 30),
      bar("G#m", [44,47,51,56], [44,51,56], 32), bar("B", [35,39,42,47], [35,42,47], 23)
    ]
  },
  {
    id: "fold", name: "Fold Radio", bpm: 104, key: "D minor",
    lull: [
      bar("Dm", [38,41,45,50], [38,45,50], 26), bar("Bb", [34,38,41,46], [34,41,46], 34),
      bar("F", [41,45,48,53], [41,48,53], 29), bar("C", [36,40,43,48], [36,43,48], 24),
      bar("Dm", [38,41,45,50], [38,45,50], 26), bar("Bb", [34,38,41,46], [34,41,46], 34),
      bar("F", [41,45,48,53], [41,48,53], 29), bar("C", [36,40,43,48], [36,43,48], 24)
    ],
    rise: [
      bar("Dm", [38,41,45,50], [38,45,50], 26), bar("Em", [40,43,47,52], [40,47,52], 28),
      bar("F", [41,45,48,53], [41,48,53], 29), bar("G", [43,47,50,55], [43,47,50], 31),
      bar("Am", [45,48,52,57], [45,52,57], 33), bar("Bb", [34,38,41,46], [34,41,46], 34),
      bar("C", [36,40,43,48], [36,43,48], 24), bar("A7", [33,37,40,43], [33,40,43], 33)
    ]
  },
  {
    id: "carbon", name: "Carbon Verse", bpm: 92, key: "G minor",
    lull: [
      bar("Gm", [43,46,50,55], [43,50,55], 31), bar("Eb", [39,43,46,51], [39,46,51], 27),
      bar("Bb", [34,38,41,46], [34,41,46], 34), bar("F", [41,45,48,53], [41,48,53], 29),
      bar("Gm", [43,46,50,55], [43,50,55], 31), bar("Eb", [39,43,46,51], [39,46,51], 27),
      bar("Bb", [34,38,41,46], [34,41,46], 34), bar("F", [41,45,48,53], [41,48,53], 29)
    ],
    rise: [
      bar("Gm", [43,46,50,55], [43,50,55], 31), bar("Am", [45,48,52,57], [45,52,57], 33),
      bar("Bb", [34,38,41,46], [34,41,46], 34), bar("C", [36,40,43,48], [36,43,48], 24),
      bar("Dm", [38,41,45,50], [38,45,50], 26), bar("Eb", [39,43,46,51], [39,46,51], 27),
      bar("F", [41,45,48,53], [41,48,53], 29), bar("D7", [38,42,45,48], [38,45,48], 26)
    ]
  }
];
const state = { groove: grooves[0], recipe: recipes[0], playing: false, bar: 0, mode: null };
let ctx, bus, buffers = {};
async function load() {
  ctx = new AudioContext();
  bus = ctx.createGain(); bus.gain.value = 0.35; bus.connect(ctx.destination);
  const files = [
    ["kick", `${CDN}/drums/kick.mp3`], ["snare", `${CDN}/drums/snare.mp3`],
    ["hat", `${CDN}/drums/hihat.mp3`], ["crash", `${CDN}/drums/crash.mp3`],
    ["pC3", `${CDN}/piano/C3.mp3`], ["pC4", `${CDN}/piano/C4.mp3`], ["pA3", `${CDN}/piano/A3.mp3`],
    ["bE1", `${CDN}/bass/E1.mp3`], ["bA1", `${CDN}/bass/A1.mp3`], ["bC2", `${CDN}/bass/C2.mp3`],
    ["gE2", `${CDN}/guitar/E2.mp3`], ["gA2", `${CDN}/guitar/A2.mp3`], ["gE3", `${CDN}/guitar/E3.mp3`],
    ["tC4", `${CDN}/trumpet/C4.mp3`], ["vA3", `${CDN}/violin/A3.mp3`]
  ];
  let n = 0;
  for (const [k, url] of files) {
    try {
      const r = await fetch(url);
      buffers[k] = await ctx.decodeAudioData(await r.arrayBuffer());
    } catch (e) { console.warn(k, e); }
    n++;
    document.getElementById("status").textContent = `Seating chairs ${n}/${files.length}`;
  }
  document.getElementById("status").textContent = "Chairs seated. Ready.";
  render();
}
function playBuf(name, when, rate = 1, gain = 0.3) {
  if (!buffers[name] || !ctx) return;
  const s = ctx.createBufferSource();
  s.buffer = buffers[name];
  s.playbackRate.value = rate;
  const g = ctx.createGain();
  g.gain.value = gain;
  s.connect(g); g.connect(bus);
  s.start(when);
}
function rateFromMidi(midi, ref) { return Math.pow(2, (midi - ref) / 12); }
function chordAt(i) {
  if (i < LULL) return state.groove.lull[i];
  return state.groove.rise[i - LULL];
}
function zone(i) { return i < LULL ? "lull" : "rise"; }
function scheduleBar(barIndex, t0, stepDur) {
  const ch = chordAt(barIndex);
  const z = zone(barIndex);
  const rec = state.recipe.id;
  const onRise = z === "rise";
  const riseBar = barIndex - LULL;
  for (let s = 0; s < STEPS; s++) {
    const when = t0 + s * stepDur;
    if (s % 2 === 0) {
      let hatGain = 0.06;
      if (onRise && rec === "kit-open") hatGain = 0.06 + riseBar * 0.012;
      if (onRise && rec === "double-time" && riseBar >= 4) hatGain = 0.11;
      if (onRise && rec === "half-hush" && riseBar < 4) hatGain = 0.03;
      playBuf("hat", when, onRise && rec === "kit-open" ? 0.95 : 1, hatGain);
    }
    if (s === 0) playBuf("kick", when, 1, onRise ? 0.55 + riseBar * 0.02 : 0.45);
    if (onRise && rec === "tom-build" && (riseBar % 2 === 1) && (s === 8 || s === 12)) {
      playBuf("kick", when, 0.9, 0.35);
    }
    if (s === 8) playBuf("snare", when, 1, onRise ? 0.4 : 0.32);
    if (onRise && rec === "stop-and-go" && riseBar === 3) continue;
    if (s === 0) {
      const dens = (onRise && rec === "half-hush" && riseBar < 4) ? 0.18 : 0.26;
      playBuf("pC4", when, rateFromMidi(ch.piano[2] || 60, 60), dens);
      playBuf("pA3", when, rateFromMidi(ch.piano[1] || 57, 57), dens * 0.85);
      let bassMidi = ch.bass;
      if (onRise && rec === "bass-lift") {
        const walkSteps = [0, 2, 3, 5, 7, 8, 10, 12];
        bassMidi = ch.bass + (walkSteps[riseBar] || 0);
      }
      if (onRise && rec === "pedal-rise") bassMidi = state.groove.lull[7].bass;
      playBuf("bA1", when, rateFromMidi(bassMidi, 33), 0.42);
      let gGain = 0.2;
      if (onRise && rec === "nylon-climb") gGain = 0.18 + riseBar * 0.02;
      playBuf("gA2", when, rateFromMidi(ch.guitar[0] || 45, 45), gGain);
    }
    if (onRise && rec === "nylon-climb" && s === 8) {
      playBuf("gE3", when, rateFromMidi((ch.guitar[2] || 57) + 2, 52), 0.26);
    }
    if (onRise && rec === "brass-door" && riseBar >= 4 && s === 0) {
      playBuf("tC4", when, rateFromMidi(ch.piano[3] || 69, 60), 0.28 + (riseBar - 4) * 0.04);
    }
    if (onRise && rec === "violin-swell") {
      playBuf("vA3", when + (s === 0 ? 0 : 99), rateFromMidi(ch.piano[2] || 60, 57), 0.12 + riseBar * 0.02);
    }
  }
}
function playMode(mode) {
  if (!ctx) return;
  if (ctx.state === "suspended") ctx.resume();
  stop();
  state.playing = true;
  state.mode = mode;
  const bpm = state.groove.bpm;
  const stepDur = 60 / bpm / 4;
  const barDur = stepDur * STEPS;
  let startBar = 0, endBar = TOTAL;
  if (mode === "A") { endBar = LULL; }
  if (mode === "8") { startBar = LULL; endBar = TOTAL; }
  const now = ctx.currentTime + 0.05;
  for (let i = startBar; i < endBar; i++) {
    scheduleBar(i, now + (i - startBar) * barDur, stepDur);
  }
  const totalTime = (endBar - startBar) * barDur;
  setTimeout(() => { state.playing = false; state.mode = null; }, totalTime * 1000 + 50);
  updatePunch();
}
function stop() {
  state.playing = false;
  state.mode = null;
  if (ctx) {
    bus.disconnect();
    bus = ctx.createGain();
    bus.gain.value = 0.35;
    bus.connect(ctx.destination);
  }
}
function updatePunch() {
  const g = state.groove;
  const r = state.recipe;
  const lines = [
    `RiseEight punch · ${g.name} · ${g.key} · ${g.bpm} bpm`,
    `Recipe: ${r.name} — ${r.blurb}`,
    ``,
    `Lull (bars 1–8): keep sparse, same chords looping.`,
    `Rise (bars 9–16): ${r.name}`,
    `  → bass: ${r.id === "bass-lift" ? "stepwise climb" : r.id === "pedal-rise" ? "hold dominant" : "root motion"}`,
    `  → kit: ${r.id === "kit-open" ? "hats open gradually" : r.id === "double-time" ? "double hats last 4" : r.id === "tom-build" ? "toms on odd bars" : "steady"}`,
    `  → color: ${r.id === "nylon-climb" ? "nylon rise" : r.id === "brass-door" ? "trumpet enters mid" : r.id === "violin-swell" ? "violin swell" : "piano + nylon"}`,
    ``,
    `Next section lands on bar 17. Export the rise WAV or copy this list into your DAW markers.`,
    `Live chairs only. No synths.`
  ];
  document.getElementById("punch").textContent = lines.join("\n");
}
function render() {
  const gEl = document.getElementById("grooves");
  gEl.innerHTML = "";
  grooves.forEach(g => {
    const b = document.createElement("button");
    b.textContent = g.name;
    if (g.id === state.groove.id) b.classList.add("active");
    b.onclick = () => { state.groove = g; render(); updatePunch(); };
    gEl.appendChild(b);
  });
  const rEl = document.getElementById("recipes");
  rEl.innerHTML = "";
  recipes.forEach(r => {
    const b = document.createElement("button");
    b.textContent = r.name;
    if (r.id === state.recipe.id) b.classList.add("active");
    b.onclick = () => { state.recipe = r; render(); updatePunch(); };
    rEl.appendChild(b);
  });
  const barsEl = document.getElementById("bars");
  barsEl.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    const ch = state.groove.lull[i];
    const d = document.createElement("div");
    d.className = "bar lull";
    d.innerHTML = `<span class="n">${i + 1}</span><span class="ch">${ch.symbol}</span>`;
    barsEl.appendChild(d);
  }
  for (let i = 0; i < 8; i++) {
    const ch = state.groove.rise[i];
    const d = document.createElement("div");
    d.className = "bar rise";
    d.innerHTML = `<span class="n">${i + 9}</span><span class="ch">${ch.symbol}</span>`;
    barsEl.appendChild(d);
  }
  updatePunch();
}
document.getElementById("playA").onclick = () => playMode("A");
document.getElementById("playB").onclick = () => playMode("B");
document.getElementById("play8").onclick = () => playMode("8");
document.getElementById("stop").onclick = stop;
document.getElementById("copy").onclick = () => {
  navigator.clipboard.writeText(document.getElementById("punch").textContent);
  document.getElementById("status").textContent = "Punch list copied.";
};
load();
