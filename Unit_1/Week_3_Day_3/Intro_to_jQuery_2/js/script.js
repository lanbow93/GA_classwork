var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
  ];

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

// Setting a click listener on the entire body
// Any div with the class circle, will trigger the function
$("body").on("click", "div.circle", function(){
    // "this" will be referring to the <div> with a class of circle
})

// Within the element that has the "homes" ID, 
// On all tbody elements, set a click listener on the buttons that console logs "this"
// $("#homes tbody").on("click", "button", function() {
//    console.log(this);
    // ^^^ Prints out the specific button's element
// });

// In an element with the ID homes, locate all elements with tbody
// When clicking a button element, remove 'this' (the clicked) element's closest <tr> element
$("#homes tbody").on("click", "button", function() {
  //  $(this).closest("tr").remove(); // .closest() looks up (parent elements) |  .children() looks down
    
  // Same as above but slowly fades out the element before removing it
  $(this).closest("tr").fadeOut(1000, function() {
        $(this).remove();
    })
});

// var newHomes // {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"}
let counterAddHome = 0;
$("#addHome").on("click", function(event) {
    const currentLink = newHomes[counterAddHome]
    if (counterAddHome < newHomes.length) {
        $linkToAdd = $(`
          <tr>
            <td>${currentLink.address}</td>
            <td>${currentLink.sf}</td>
            <td>${currentLink.bedrooms}</td>
            <td>${currentLink.baths}</td>
            <td>${currentLink.price}</td>
          <td><button class="btn btn-xs btn-danger">Remove</button></td>
        </tr>
        `);
        $("tbody").append($linkToAdd);
        counterAddHome++;
    } else {
        event.currentTarget.disabled = true;
    }
    
})