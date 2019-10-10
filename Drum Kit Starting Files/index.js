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
          var aud = new Audio("./sounds/tom-1.mp3");
          aud.play()
          break;
        default:

      }
    });
}
// var aud = new Audio("./sounds/tom-1.mp3");
// aud.play();
