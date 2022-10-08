// Assign the div to a vriable with jQuery 
const $div = $("div");
console.log($div);

// change the text node.innerText = "
$div.text(" This is some new text"); // change text
console.log($div.text()); // Retrieve stored text


// Change the html node.innerHTML = ""
$div.html("<h1>I changed the inner html</h1>");
console.log($div.html());

// Change a style property node.style.property = ""
$div.css("color", "purple") // Changes it
console.log($div.css("color")) // Retrieves it

// Add a class node.classList.add("class")
$div.addClass("cheese");
$div.removeClass("cheese");

// Add an event and use toggleClass
// node.addEventListener("event" () => {})
const $button = $("button");
$button.on("click", () => {
    $div.toggleClass("cheese")
})

// Create an img and append to div
// document.createElement("img")
// node.setAttribute("src", "https://")
const $img = $("<img>")
$img.attr("src", "https://i.ytimg.com/vi/MjEaniGTrx0/maxresdefault.jpg")
$div.append($img);
// in your javascript, using jquery, do the following in the following order
// create an li with the text of "1" and append it to the ul
// create an li with the text of "5" and append it the the ul
// create an li with the text of "3" and append it to the ul so that it is after 1 and before 5
// create an li with the text of "2" and append it to the ul so that it is after 1 and before 3
// create an li with the text of "4" and append it to the ul so that it is after 3 and before 5

const $li_1 = $("<li>1</li>");
$("ul").append($li_1);

const $li_5 = $("<li>5</li>");
$("ul").append($li_5);

const $li_3 = $("<li>3</li>")
$("ul li:first").append($li_3)

const $li_2 = $("<li>2</li>")
// Find $li_3 and put $li_2 before it
$li_3.before($li_2)

const $li_4 = $("<li>4</li>")
$li_5.before($li_4)


