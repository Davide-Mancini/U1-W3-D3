const mioForm = document.getElementById("new-element-list");
mioForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const nuovoElemento = document.getElementById("elemento");
  const elemento = nuovoElemento.value;

  console.log(elemento);

  const listaTask = document.createElement("div");
  listaTask.innerHTML = `
<ul> 
<li id='linea'>${elemento}</li>
</ul>
<button onclick= 'sbarraTask(event)'> ✔ </button>
<button id= "tastoRosso" onclick= 'eliminaTask(event)'> X </button>
`;
  //   listaTask.setAttribute("id", "paragrafo");
  //   console.log(listaTask);
  const contenitore = document.getElementById("spaziovuoto");
  contenitore.appendChild(listaTask);

  mioForm.reset();
});
const sbarraTask = function (e) {
  const li = document.getElementById("linea");

  li.classList.toggle("linea");
};
const eliminaTask = function (e) {
  e.target.parentElement.remove();
};
