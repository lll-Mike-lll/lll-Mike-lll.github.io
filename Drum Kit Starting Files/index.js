// document.querySelector("button").addEventListener("click",handleClick);
// document.querySelectorAll("button")[1].addEventListener("click",handleClick);
// function handleClick(){
//   alert("click");
// }

var numberOfDrumButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",
    function() {
      // console.log(this.innerHTML);
      // this.style.color = "white";
      var buttonInnerHTML = this.innerHTML;
      switch (buttonInnerHTML) {
        case "w":
          var crash = new Audio("./sounds/crash.mp3");
          crash.play()
          break;
        case "a":
          var kick = new Audio("./sounds/kick-bass.mp3");
          kick.play()
          break;
        case "s":
          var aud = new Audio("./sounds/snare.mp3");
          aud.play()
          break;
        case "d":
          var aud_d = new Audio("./sounds/tom-1.mp3");
          aud_d.play()
          break;
        case "j":
          var aud_j = new Audio("./sounds/tom-2.mp3");
          aud_j.play()
          break;
        case "k":
          var aud_k = new Audio("./sounds/tom-3.mp3");
          aud_k.play()
          break;
        case "l":
          var aud_l = new Audio("./sounds/tom-4.mp3");
          aud_l.play()
          break;
        default:

      }
    });
}

document.addEventListener('keypress', function(event) {
  console.log(event);
  switch (event.key) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play()
      break;
    case "a":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play()
      break;
    case "s":
      var aud = new Audio("./sounds/snare.mp3");
      aud.play()
      break;
    case "d":
      var aud_d = new Audio("./sounds/tom-1.mp3");
      aud_d.play()
      break;
    case "j":
      var aud_j = new Audio("./sounds/tom-2.mp3");
      aud_j.play()
      break;
    case "k":
      var aud_k = new Audio("./sounds/tom-3.mp3");
      aud_k.play()
      break;
    case "l":
      var aud_l = new Audio("./sounds/tom-4.mp3");
      aud_l.play()
      break;
    default:}
});

// var aud = new Audio("./sounds/tom-1.mp3");
// aud.play();
