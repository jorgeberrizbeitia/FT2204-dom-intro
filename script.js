// aqui escribo codigo de JS
console.log("JS funcionando!")

console.log(document) // document refiere a todo el DOM visible en el navegador

// * querySelector => hace una busqueda de un elemento que coincida con la busqueda

// let titleDOM = document.querySelector("h1");
let titleDOM = document.querySelector("#title");
console.log(titleDOM); // Node/Elemento de DOM
console.log(titleDOM.innerText) // el texto dentro del Elemento de DOM
titleDOM.innerText = "Aprendiendo DOM";  // para cambiar el texto

setTimeout(() => {
  titleDOM.innerText = "Luego de 1 seg" // esto cambiar el texto luego de 1 seg
}, 1000)

let paragraphDOM = document.querySelector(".some-text"); // un solo elemento igual que antes
console.log(paragraphDOM);
paragraphDOM.innerText = "patata";

// * querySelectorAll => hace una busqueda de todos los elementos que coincidan con la busqueda

let allParagraphDOM = document.querySelectorAll(".some-text")
console.log(allParagraphDOM) // NodeList => un elemento que parece un array PERO no es un array. Contiene varios elementos de DOM.

allParagraphDOM[1].innerText = "banana";

// for (let eachParagDOM of allParagraphDOM) {
//   eachParagDOM.innerText = "HOLA"
// } // esto SI lo podemos hacer

allParagraphDOM.forEach((eachNodeDOM) => {
  eachNodeDOM.innerText = "Modificando todos con forEach"
})

// los NodeLists no nos permiten usar metodos como map, filter, sort. :(

// estos dos metodos querySelector y querySelectorAll son los que más se recomiendan y con estos podemos hacer todo tipo de busquedas en el DOM

// sin embargo...

// existen otros que tambien son usados, hacen lo mismo que los de arriba.

let titleOtroMetodoDOM = document.getElementById("title") // ejemplo
// ver tambien: getElementsByClassName, getElementsByTagName


// * Hacer busquedas dentro de otros elementos de DOM (no sobre el document)

let cardsDOM = document.querySelectorAll(".card") // todas las cartas (2)

cardsDOM.forEach((eachCardDOM) => {
  console.log(eachCardDOM)
  // eachCardDOM.h3.innerText = "Prueba" // :(

  let h3DOM = eachCardDOM.querySelector("h3"); // busca en cada carta
  h3DOM.innerText = "cambiando el H3"

  let textDOM = eachCardDOM.querySelector("p"); // busca en cada carta
  textDOM.innerText = "cambiando el p"
})


// * innerText vs innerHTML vs textContent

let footerDOM = document.querySelector("#footer")

console.log(footerDOM.innerText); // el texto tal como se muestra en el navegador
console.log(footerDOM.textContent); // el texto tal como está en el html
console.log(footerDOM.innerHTML);

let finalThoughtsDOM = document.querySelector("#final-thoughts")
finalThoughtsDOM.innerHTML = `<h2>Hola</h2>`; // intenta hacer parse de esta informacion a syntax de html


// * crear y borrar elementos de DOM

let emptyDivDOM = document.querySelector("#empty-container"); // donde lo voy a agregar

let newDOMElement = document.createElement("h4"); // esto crea un nuevo elemento de DOM y nos da la referencia.
newDOMElement.innerText = "Nuevo elemento"

setTimeout(() => {
  emptyDivDOM.append(newDOMElement) // agrega un elemento de DOM a otro
}, 1000)

setTimeout(() => {
  newDOMElement.remove() // remueve un elemento de DOM
  // titleDOM.remove() // borraria tambien el title del inicio
}, 2000)


// * cambiar id y clases

console.log( finalThoughtsDOM.id );
finalThoughtsDOM.id = "new-id";

// console.log( finalThoughtsDOM.className );
// finalThoughtsDOM.className = "nueva-clase"

console.log( finalThoughtsDOM.classList );

// contains, add, remove, toogle

console.log( finalThoughtsDOM.classList.contains("after-footer") )
finalThoughtsDOM.classList.add("new-class");
finalThoughtsDOM.classList.remove("best-practice");
// toggle si existe lo remueve, si no existe lo agrega.



// EVENTS


// FUNCTIONES
let increaseNum = () => {
  counterDOM.innerText = Number(counterDOM.innerText) + 1;
}

let decreaseNum = () => {
  counterDOM.innerText = Number(counterDOM.innerText) - 1;
}

let changeTitle = () => {
  // console.log("probando")
  console.log(eventTitleDOM.style)
  eventTitleDOM.style.color = "blue";
  eventTitleDOM.innerText = "NUEVO COLOR"
}

let addListItem = () => {

  // buscar el texto del campo
  // innerText vs value
  console.log(inputDOM.value)

  // crear elemento li de DOM
  let newLi = document.createElement("li")
  
  // agrgear texto al elemento li
  newLi.innerText = inputDOM.value

  // añadir el elemento li a las lista ul
  listDOM.append(newLi)

  // opcional
  // let newLi = `<li>${inputDOM.value}</li>`

}

let deleteSelf = (event) => {
  console.log(event.target) // siempre me da el elemento de DOM que cause el addEventListener
  console.log("probando")
  // Node.remove() // borrar ese elemento de Node
  event.target.remove()
  
  // event.target es el button
  // una propiedad que nos permite acceder al padre de ese elemento de DOM
  // parentNode
  // event.target.parentNode.remove()
}

// ELEMENTOS DE DOM
// funcionalidad contador
let counterDOM = document.querySelector("#counter h2 span");
let buttonAddDOM = document.querySelector("#increment");
let buttonSubDOM = document.querySelector("#decrement");
// funcionalidad hover
let eventTitleDOM = document.querySelector("#event-title");
// funcionalidad lista
let inputDOM = document.querySelector("#name")
let addBtnDOM = document.querySelector("#add-btn")
let listDOM = document.querySelector("#output-list")
let allLastBtns = document.querySelectorAll(".last-btn")

// ADDEVENTLISTENERS
buttonAddDOM.addEventListener("click", increaseNum)
buttonSubDOM.addEventListener("click", decreaseNum)
eventTitleDOM.addEventListener("mouseenter", changeTitle)
addBtnDOM.addEventListener("click", addListItem)
allLastBtns.forEach((eachBtn) => {
  eachBtn.addEventListener("click", deleteSelf)
})




