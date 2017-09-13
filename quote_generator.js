$(document).ready(function() {
  $("#button").click(function() {
    $.ajax({
      cache: false,
      url:
        "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
      success: function(result) {
        $("#quote").html(result[0].content);
        $("#author").html("--" + result[0].title);
      }
    });
  });
  $(".share").click(function() {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        $("#quote").text() +
        $("#author").text().replace(/\"/g, "")
    );
  });
});