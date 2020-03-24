let input_name = document.getElementById("name")
let name

document.addEventListener("change", ()=>{
    name = input_name.value
    console.log(name)
})

//fonction bidon qui affiche l'objet event

const fct = () => {
    console.log(window.event)
}

//const fct = () => {
//    let event = window.event
//
//    console.log(event.clientX, event.clientY)
//}

() => {
    alert("On utilise")
}

// fonction nommée
const fct = (isParam) => {
    if(isParam){
        console.warn("Louis est-tu là?")
    }
    console.log(window.event)
}

// fonction anonyme

() => {

}

//

document.addEventListener("click", function () {
    //on peut récupérer un événement avec window.event
    console.log(window.event)
})

let arr= [8,5,3,6,1,2,8,12]

//ajout d'un écouteur d'événement, le premier param est l'event à écouter, le second est l'action à executer

window.addEventListener("focus", ()=>{
    document.querySelector("form>input#name").insertAdjacentHTML("beforeend",
    `
    <div class="row">
        <label for="age"></label>
        <input type="number" required></input>
    </div>
    `
     )
    
})

//

//stocker un item
localStorage.setItem("nomValeur", "truc à stocker")
//récupérer un item
localStorage.getItem("nomValeur")
//vider le stockage
localStorage.clear()

for (let index = 0; index < Array.length; index++) {
    const element = array[index];
}

//les magics quotes

const logTruc = (nom) => {
    console.log(`Bonjour ${nom} !`)
}