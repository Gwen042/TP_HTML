let myHeaders = new Headers();

let fetchOptions = {        // méthode utilisée par la requête
    method: `GET`,
    headers : myHeaders,
    mode: `cors`,
    cache: `default`
};

// fonction qui va chercher un chat sur thecatapi.com
const fetchCat = () =>{
    // fetch : fonction native de l'api web js du navigateur
    fetch("https://api.thecatapi.com/v1/images/search", fetchOptions) // je demande à fetch d'aller chercher une photo
    .then(resp => resp.text())                          // QUAND il retourne une réponse je convertit mon objet réponse en texte
    .then(body=>{                                       // QUAND il a fini de préparer le texte
        //console.log(JSON.parse(body));                   // je log le résultat
        body = JSON.parse(body);
        document.getElementById("cat").style.backgroundImage = `url(${body[0].url})`
    })
    .catch(erreur=>{
        document.getElementById("error").innerHTML = erreur
        console.log(erreur)
    });
};

document.addEventListener("mousemove", ()=>{
    document.querySelector("div#cat").style.top = window.event.clientY+"px";
    document.querySelector("div#cat").style.left = window.event.clientX+"px";
    //fetchCat()
})

document.addEventListener("click", fetchCat);