const DOMSelectors = {
  body: document.querySelector("body"),
  header: document.querySelectorAll("h1"),
  items: document.querySelectorAll("li"),
  text: document.querySelector("#txt"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
  container: document.querySelector(".container"),
  

  NameInput: document.getElementsByID("name-input"),
  DescInput: document.getElementsByID("Desc-input"),
  ImageInput: document.getElementsByID("Image-input"),
  ColorInput: document.getElementsByID("Color-input"),
};
console.log(DOMSelectors.text);
let id = 0

function makecard(event) {
  event.preventDefault();
  let name = DOMSelectors.NameInput.value;
  let desc = DOMSelectors.DescInput.value;
  let image = DOMSelectors.ImageInput.value;
  let color = DOMSelectors.ColorInput.value;

  DOMSelectors.container.insertAdjacentHTML(
    id += 1,
    "beforeend",
    `
    <div class = "card" id = "${id}">
    <h2 class = "card-header"> ${name} </h2>
    <img src"${image}" alt="image made" class = "card-image">
    <p>${desc}</p>

    
    `
  );
  let cardcolor = document.getElementById(id);
  cardcolor.style.backgroundColor = color
}

function remove(event){
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
});

DOMSelectors.form.addEventListener("submit", function (event){
  event.preventDefault();
  makecard(event);
})

/*function backgroundandtext(background, text) {
  background.style.backgroundColor = "blue";
  text.style.fontSize = "50px";
}

backgroundandtext(DOMSelectors.body, DOMSelectors.text);*/
