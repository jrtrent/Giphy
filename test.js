$("#reactionsgif").on("click", ".reactions", function () {
    event.preventDefault();
    var reaction = $(this).val();
    console.log(reaction);
});


var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=DbTrA1zDtXF3YA0imZIJ1GeDSwTgnsrv&q=" + reaction + "&limit=5&offset=0&lang=en";

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
            var gif = $("<img>").attr("src", response.data[i].images.original_still.url);
            var rating = $("<p>").text("Rating: " + response.data[i].rating);
            rating.addClass("gif");
            $("#gifresults").append(rating);
            $("#gifresults").append(gif);
        };
    });
});



// $("#reaction-input").on("click", function () {
// var addreaction = $(this).val();
//   console.log(title);

//  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=DbTrA1zDtXF3YA0imZIJ1GeDSwTgnsrv&q=" + title + "&limit=25&offset=0&lang=en";

//  $.ajax({
//      url: queryURL,
//  method: "GET"
//  })
//  .then(function (response) {
//  console.log(response);
//  for (var i = 0; i < response.data.length; i++) {
//       var moving = response.data[i].fixed_height_small.url;
//    var still = response.data[i].images.original_still.url;
//   var gifimage = $("<img>").attr("src", moving);
//   var gifstill = $("<img>").attr("src", still);
//   var rating = $("<p>").text("Rating: " + response.data[i].rating);
//    rating.addClass("gif");
//   $("#gifresults").append(rating);
//   $("#gifresults").append(gifimage);

// };
//   });

// if (state === "still") {
//  $(this).attr("src", $(this).attr("data-animate"));
//   $(this).attr("data-state", "animate");
// } else {
//    $(this).attr("src", $(this).attr("data-still"));
//      $(this).attr("data-state", "still");
//  }