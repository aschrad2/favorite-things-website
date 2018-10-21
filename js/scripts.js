$(document).ready(function() {
  $("form#favorite").submit(function(event) {
    // Save the submitted inputs into named variables
    var food = $("input#food").val();
    var movie = $("input#movie").val();
    var exercise = $("input#exercise").val();

    var quote = [food, movie, exercise];

    // Access the items of the array
    console.log(quote[0]);
    console.log(quote[1]);
    console.log(quote[2]);

    // Push each individual element of the array quote
    // into a new array called quotes
    var quotes = [];
    quotes.push(quote[0]);
    quotes.push(quote[1]);
    quotes.push(quote[2]);

    // Push each element of the cloned array (called: quotes)
    // into HTML id's that will display in a list
    $("#first").text(quotes[0]);
    $("#second").text(quotes[1]);
    $("#third").text(quotes[2]);

    // Return the favorite things back to HTML quote div to display them
    $("#rate").text(quote);
    $("#quote").show()
    event.preventDefault();

  });
});
