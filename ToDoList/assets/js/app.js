document.getElementById('imgDate').src = "./assets/image/date/image" + Math.floor(Math.random() * 10) + ".jpg";

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
      <img src="./assets/image/poubelle.png" class="bin" />
    </li>
    `
     )

})

//supprimer

let bin = document.getElementsByClassName("bin")

//binRemove = () =>{
for(var i = 0; i < bin.length; i++) {
    (function(){
        let d = bin[i].parentNode
        bin[i].addEventListener('click', function(){
        d.remove()})
        //console.log(d)
    }());
};
//}


//binRemove()

/*
//stocker un item
localStorage.setItem("nomValeur", "truc à stocker")
//récupérer un item
localStorage.getItem("nomValeur")
//vider le stockage
localStorage.clear()
*/