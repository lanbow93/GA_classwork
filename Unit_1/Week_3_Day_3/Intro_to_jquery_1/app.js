// Using jQuery to store all list elements
const $li = $("li");
console.dir($li);
// Setting variable to the last list item
const $lastLi = $("li:last");
// console.log($lastLi);

// Iterating through elements in a jQuery Object with .each()
$("li").each(function(idx){
    console.log(idx + ": " + this.innerHTML);
})

// .eq() used to access jQuery nodelist by index
$li.eq(1).fadeOut();

// .html() used for both getting and setting innerHTML property

$("#inner").html("jQuery Rocks!");
// when applying a setter to DOM, the change appl+oes to ALL elements in the set(group)
// $("li").html("Hello SEI")  << "Make a jQuery object of ALL the li elements and changes them to Hello SEI

// html(): No arguments behaves as a getter
// html('new value'): One argument, behaves as a setter. 

// Changing color and font-weight on all li elements using jQuery
$("li").css({ color: "green", fontWeight: "bold"});
$("p").css("font-size", "30px")