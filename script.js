
// Obtendo os elementos do formulario.
const checkList = document.getElementById("check-lists")
const form = document.querySelector("form")
const itemQuantity = document.querySelector("form span")
const input = document.getElementById("newItems")


// Obtendo os elementos do footer
const footer = document.querySelector("footer")

// Manipulando o input para receber somente letras.
input.addEventListener("input", () => {
  const onlyLettersRegex = /[0-9]/g
  input.value = input.value.replace(onlyLettersRegex, "")
})



//adicionado
let itemId = 0

// Captando o evento de submit do formulario.
form.onsubmit = (e) =>{
  // Removendo o padão do carregamento do submit
  e.preventDefault()

  // Removendo os espaços a redor do texto
  const itemText = input.value.trim()
  
// Verificando se nada foi escrito
if (itemText === "") {
  alert("Por favor, digite algo.")
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

  // Adicionando o HTML dentro do checkList
  checkList.appendChild(listItem);
  
  // Atualição a quantidade dos items
  totalItems()

  // limpa o campo
  input.value = ""; 

}

// Atualiza a quantidade de item no carrinho
function totalItems() {
  try {
    // Pegando todos os itens do checkbox
    const items =  checkList.children

    // Atualizando a quantidade de itens 
    itemQuantity.textContent = ` ${items.length > 1 ? "Items" : "Item" }
     ${items.length}`
    
  } catch (error) {
    alert("Não foi possivel atualizar a quantidade dos items.")
  }

}

// Funsao para identificar o botao delete/close
document.addEventListener("click", (e) => {

  // Verifica se foi clikado o batao delete
  if(e.target.closest(".delete-item")){
    const list = e.target.closest(".list")

    // Remove a list especifica
    if (list) {
      // Removendo a lista
      list.remove()
      totalItems()
      // Mostrando o alerta do footer
      footer.classList.remove("hidden")
    }
  }

  // Identificando o botao close
  if (e.target.closest(".close")) {
    // Ocultando o footer
    footer.classList.add("hidden")
  }
})