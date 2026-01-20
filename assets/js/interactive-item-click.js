// Source - https://stackoverflow.com/a
// Posted by Durga
// Retrieved 2026-01-19, License - CC BY-SA 3.0

document.addEventListener('DOMContentLoaded', (event) => {
  const clickable = document.getElementsByClassName('interactive-item');
  if (clickable) {
    clickable.addEventListener('click', function() {
      console.log("Button function started!"); // This message should appear in the console

  var clicksound = document.getElementById("clickSound");
  clicksound.play();
  });
};
});