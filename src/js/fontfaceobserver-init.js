// Define fonts
var oswald = new window.FontFaceObserver('Oswald');
var droidSerif = new window.FontFaceObserver('Droid Serif');

// Check for availability
Promise.all([
  oswald.check(),
  droidSerif.check()
]).then(function() {
  document.documentElement.className += ' js-fontsLoaded';
});
