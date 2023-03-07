// Chiedi all'utente il suo nome  
const username = prompt("Come ti chiami?");
console.log(username);


// Chiedere il cognome dell'utente
const userSurname = prompt("Qual è il tuo cognome?");
console.log(userSurname);





// Chiedere il colore preferito dell'utente
const userFavoriteColor = prompt("Qual è il tuo colore preferito");
console.log(userFavoriteColor);

// Creazione Password

const password= `La tua password super sicura è:${username + userSurname + userFavoriteColor + 21}`
console.log(password)

// Infine scrivi sulla pagina nomecognomecoloreprerito21
document.getElementById('generate-password').innerHTML = password