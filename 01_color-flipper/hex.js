//ecco come funziona per hex -> valori hex random con corrispettivo colore

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //per generare un colore random - gli hex funzionano con # e combo di lettere e numeri
  //ricordo che nella scala di questi valori, le lettere rappresentano il 10, 11, 12, 13, 14, 15
  //questo è un hex color -> #f15025 -> f = 15 -> quindi è come avere 1515025
  //1: creo un hex value -> deve necessariamente avere #
  let hexColor = "#"; //è una costante variabile, quindi uso let
  //all'# devo aggiungere una combo random dei valori nell'array che creeranno il valore hex. i valori nell'array sono in tot 16, il primo vale sempre 0
  //2: imposto un loop -> inizio con valore = 0 e voglio arrivare a 6 (escluso) come limite per farlo fermare. ogni volta che va in run, incremento di 1
  for (let i = 0; i < 6; i++) {
    //questo mi da i 6 valori random dopo # per creare il valore hex
    hexColor += hex[getRandomNumber()]; //3: per ogni iterazione voglio aggiungere un valore; 8: lo modifico per avere un valore hex random dopo aver creato la funzione con return sotto
    //se impostassi hex[11] mi prenderebbe il 12esimo elemento nell'array, che è a -> avrei #AAAAAA
    //serve avere il += qui
  }
  color.textContent = hexColor; //4:
  document.body.style.backgroundColor = hexColor; //5:
  //se ora clicco ottengo un valore di sei cifre composte da 0 con un # davanti -> #000000 -> colore nero
});

//6: per impostare numeri random all'hex -> faccio come ho fatto nel file app.js
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
//7: devo accedere al numero random ora, toro a hexColor += hex[0]
