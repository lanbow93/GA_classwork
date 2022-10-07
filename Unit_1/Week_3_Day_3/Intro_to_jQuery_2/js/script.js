$("#addHome").removeClass("btn-danger").addClass("btn-success");
$("h1").addClass("text-center");

//Checks to see if p has 'left-aligned' and 'big'
const isStyled = $("p").hasClass('left-aligned big')

// creates a new Huperlink text and set the id, href and text with jQuery
var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>' );

// All three are different versions of doing the same thing
// Setting a jQuery varibale to a paragraph with a class of bold
var $p = $('<p class="bold">');
var $q = $('<p>', {class: 'bold'});
var $r = $('<p>').addClass('bold');

$("body").append($newLink);

// setting link attribute target to _blank, opens tab in a new page
$("#zillowLink").attr("target", "_blank");

// Getting the element by ID with jQuery and returning the url inside. 
console.log($("#zillowLink").attr("href"));

// Adding click listener with Jquery
// If "Add Home" button is clicked, log the jQuery event
$("#addHome").on("click", function(event) {
    console.log(event);
})

