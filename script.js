
// Obtendo os elementos do formulario.
const checkList = document.getElementById("check-lists")
const form = document.querySelector("form")

//adicionado
let itemId = 0

// Captando o evento de submit do formulario.
form.onsubmit = (e) =>{
  e.preventDefault()

  //Mostrar a lista
  // checkList.classList.add("show-list") antes

//depois adicionado
const input = document.getElementById("newItens")
const itemText = input.value.trim()

if (itemText === "") {
  return
}

itemId++

  const listItem = document.createElement("div");
  listItem.className = "list flex space";
  listItem.innerHTML = `
    <div class="flex">
      <input type="checkbox" id="item-${itemId}" name="item-${itemId}">
      <label class="item-name" for="item-${itemId}">
        ${itemText}
      </label>
    </div>

    <button type="button" class="delete-item">
      <img src="./assets/icons/dump.svg" alt="Remover item">
    </button>
  `;

  checkList.appendChild(listItem);

  input.value = ""; // limpa o campo

}

// Funsao para identificar o botao delete
document.addEventListener("click", (e) => {

  // Verifica se foi clikado o batao delete
  if(e.target.closest(".delete-item")){
    const list = e.target.closest(".list")

    // Remove a list especifica
    if (list) {
      list.remove()
      
    }
  }
})