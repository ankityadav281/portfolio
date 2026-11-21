/**
 * Main Application Orchestrator
 * Automatically executes module initializers once the DOM is ready.
 */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof initNavigation === 'function') initNavigation();
  if (typeof initModals === 'function') initModals();
  if (typeof initParticleWave === 'function') initParticleWave();
});
