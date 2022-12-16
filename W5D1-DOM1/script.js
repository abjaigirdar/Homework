// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];



// Task 1.0
let mainEl = document.querySelector("main");

// Task 1.1
mainEl.style.backgroundColor = "var(--main-bg)";

// Task 1.2
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// Task 1.3
mainEl.classList.add("flex-ctr");

// Task 2.0
let topMenuEl = document.getElementById("top-menu");

// Task 2.1
topMenuEl.style.height = "100%";

// Task 2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Task 2.3
topMenuEl.classList.add("flex-around");

// Task 3.0
// Copy the following data structure to the top of script.js:

// Task 3.1

function iterateMenuLink(array, menuElement) {
  array.forEach((element) => {
    // create an <a> element
    const newElement = document.createElement("a");

    // add href attribute
    newElement.setAttribute("href", element.href);

    // set element content
    newElement.innerHTML = element.text;

    // append new element
    menuElement.append(newElement);
  });
}

iterateMenuLink(menuLinks, topMenuEl);
