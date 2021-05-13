var state = false;

var button = document.getElementById("myButton");
button.onclick = function() {
  state = !state;
  if (state) {
    button.innerHTML = "ON";
  } else {
    button.innerHTML = "OFF";
  }
}