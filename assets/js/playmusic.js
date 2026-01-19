// Source - https://stackoverflow.com/a
// Posted by Durga
// Retrieved 2026-01-19, License - CC BY-SA 3.0

var audio1 = document.getElementById("bg2themea");
audio1.onended = function() {
  console.log('Playing background audio')
  var audio2 = document.getElementById("bg2themeb");
  audio2.play();
};

var audio2 = document.getElementById("bg2themeb");
audio2.onended = function() {
  console.log('Playing background audio')
  var audio3 = document.getElementById("bg2themec");
  audio3.play();
};

var audio3 = document.getElementById("bg2themec");
audio3.onended = function() {
  console.log('Playing background audio')
  var audio4 = document.getElementById("bg2themed");
  audio4.play();
};

var audio4 = document.getElementById("bg2themed");
audio4.onended = function() {
  console.log('Playing background audio')
  var audio2 = document.getElementById("bg2themeb");
  audio2.play();
};

document.addEventListener('DOMContentLoaded', (event) => {
  const myButton = document.getElementById('stopsoamusicbutton');
  if (myButton) {
    myButton.addEventListener('click', function() {
      console.log("Button function started!"); // This message should appear in the console
  // Your function calls or custom code here
          var audio1 = document.getElementById("bg2themea");
            audio1.pause();
            audio1.currentTime = 0;
          var audio2 = document.getElementById("bg2themeb");
            audio2.pause();
            audio2.currentTime = 0;
          var audio3 = document.getElementById("bg2themec");
            audio3.pause();
            audio3.currentTime = 0;
          var audio4 = document.getElementById("bg2themed");
            audio4.pause();
            audio4.currentTime = 0;
    });
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  const myButton = document.getElementById('playsoamusicbutton');
  if (myButton) {
    myButton.addEventListener('click', function() {
      console.log("Button function started!"); // This message should appear in the console
  // Your function calls or custom code here
          var audio1 = document.getElementById("bg2themea");
            audio1.currentTime = 0;
            audio1.play();
    });
  }
});