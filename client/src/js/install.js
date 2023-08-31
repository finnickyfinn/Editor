const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault(); // Stops refreshing the page once the button is pressed
  window.deferredPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (window.deferredPrompt) {
    window.deferredPrompt.prompt(); // Prompt the user to install the PWA
    const choiceResult = await window.deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      console.log('Installation successful!');
      butInstall.setAttribute('disabled', true);
      butInstall.textContent = 'Install successful!';
    }
    window.deferredPrompt = null;
  }
});

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App installed successfully!', event);
});