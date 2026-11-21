/**
 * Dotted Particle-Wave Simulation Module
 * Recreates the 3D mathematical perspective wave visual from the editorial reference design.
 */
function initParticleWave() {
  const canvas = document.getElementById('particle-wave-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = canvas.width = rect.width * (window.devicePixelRatio || 1);
    height = canvas.height = rect.height * (window.devicePixelRatio || 1);
    ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
  }
  resize();
  window.addEventListener('resize', resize);

  const rows = 38;
  const cols = 48;
  let time = 0;

  function draw() {
    const dispW = canvas.getBoundingClientRect().width;
    const dispH = canvas.getBoundingClientRect().height;
    ctx.clearRect(0, 0, dispW, dispH);

    const centerX = dispW * 0.48;
    const centerY = dispH * 0.52;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Normalize coordinates
        const xNorm = (c - cols / 2) / (cols / 2);
        const zNorm = r / rows;

        // Wave elevation with sine harmonics
        const dist = Math.sqrt(xNorm * xNorm + (zNorm - 0.5) * (zNorm - 0.5));
        const wave = Math.sin(xNorm * 4 + zNorm * 6 + time) * Math.cos(dist * 3 - time * 0.5);

        // Perspective 3D projection
        const depth = 0.45 + zNorm * 0.75;
        const projX = centerX + (xNorm * dispW * 0.42) / depth;
        const projY = centerY + ((zNorm - 0.5) * dispH * 0.6 + wave * 28) / depth;

        // Alpha and size based on depth and position
        const alpha = Math.max(0.08, Math.min(0.65, (1 - zNorm) * 0.75 + wave * 0.15));
        const radius = Math.max(0.6, (1.8 / depth) * 0.85);

        ctx.beginPath();
        ctx.arc(projX, projY, radius, 0, Math.PI * 2);
        ctx.fillStyle = 
gba(241, 238, 232, );
        ctx.fill();
      }
    }
    time += 0.008;
    requestAnimationFrame(draw);
  }
  draw();
}

if (typeof window !== 'undefined') {
  window.initParticleWave = initParticleWave;
}
