// https://codesandbox.io/s/dom-menu-lab-rndnhn?file=/js/script.js

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Setting the main section of index.html
const mainEl = document.querySelector("main");

// Setting the background color of main to dark grey global variable
// creating and adding h1 title to the screem
// giving main the class 'flex-ctr
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.className = "flex-ctr";

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.className = "flex-around";

for (let linkObj of menuLinks) {
  topMenuEl.innerHTML += `<a href= "${linkObj.href}">${linkObj.text}</a>`;
}

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.className = "flex-around";
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

const topMenuLinks = topMenuEl.querySelectorAll("a");

var showingSubMenu = false;
topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  let tagChecker = event.target.localName;
  if (tagChecker !== "a") {
    return;
  }
  console.log(event.target);
  if (event.target.className === "active") {
    event.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  const barLinks = topMenuEl.querySelectorAll("a");
  for (let barlink of barLinks) {
    barlink.classList.remove("active");
  }

  // Creates array of sublinks for clicked area
  const targetSublink = function () {
    for (menuLink of menuLinks) {
      if (menuLink.text === event.target.text) {
        return menuLink.subLinks;
      }
    }
  };

  event.target.className = "active";
  targetSublink() ? (showingSubMenu = true) : (showingSubMenu = false);

  if (showingSubMenu) {
    buildSubMenu(targetSublink());
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
  }

}); // End of click event listener function

function buildSubMenu(sublinkArray){
  subMenuEl.innerText= "";
  sublinkArray.forEach(element => {
    let newLink = document.createElement("a");
    newLink.innerText = `${element.text}`;
    newLink.href = `${element.href}`
    subMenuEl.appendChild(newLink);
  });
}
/*
Code the buildSubMenufunction so that it:

Clears the contents of subMenuEl.
Iterates over the subLinksarray passed as an argument; and for each "link" object:

Create an <a>element.
On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
Set the new element's content to the value of the textproperty of the "link" object.
Append the new element to the subMenuElelement.*/