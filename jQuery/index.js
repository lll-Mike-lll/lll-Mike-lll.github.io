// $("h1").css("color","red");
// $("h1").css("color","green");
// $("h1").css("font-size","5rem");
// $("h1").addClass("big-title");
// $("button").text("mike");
// $("button").html("<em>mike</em>");
$("a").attr("href", "http://www.yahoo.com");

$("input").keypress(function() {
  // console.log(event.key);
  $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "red");
});

$("h1").before("<button name='mike'>new</button>");

$("button[name = 'mike']").click(function() {
  $("h1").slideToggle();
});

$("button").click(function() {
  $("h1").text("mike");
});
