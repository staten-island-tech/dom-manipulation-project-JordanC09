const DOMSelectors = {
  body: document.querySelector("body"),
  header: document.querySelectorAll("h1"),
  items: document.querySelectorAll("li"),
  text: document.querySelector("#txt"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
  container: document.querySelector(".container"),

  NameInput: document.getElementById("name-input"),
  DescInput: document.getElementById("Desc-input"),
  ImageInput: document.getElementById("Image-input"),
  ColorInput: document.getElementById("Color-input"),
};
console.log(DOMSelectors.text);
let id = 0;

function makecard() {
  let name = DOMSelectors.NameInput.value;
  let desc = DOMSelectors.DescInput.value;
  let image = DOMSelectors.ImageInput.value;
  let color = DOMSelectors.ColorInput.value;

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",

    `
    <div class = "card" id = "${id}">
      <h2 class = "card-header"> ${name} </h2>
      <img src="${image}" alt="image made" class = "card-image">
      <p>${desc}</p>
    </div>
    
    `
  );
  let cardcolor = document.getElementById(id);
  cardcolor.style.backgroundColor = color;
}

function remove(event) {
  event.preventDefault();
  document.querySelector(".card").remove();
}

/*DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.parentElement.style.backgroundColor = "red";
});*/
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
  makecard();
});
/*function backgroundandtext(background, text) {
  background.style.backgroundColor = "blue";
  text.style.fontSize = "50px";
}

backgroundandtext(DOMSelectors.body, DOMSelectors.text);*/
