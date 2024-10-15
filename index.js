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
