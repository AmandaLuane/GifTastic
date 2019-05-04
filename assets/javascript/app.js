console.log("HW#5");

//id="#gifHolder
//id="#buttonHolder" - Button Holder
//id="#search-Input" - Search Input
//id="#search-Btn"  - Search Button Sumbit

var buttonArray = [];


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

//event listener for subject buttons
// $(document).on("click", ".subject", alertMovieName);
$(".subject").on("click",function() {
    var suject = $(this).attr("data-name");
//URL for the Giphy sarch    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
    person + "&api_key=3NHDJVzcQe1m3EFlsWQXqJaLtC88KUee&limit=10";
//AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(respone) {
        
    })

})

renderButtons();





