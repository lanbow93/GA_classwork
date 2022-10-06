const btn = document.querySelector('button');
btn.addEventListener('click', function(event) {
    const li = document.createElement("li");
    const textbox = document.querySelector("input");
    li.textContent = `${textbox.value}`;
    document.querySelector("ul").appendChild(li);
    //Following clears out text box AFTER logging it
    textbox.value = "";
    //   console.log(event);
    // Property to view message inside of <input> field
    // console.dir(textbox);
});

/*
------------Review Questions------------
❓ What is the name of the method used to attach event listeners to elements?

ELEMENT.addEventListener("eventType", functionName);
❓ Name three events that might be triggered in the browser.
onclick, onmouseover, onload
*/

// Grabbing list information when it is clicked
document.querySelector("ul").addEventListener("click", handleClick);

function handleClick(event) {
    event.target.style.color = "red";
}

//way to remove click listener, only withs with specified function name
document.querySelector("ul").removeEventListener("click", handleClick);

/*
Essential Questions
❓ What is the argument that JS passes to an event listener when it calls it?
    the element object that the listener was attached to
❓ What is the name of the property on the above argument that represents the DOM element that dispatched the event?
ElementOBJ.target
❓ Let's say you needed to have an event listener respond to a clickevent on the <td>s within a <table>- would you have to add event listeners to each <td>? Support your answer.

No, if all were serving the same function then you could put the listener on the parentElement

```
elemenet.querySelector("table").addEventListener("click", repeatableFunction);
```

*/