var reactions = ["eyeroll", "facepalm", "happy", "high five", "kiss", "lol", "no", "wink"];

$(document).ready(function renderbuttons() {
    $("#addreaction").empty();
    for (var i = 0; i < reactions.length; i++) {
        var reactionbutton = $("<button>").text(reactions[i]);
        reactionbutton.addClass("reactions");
        reactionbutton.addClass("btn btn-primary");
        reactionbutton.attr("value", reactions[i]);
        $("#reactionsgif").append(reactionbutton);


    };

    $("#addreaction").on("click", function () {
        event.preventDefault();
        var addreaction = $("#reaction-input").val();
        console.log(addreaction);
        var addreactionbutton = $("<button>").text(addreaction);
        addreactionbutton.addClass("reactions");
        addreactionbutton.addClass("btn btn-primary");
        addreactionbutton.attr("value", reactions[i]);
        $("#reactionsgif").append(addreactionbutton);
        $("#reaction-input").val('');
    });

    $("#reactionsgif").on("click", ".reactions", function () {
        $("#gifresults").empty();
        event.preventDefault();
        var reaction = $(this).val();
        console.log(reaction);
    


    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=DbTrA1zDtXF3YA0imZIJ1GeDSwTgnsrv&q=" + reaction + "&limit=5&offset=0&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                var gif = $("<img>");
                var moving = response.data[i].images.fixed_height_small.url;
                var still = response.data[i].images.downsized_still.url;
                var rating = $("<p>").text("Rating: " + response.data[i].rating);
                rating.addClass("gif");
                gif.addClass("image");
                gif.attr('src', still);
                gif.attr('data-still', still);
                gif.attr('data-animated', moving);
                $("#gifresults").append(rating);
                $("#gifresults").append(gif);
            };

            $("document").on("click",".image", function(){
                var state = $(this).data("state");
                 if ("src" === gif.moving) {
                    $(this).attr("src", "data-still");
                 } else {
                     $(this).attr("src", "data-animated");
                 }
            });
        });
    });
});
    













