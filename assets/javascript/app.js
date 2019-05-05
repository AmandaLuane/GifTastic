console.log("HW#5");

//id="#gifHolder
//id="#buttonHolder" - Button Holder
//id="#search-Input" - Search Input
//id="#search-Btn"  - Search Button Sumbit

var buttonArray = ["running", "jumpiing"];

// //image still or not if clicked funciton
$(document).on("click", "img", function() {
    console.log("image click function running");

    var state = $(this).attr("data-state");
    var animateImage = $(this).attr("data-animate");
    var stillImage = $(this).attr("data-still");

    // var url = $(this).attr("scr");
    // console.log(url);

    console.log("image state " + state);

    if (state === "still") {
        console.log("img is still");
        $(this).attr("src", animateImage); 
        $(this).attr("data-state", "animate");
    } 
    else if(state == "animate") {
        console.log("img is animated");
        $(this).attr("src", stillImage);
        $(this).attr("data-state", "still");
    }
    
})

//event listener for subject buttons
$(document).on("click", ".subject", function() {
    console.log("action button on click fucntion starting");
    var subject = $(this).attr("data-name");
//URL for the Giphy sarch    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
    subject + "&api_key=3NHDJVzcQe1m3EFlsWQXqJaLtC88KUee&limit=10";
//AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        console.log(response);
        console.log(queryURL);
        var results = response.data;
        $("#gifHolder").empty();
        for (var i = 0; i < results.length; i++) {
            //div tag
            var actionDiv = $("<div>");
            
            //ratings
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + results[i].rating);
            //image tag
            var actionImage = $("<img>");
            //creating src
            actionImage.attr("src", results[i].images.original_still.url);
            actionImage.attr("data-still", results[i].images.original_still.url);
            actionImage.attr("data-animate", results[i].images.original.url);
            actionImage.attr("data-state", "still");
            actionImage.addClass("gif");
            
            //append actiondiv to html
            actionDiv.append(p);
            actionDiv.append(actionImage);

            // actionDiv.append(p);
            // actionDiv.append(actionImage);


            //Prepending the actionDiv to the HTML page
            $("#gifHolder").prepend(actionDiv);
        }
    });
});




function renderButtons() {
$("#buttonHolder").empty();
for (var i = 0; i < buttonArray.length; i++) {
    var a = $("<button>");
    a.addClass("subject");
    a.attr("data-name", buttonArray[i]);
    a.text(buttonArray[i]);
    $("#buttonHolder").append(a);
}
};

//search box entry moves to an array
$("#search-Btn").on("click", function(event) {
    console.log("start on click fuction");  
    event.preventDefault();
    // var subject = $("#searchBox").val().trim();
    var subject = $("#search-Input").val().trim();
    buttonArray.push(subject);
    console.log(subject);
    renderButtons();

});



renderButtons();





