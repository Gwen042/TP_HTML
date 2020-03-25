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
    .then(cat =>{                                       // QUAND il a fini de préparer le texte
        //console.log(JSON.parse(body));                   // je log le résultat
        cat = JSON.parse(cat);

        document.getElementById("error").innerHTML = "";
        document.getElementById("breed").innerHTML = "";

        document.getElementById("cat").style.backgroundImage = `url(${cat[0].url})`;
        // ajout de la race du chat si elle est présente dans le json
        document.getElementById("breed").innerHTML = cat[0].breeds[0].length ? cat[0].breeds[0].name : "";
        /*
        fonctionnement du ternaire
        condition à tester ? valeur si vraire: valeur si faux
        revient à faire:
        if(condition à tester){
            return valeur si vrai
        } else{
            return valeur si faux
        }
        */
    })
    .catch(erreur=>{
        document.getElementById("error").innerHTML = erreur
        console.error(erreur);
    });
};

document.addEventListener("mousemove", ()=>{
    document.querySelector("div#cat").style.top = window.event.clientY+"px";
    document.querySelector("div#cat").style.left = window.event.clientX+"px";
})

document.addEventListener("click", fetchCat);