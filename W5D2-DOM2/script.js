// Menu data structure
let menuLinks = [
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


/* -------------------------------------------------------------- */


// Task 1.0
// Select and cache the <main> element in a variable named mainEl
let mainEl = document.querySelector("main");

// Task 1.1
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

// Task 1.2
// Set the content of mainEl to <h1>SEI Rocks!</h1>
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// Task 1.3
// Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

// Task 2.0
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById("top-menu");

// Task 2.1
// Set the height topMenuEl to be 100%.
topMenuEl.style.height = "100%";

// Task 2.2
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Task 2.3
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// Task 3.0
// Copy the following data structure to the top of script.js


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


/* <--- React 5.2 - Homework ---> */


// Task 4.0
// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl
let subMenuEl = document.getElementById("sub-menu");

// Task 4.1
// Set the height subMenuEl element to be 100%.
subMenuEl.style.height = "100%";

// Task 4.2
// Set the background color of subMenuEl to the value stored in the --sub-menu-bgCSS custom property
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Task 4.3
// Add the class of flex-around to the subMenuEl element
subMenuEl.classList.add("flex-around");

// Task 4.4
// Set the CSS position property of subMenuEl to the value of absolute
subMenuEl.style.position = "absolute";

// Task 4.5
// Set the CSS top property of subMenuEl to the value of 0
subMenuEl.style.top = "0";

// Task 5.0
// Update the menuLinks array (refer to top of document for array)

// Task 5.1
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks
let topMenuLinks = document.querySelectorAll("#top-menu a");

// Declare a global showingSubMenu variable and initialize it to false;
let showingSubMenu = false;

// Task 5.2

function buildSubMenu(subLinks) {
  // Clear the contents of subMenuEl
  subMenuEl.innerHTML = "";

  // Iterate over the subLinks array
  subLinks.forEach((link) => {
    // Create an <a> element
    const subMenuLink = document.createElement("a");

    // Set the href attribute of the <a> element to the href property of the "link" object
    subMenuLink.href = link.href;

    // Set the content of the <a> element to the value of the text property of the "link" object
    subMenuLink.textContent = link.text;

    // Append the <a> element to the subMenuEl element
    subMenuEl.appendChild(subMenuLink);
  });
}

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();

  // Return if the element clicked was not an <a> element
  if (event.target.tagName !== "A") {
    return;
  }
  // Log the content of the target. This is for testing purposes only.
  console.log(event.target.textContent);

  // Check if the clicked <a> element has an "active" class
  if (event.target.classList.contains("active")) {
    // Remove the "active" class
    event.target.classList.remove("active");

    // Set showingSubMenu to false
    showingSubMenu = false;

    // Set css top property of subMenuEl to 0
    subMenuEl.style.top = "0";

    // Return to exit the handler
    return;
  }

  // Remove the "active" class from each <a> element in topMenuLinks
  topMenuLinks.forEach((link) => link.classList.remove("active"));

  // Add class name of "active" to the <a> element that was clicked
  event.target.classList.add("active");

  const link = menuLinks.find((link) => link.text === event.target.textContent);

  if (link && link.subLinks) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }

  if (showingSubMenu) {
    // 1. Call buildSubMenu function passing it the subLinks array for the clicked <a> element
    buildSubMenu(link.subLinks);
    // 2. Set the CSS top property of subMenuEl to 100%
    subMenuEl.style.top = "100%";
  } else {
    // Set the CSS top property of subMenuEl to 0
    subMenuEl.style.top = "0";
  }
});


// Task 5.3 (completed)

// Task 5.4 (completed)

// Task 5.5 (completed)

// Task 5.6 (completed)

// Task 5.7 (completed)

// Task 5.8 (completed)

// Task 6.0

subMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  showingSubMenu = false;
  subMenuEl.style.top = "0";

  topMenuLinks.forEach((element) => {
    element.classList.remove("active");
  });
});

// Task 6.1 (completed above)

// Task 6.2 (completed above)

// Task 6.3 
subMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  showingSubMenu = false;
  subMenuEl.style.top = "0";
  mainEl.innerHTML = `<h1>${event.target.innerHTML}</h1>`;
});


// Task 6.4 
topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  if (event.target.innerHTML === "ABOUT") {
    mainEl.innerHTML = `<h1>about</h1>`;
  } else {
    mainEl.innerHTML = `<h1>${event.target.innerHTML}</h1>`;
  }
});