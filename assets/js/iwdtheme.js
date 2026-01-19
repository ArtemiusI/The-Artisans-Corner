// Source - https://stackoverflow.com/a
// Posted by Durga
// Retrieved 2026-01-19, License - CC BY-SA 3.0

var audio = document.getElementById("iwdtheme");
audio.onended = function() {
  console.log('Playing background audio')
  audio.play();
};

document.addEventListener('DOMContentLoaded', (event) => {
  const myButton = document.getElementById('playiwdmusicbutton');
  if (myButton) {
    myButton.addEventListener('click', function() {
      console.log("Button function started!"); // This message should appear in the console
  // Your function calls or custom code here
                  var audioElements = document.getElementsByClassName("music");

for (var i = 0; i < audioElements.length; i++) {
    audioElements[i].pause();
    audioElements[i].currentTime = 0;
}
          var iwdaudio = document.getElementById("iwdtheme");
            iwdaudio.currentTime = 0;
            iwdaudio.play();
    });
  }
});