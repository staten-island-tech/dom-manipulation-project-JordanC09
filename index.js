const DOMSelectors = {
  body: document.querySelector("body"),
  header: document.querySelectorAll("h1"),
  items: document.querySelectorAll("li"),
  text: document.querySelector("#txt"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
  container: document.querySelector(".container"),
  card: document.querySelector(".card"),

  NameInput: document.getELementsByID("name-input"),
  DescInput: document.getELementsByID("Desc-input"),
  ImageInput: document.getELementsByID("Image-input"),
  ColorInput: document.getELementsByID("Color-input"),
};
console.log(DOMSelectors.text);

function makecard(event) {
  event.preventDefault();
  let name = DOMSelectors.NameInput.value;
  let desc = DOMSelectors.DescInput.value;
  let image = DOMSelectors.ImageInput.value;
  let color = DOMSelectors.ColorInput.value;

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `
    <div class = "card">
    <h2 class = "card-header"> ${name} </h2>
    <img src"${image}" alt="image made" class = "card-image">
    
    `
  );
}

/*DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.parentElement.style.backgroundColor = "red";
});*/

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
});

/*function backgroundandtext(background, text) {
  background.style.backgroundColor = "blue";
  text.style.fontSize = "50px";
}

backgroundandtext(DOMSelectors.body, DOMSelectors.text);*/
