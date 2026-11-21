/**
 * Navigation Module
 * Controls mobile navigation drawer open/close toggles.
 */
function initNavigation() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
  }
}

function closeDrawer() {
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (mobileDrawer) {
    mobileDrawer.classList.remove('open');
  }
}

if (typeof window !== 'undefined') {
  window.initNavigation = initNavigation;
  window.closeDrawer = closeDrawer;
}
