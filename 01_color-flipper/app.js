//da index si lavora su colori predefiniti impostati
//su Hex verranno generati colori random con hex code
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// PASSAGGI NUMERATI

btn.addEventListener("click", function () {
  //1: clicco su btn, ecco cosa succede ->
  //2: il body deve cambiare colore quando clicco su btn, colore a caso
  //3: console.log(document.body);
  //4: get random number between 0 - 3 colors[0/1/2/3] -> ho 4 elementi nell'array colors, negli array si parte a contare da 0
  const randomNumber = getRandomNumber(); //5:, 11:
  console.log(randomNumber); //12: per controllare cosa ho in console -> valori random da 0 a 1 che non corrispondono all'array -> moltiplico il rndmNumber per length dell'array
  document.body.style.backgroundColor = colors[randomNumber]; //6: seleziono il body e il suo stile-bckColor -> ciò che devo cambiare
  color.textContent = colors[randomNumber]; //7: devo selezionare anche il colore perchè è ciò che andrò a modificare
  //8: SE const randomNumber = 2; -> accedo al terzo elemento nell'array perchè ho impostato la variabile = 2 -> mi prende il terzo elemento
});

//9: ma il mio obiettivo è generare un numero random tra 0 e 3 -> callback function
function getRandomNumber() {
  //14: arrotondo il valore risultato aggiungendo floor.(Math...)
  return Math.floor(Math.random() * colors.length); //13: ho moltiplicato il rndmNumber (valore da 0 a 1) per la length dell'array (4 oggetti), ma ancora non basta
}
//10: ora modifico sopra: const randomNumber, tolgo il valore due e applico quello nuovo
//in console posso vedere che valori sono usciti
