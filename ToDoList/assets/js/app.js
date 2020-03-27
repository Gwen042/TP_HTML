document.getElementById('imgDate').src = "./assets/image/date/image" + Math.floor(Math.random() * 10) + ".jpg";

/*const clear = document.querySelector(".clear")

clear.addEventListener("click", function(){
    localStorage.clear()
    localStorage.reload()
} )*/

// Date:

dateNow = new Date()

const options = { weekday: 'long',  month: 'long', day: 'numeric' };

document.getElementById("date").innerHTML= dateNow.toLocaleDateString("fr", options)


// liste todo

let todoItems = []

// fonction pour ajouter des items

function addTodo(texte) {
  const todo = {
    texte,
    id: Date.now(),
  }

  todoItems.push(todo)

  const liste = document.querySelector("ul")
  liste.insertAdjacentHTML("beforeend",
    `
    <li>
      <input type="checkbox" id="${todo.id}" class="checkbox" />
      <label for="checkbox" id="${todo.id}"> ${todo.texte}</label>
      <img src="./assets/image/poubelle.png" class="bin" />
    </li>
    `
  )

}

// fonctionnalité du bouton d'ajout d'item

const ajout = document.getElementById("btn")
ajout.addEventListener('click', event => {
  let input = document.getElementById("input")

  const todo = input.value.trim();
  if (todo !== '') {
    addTodo(todo)
  }
})

// Supprimer un item

const bin = document.querySelector('.liste');
bin.addEventListener('click', event => {
  if(event.target.classList.contains('bin')){
    d = event.target.parentNode
    d.remove()
  }
})