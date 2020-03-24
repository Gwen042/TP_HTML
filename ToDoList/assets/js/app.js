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
    <div class="container">
        <div class="round">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox"></label> ${toDo}
            <img src="./assets/image/poubelle.png" alt="Enregistrer" title="Enregistrer" class="bin" />
        </div>
      </div>
</li>
    `
     )

})

//document.getElementById("btn").addEventListener("click", function () {



//stocker un item
localStorage.setItem("nomValeur", "truc à stocker")
//récupérer un item
localStorage.getItem("nomValeur")
//vider le stockage
localStorage.clear()


