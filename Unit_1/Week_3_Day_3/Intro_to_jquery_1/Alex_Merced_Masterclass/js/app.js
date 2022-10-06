
const log = (title, ...message) => {
    console.log(`===============${title}===================`)
    console.log(...message)
    console.log("==========================================")
}

// Javascript way of changing color of text
const plain = document.querySelector("#plain");
// plain.style.color = "pink";
// Jquery was of changing color of text
const $jquery = $("#jquery");
//$jquery.css("color", "red");

// Javascript way of adding classes
// plain.classList.add("green");
// Jquery way of adding classes
// $jquery.addClass("green");

// Adding a button with Javascript
const button = document.createElement("button");
button.innerText = "Javascript";
plain.append(button);

// Adding a button with Jquery
const $button = $("<button>");
$button.text("Jquery");
$jquery.append($button);

// Adding events with Javascript
button.addEventListener("click", () => {
    button.style.backgroundColor = "brown";
})
// Adding events with Jquery
$button.on("click", () => {
    $button.css("background-color", "red");
})