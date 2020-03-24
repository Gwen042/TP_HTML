const clear = document.querySelector(".clear");

clear.addEventListener("click", function(){
    localStorage.clear();
    localStorage.reload();
} )

dateNow = new Date()

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

document.getElementById("date").innerHTML= dateNow.toLocaleDateString("fr", options)

//document.getElementById("date").innerHTML= dateNow.getDate()+"/"+(dateNow.getMonth()+1)+"/"+dateNow.getFullYear()

const liste = document.getElementById("liste");

const input = document.getElementById("input");

//document.write(dateNow.getDate()+"/"+(dateNow.getMonth()+1)+"/"+dateNow.getFullYear())

//stocker un item
localStorage.setItem("nomValeur", "truc à stocker")
//récupérer un item
localStorage.getItem("nomValeur")
//vider le stockage
localStorage.clear()


//var ladate=new Date()
//document.write("Nous sommes le : ");
//document.write(ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear())