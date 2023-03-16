//come prima cosa target il toggle-btn e i links, assegnando una variabile
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

//imposto un evento per quando clicco sul bottone
navToggle.addEventListener("click", function () {
  //voglio sapere che classe hanno i links
  //console.log(links.classList);
  //per far funzionare il btn voglio aggiungere e rimuovere una nuova classe. controllo la presenza della classe random nei links
  //console.log(links.classList.contains("random"));
  //come risposta ho false, perchè i links non hanno la classe random. voglio aggiungerla. conoscendo ciò (links hanno classe links e non random), creo uno statement
  //per attivare la funzione toglle voglio che se la classe di interesse è presente, venga cancellata al click, e se non presente venga creata al click
  if (links.classList.contains("show-links")) {
    //se la classe show-links è presente, la rimuovo al click
    links.classList.remove("show-links");
  }
  //se la classe non è presente, la aggiungo al click
  else {
    links.classList.add("show-links");
  }
  //c'è un ALTRO MODO per scrivere il codice in una sola riga
  // -> -> -> -> -> links.classList.toggle("show-links");
  // TOGGLE vale per quei due if
});

//ALTRO MODO per scrivere il codice
/* const getElement = (selector) => {
  const el = document.querySelector(selector);
  if (el) return el;
  throw new Error(`Please check your classes : ${selector} does not exist`);
};

const navToggle = getElement(".nav-toggle");
const links = getElement(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
}); */
