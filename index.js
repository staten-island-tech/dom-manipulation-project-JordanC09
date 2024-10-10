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
};
console.log(DOMSelectors.text);
function backgroundandtext(background, text) {
  background.style.backgroundColor = "blue";
  text.style.fontSize = "50px";
}

backgroundandtext(DOMSelectors.body, DOMSelectors.text);
