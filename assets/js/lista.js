// 1. Lista Cognomi
var surnameList = [
  "Bianchi",
  "Rossi",
  "Abate",
  "Cargnelutti",
  "Marzona",
  "Iob",
  "Duzioni",
  "Balsano",
  "Verdi",
];
// console.log(surnameList);

// 2. Chiedere all’utente il cognome
var userSurname = prompt("what's your last name?");
var newSurname = userSurname.charAt(0).toUpperCase() + userSurname.slice(1);
// console.log(userSurname, newSurname);

// 3. inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
surnameList.push(newSurname);
console.log(surnameList);

// serviva a me per capire il funzionamento di .indexOf() e che parte da 0 a contare
// var position = surnameList.indexOf(newSurname);
// console.log("posizione iniziale all'interno della lista " + position);

// 4. stampa la lista ordinata alfabeticamente

for(var i = 0; i < surnameList.length; i++){
  surnameList.sort();
  var items = surnameList[i];
  var list = document.getElementById('surname_list').innerHTML;
  document.getElementById('surname_list').innerHTML = list + "<li>" + items + "</li>";
}

// 5. scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// funzionamento di .indexOf()+1 , parte da 1 a contare
var newPosition = surnameList.indexOf(newSurname) + 1;
console.log("posizione alfabetica all'interno della lista è: " + newPosition);
