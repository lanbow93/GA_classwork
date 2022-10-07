// https://codepen.io/the-doctor1434/full/yLjxWpN

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
  if(event.target.innerHTML === "about") {
    document.querySelector("h1").innerText = "<h1>about</h1>";
  }

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

subMenuEl.addEventListener("click", function(event) {
  event.preventDefault();
  let tagChecker = event.target.localName;
  if (tagChecker !== "a") {
    return;
  }
  console.log(event.target);
  showingSubMenu = false;
  subMenuEl.style.top = "0";

  const barLinks = topMenuEl.querySelectorAll("a");
  for (let barlink of barLinks) {
    barlink.classList.remove("active");
  }

  document.querySelector("h1").innerHTML = `${event.target.text}`
});
