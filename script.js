
// Obtendo os elementos do formulario.
const checkList = document.getElementById("check-lists")
const form = document.querySelector("form")

// Captando o evento de submit do formulario.
form.onsubmit = (e) =>{
  e.preventDefault()

  //Mostrar a lista
  checkList.classList.add("show-list")
}

// Funsao para identificar o botao delete
document.addEventListener("click", (e) => {

  // Verifica se foi clikado o batao delete
  if(e.target.closest(".delete-item")){
    const list = e.target.closest(".list")

    // Remove a list especifica
    if (list) list.remove()
  }
})