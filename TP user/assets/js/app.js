let myHeaders = new Headers();

let fetchOptions = {
    method: `GET`,
    headers : myHeaders,
    mode: `cors`,
    cache: `default`
};

const fetchUser = () =>{
    fetch("https://jsonplaceholder.typicode.com/users", fetchOptions) 
    .then(resp => resp.text())                         
    .then(user =>{                                                     
        console.log(JSON.parse(user));
        user = JSON.parse(user);
        
        user.forEach(user => {
            document.getElementById("user").insertAdjacentHTML('beforeend', 
            `<div class="card"><h1>${user.name}</h1>
            <p><span class="bold">Id:</span> ${user.id}</p>
            <p><span class="bold">Username:</span> ${user.username}</p>
            <p><span class="bold">Email:</span> ${user.email}</p>
            <p><span class="bold">Adresse:</span> ${user.adresse}</p>
            <p><span class="bold">N° de téléphone:</span> ${user.phone}</p>
            <p><span class="bold">Website:</span> <a href="${user.website}">${user.website}</a></p>
            <p><span class="bold">Entreprise:</span> ${user.company.name}</p>
            <p><span class="bold">Slogan:</span> ${user.company.catchPhrase}</p>
            <p><span class="bold">Domaine:</span> ${user.company.bs}</p></div>`)
        })
    })
};

fetchUser();