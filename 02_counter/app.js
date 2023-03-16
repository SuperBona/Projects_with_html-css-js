// inizio dal valore 0
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//console.log(btns);

//accedo a ogni item nella callback function usando parametri
btns.forEach(function (btn) {
  //console.log(btn); //in console ora avrei su righe separate la voce html per ciascun btn
  btn.addEventListener("click", function (e) {
    //voglio controllare quale bottone sto cliccando, perchè ora ho una lista (seleziono la funzione che mi interessa 'e', .currentTarget e poi voglio avere indietro anche la classe)
    const styles = e.currentTarget.classList;
    //adesso, invece di console.log() -> cambio in const styles = ---, così ogni volta che clicco su un btn verrà salvato nella variabile, che sono le classi che questo elemento ha
    if (styles.contains("decrease")) {
      //se il btn contiene la classe 'decrease', allora voglio che il count vada giù di uno a ogni clic; quindi da 0 si scende.
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      //per resettare
      count = 0;
    }
    //voglio cambiare i colori
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      //attenzione a ===
      value.style.color = "#222";
    }
    //value era l'id del numero 0 grosso sulla pagina, scritto in uno span -> gli assegno la costante let count, che è = 0. così il numero in pagina diventa dinamico al click
    value.textContent = count;
    // in console per i btn ora non vedo più niente
  });
});
