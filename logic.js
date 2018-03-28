var reactions = ["eyeroll", "facepalm", "happy", "high five", "kiss", "lol", "no", "wink"];

$(document).ready(function renderbuttons() {
     $("#addreaction").empty();
    for (var i = 0; i < reactions.length; i++) {
        var reactionbutton = $("<button>");
        reactionbutton.addClass("#reactions");
        reactionbutton.addClass("btn btn-primary")
		reactionbutton.attr("title", reactions[i]);
        reactionbutton.text(reactions[i]);
        $("#reactionsgif").append(reactionbutton);
		console.log("title");

        

    };
     
});



    $("#addreaction").on("click", function(event) {
        event.preventDefault();
        var newreaction = $("#reaction-input").val().trim();
        reactions.push(newreaction);
        $("reaction-input").val('')
        console.log(reactions);
        
    });
		

    $(".reactions").on("click",function () {
		var title = $(this).data("title");
		console.log("title");
        
       // var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=DbTrA1zDtXF3YA0imZIJ1GeDSwTgnsrv&q=" + title + "&limit=25&offset=0&lang=en";
       
       // $.ajax({
           // url: queryURL,
           // method: "GET"
      //  })
        //.then(function(response){
           // console.log(response);
            //var imageURL = response.data.embed_url;
            //var gifimage =$("<img>");
            //gifimage.attr("src",imageURL);
           // gifimage.attr("alt","reactiongif");
          //  ("#reactionsgif").prepend(gifimage); 
        //})
    })

   
    





 

    //
  //  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=DbTrA1zDtXF3YA0imZIJ1GeDSwTgnsrv&q=eyeroll&limit=25&offset=0&rating=G&lang=en";

      // $.ajax({
         //   url: queryURL,
          // method:"GET"
  //  })

   // .then(function(response){
    //   console.log(url);


   // });
//})

