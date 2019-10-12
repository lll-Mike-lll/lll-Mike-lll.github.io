var a = [];
$("div[type='button']").click(function() {
  if (this.getAttribute('id') === 'blue') {
    console.log('mike');
    a=[];
  } else {
    var b = Math.floor(Math.random() * 4)
    a.push(b);
    console.log(a);
  }

});

// $("div[id='blue']").click(function() {
//   console.log(a);
// });
// console.log(this.getAttribute('id'));
