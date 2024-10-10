const DOMSelectors = {
  header: document.querySelectorAll("h1"),
  items: document.querySelectorAll("li"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
  container: document.querySelector(".container"),
};

/*let student = {
  name: "matthew",
  age: 15,
  girlfriend: false,
};
*/
console.log(DOMSelectors.items);

DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.parentElement.style.backgroundColor = "red";
});

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
});

//select all buttons as nodelist (can use for each)
const buttons = document.querySelectorAll("button");
//make array from buttons if I want to use filter etc.
const newButtons = Array.from(buttons);
//iterate through array and change each buttons color
newButtons.forEach((button) => (button.style.backgroundColor = "blue"));

newButtons.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(event.target);
  })
);

let movie = {
  title: "Star Wars",
  release: 1977,
};

DOMSelectors.container,
  insertAdjacentHTML("beforeend", `<h2 class="cardheader">${movie.title}</h2>`);

//Step 1: Create the HTML for inputs, cards, and containers

//Step 2: select/query the HTML form and get values from inputs

//Step 3: turn values into objects: Movie, Game, User, whatever

// Step 4: insert card with object onto HTML

//Step 5: add event listener for remove button in JS
