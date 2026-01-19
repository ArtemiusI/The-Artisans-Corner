// Source - https://stackoverflow.com/a
// Posted by Durga
// Retrieved 2026-01-19, License - CC BY-SA 3.0

var bg1audio = document.getElementById("bg1theme");
bg1audio.onended = function() {
  console.log('Playing background audio')
  bg1audio.play();
};

document.addEventListener('DOMContentLoaded', (event) => {
  const myButton = document.getElementById('playbg1musicbutton');
  if (myButton) {
    myButton.addEventListener('click', function() {
      console.log("Button function started!"); // This message should appear in the console
  // Your function calls or custom code here
                  var audioElements = document.getElementsByClassName("music");

for (var i = 0; i < audioElements.length; i++) {
    audioElements[i].pause();
    audioElements[i].currentTime = 0;
}
          var bg1audio = document.getElementById("bg1theme");
            bg1audio.currentTime = 0;
            bg1audio.play();
    });
  }
});