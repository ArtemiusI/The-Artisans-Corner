// Source - https://stackoverflow.com/a
// Posted by Durga
// Retrieved 2026-01-19, License - CC BY-SA 3.0

var tobaudio = document.getElementById("tobtheme");
tobaudio.onended = function() {
  console.log('Playing background audio')
  tobaudio.play();
};

document.addEventListener('DOMContentLoaded', (event) => {
  const myButton = document.getElementById('playtobmusicbutton');
  if (myButton) {
    myButton.addEventListener('click', function() {
      console.log("Button function started!"); // This message should appear in the console
  // Your function calls or custom code here
                  var audioElements = document.getElementsByClassName("music");

for (var i = 0; i < audioElements.length; i++) {
    audioElements[i].pause();
    audioElements[i].currentTime = 0;
}
          var tobaudio = document.getElementById("tobtheme");
            tobaudio.currentTime = 0;
            tobaudio.play();
    });
  }
});