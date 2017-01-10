$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me.  I meant no offense.</li>");
  });

  $(".col-md-4#javascript button").click(function() {
    $(".col-md-4#javascript p").toggle();
  });

  $(".col-md-4#operators button").click(function() {
    $(".col-md-4#operators p").toggle();
  });

  $(".col-md-4#variables button").click(function() {
    $(".col-md-4#variables p").toggle();
  });

  $(".col-md-4#varNamConv button").click(function() {
    $(".col-md-4#varNamConv p").toggle();
  });

  $(".col-md-4#functions button").click(function() {
    $(".col-md-4#functions p").toggle();
  });

  $(".col-md-4#methods button").click(function() {
    $(".col-md-4#methods p").toggle();
  });

  $(".col-md-4#arguments button").click(function() {
    $(".col-md-4#arguments p").toggle();
  });

});
