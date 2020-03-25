const clear = document.querySelector(".clear")

clear.addEventListener("click", function(){
    localStorage.clear()
    localStorage.reload()
} )

// Date:

dateNow = new Date()

const options = { weekday: 'long',  month: 'long', day: 'numeric' };

document.getElementById("date").innerHTML= dateNow.toLocaleDateString("fr", options)


//const liste = document.getElementById("liste");

let input = document.getElementById("input")

/*
let liste = document.querySelector("ul")

const ajoutListe = (input) => {
        ligne = document.createElement("li")
        liste.appendChild(ligne)
        ligne.innerHTML= input
}*/

document.getElementById("btn").addEventListener("click", function () {

    const toDo = input.value
    //ajoutListe(toDo)

    document.querySelector("ul").insertAdjacentHTML("beforeend",
    `
    <li>
      <input type="checkbox" id="checkbox" class="checkbox" />
      <label for="checkbox"> ${toDo}</label>
      <img src="./assets/image/poubelle.png" id="bin" class="bin" />
    </li>
    `
     )

})

//stocker un item
localStorage.setItem("nomValeur", "truc à stocker")
//récupérer un item
localStorage.getItem("nomValeur")
//vider le stockage
localStorage.clear()
