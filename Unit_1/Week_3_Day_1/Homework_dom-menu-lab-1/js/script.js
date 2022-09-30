// https://codesandbox.io/s/dom-menu-lab-rndnhn?file=/js/script.js

// Menu data structure
var menuLinks = [
    { text: "about", href: "/about" },
    { text: "catalog", href: "/catalog" },
    { text: "orders", href: "/orders" },
    { text: "account", href: "/account" }
  ];
  
  const mainEl = document.querySelector("main");
  
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
  