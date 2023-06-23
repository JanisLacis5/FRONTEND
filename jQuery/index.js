// Add classes
$("h1").addClass("big");
$("h1").removeClass("big");
$("h1").addClass("big ugly");

// Change text / innerHTML
$("h1").html("bye");
$("h1").html("Hello");

// Attributes (href, src, etc.)
$("a").attr("href"); // get (console.log)
$("a").attr("href", "https://yahoo.com"); // set (to yahoo)

// eventListener
$(document).keydown(function(e){
    $("h1").html(e.key);
});     // setting h1 to key that is pressed

$(document).on("keydown", function(e) {
    $("h1").html(e.key);
});     // same as previous

// New HTML element
$("h1").after("<button>before</button>");
$("h1").append("<button>append</button>");

// Animations
$("button.first").on("click", function() {
    $("h1").fadeOut();  // built - in
});

$("button.second").on("click", function() {
    $("a").animate({opacity: 0.3});     // custom
});

$("button.third").on("click", function() {
    $("button.fourth").fadeOut().fadeIn().animate({opacity: 0.3});    // chained
});