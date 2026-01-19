// Source - https://stackoverflow.com/a
// Posted by Durga
// Retrieved 2026-01-19, License - CC BY-SA 3.0

document.addEventListener('DOMContentLoaded', (event) => {
  const myButton = document.getElementById('stopmusicbutton');
  if (myButton) {
    myButton.addEventListener('click', function() {
      console.log("Button function started!"); // This message should appear in the console
  // Your function calls or custom code here
          var audioElements = document.getElementsByClassName("music");

for (var i = 0; i < audioElements.length; i++) {
    audioElements[i].pause();
    audioElements[i].currentTime = 0;
}
    });
  };
});
