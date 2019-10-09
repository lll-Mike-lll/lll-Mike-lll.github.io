// alert("mike");
var rann = Math.floor(Math.random()*6)+1;
var rann_img = "dice"+rann+".png";
var rann_file = "./images/"+rann_img;
var rann2 = Math.floor(Math.random()*6)+1;
var rann_img2 = "dice"+rann2+".png";
var rann_file2 = "./images/"+rann_img2;
var img_1 = document.querySelectorAll("img")[0];
var img_2 = document.querySelectorAll("img")[1];
img_1.setAttribute("src",rann_file);
img_2.setAttribute("src",rann_file2);
if(rann===rann2){
  document.querySelector("h1").innerHTML="Draw";
}else if (rann<rann2) {
  document.querySelector("h1").innerHTML="Player 2 Win";
}else{
  document.querySelector("h1").innerHTML="Player 1 Win";
}
// img_2.setAttribute(rann_file);
