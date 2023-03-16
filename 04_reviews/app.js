// default resource dal progetto
// di solito questi dati si ottengono da 'ajax requests' o da altre parti, ma ora impostiamo i dati localmente
//qua sotto ho un array che contiene i dati di quelle che dovrebbero essere singole persone (l'oggetto dell'array), per un totale di 4 oggetti
//export default reviews non funziona

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
//export default reviews; non funziona meglio che non lo metto

//progetto inizio:
//1: ottengo tutti gli items da html che mi sevono -> accedere all'img, autore, job info, che sono valori che cambieranno dinamicamente
//devo prendere anche i btn
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//ricordo che per gli array il primo oggetto ha valore 0
let currentItem = 0;
//voglio che quando la pagina carica, ad andare a schermo sia il primo oggetto, che ha valore 0 e che con le frecce questi valori vengano sostituiti dagli altri oggetti

//2: DOMContentLoaded -> load initial item
window.addEventListener("DOMContentLoaded", function () {
  //console.log("shake and bake"); //appena la pagina si carica, in console ho questo valore
  //ricordo che DOMCL -> fires an event when the document has been completely loaded and passed
  //2: voglio accedere al primo item
  /* const item = reviews[currentItem]; //in questo caso i valori devono andare da 0 a 3 per coprire il numero di oggetti nell'array, che sono 4
  img.src = item.image; */
  //potevo anche fare così-> = reviews[currentItem].img
  //ora ho questa immagine quando la pagina è carica. procedo con gli altri
  /* author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text; */
  // 4: inserisco la funzione riutilizzabile showPerson. currentItem crea il passaggio da ciò che c'è scritto ai nuovi valori
  showPerson(currentItem);
});
//se ora io cambiassi sopra let currentItem = altro valore -> l'immagine che si carica è diversa, quella che il valore indica nell'array
//se metto un valore al di fuori dell'array, ho in console "undefined"

//3: devo cambiare gli altri associando ai btn. imposto una funzione che possa essere riutilizzata
//show person based on item -> prendo gli elementi che stanno in DOMContentLoaded e li sposto qui

//8: rimuovo (person) e modifico reviews[] in reviews[currentItem]
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.image;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//5: show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    //se l'elemento è > 4 (-1) perchè si tratta di array
    currentItem = 0; // si riparte da 0
  }
  //9: elimino currentItem dopo i cambiamenti al passaggio 8
  showPerson();
});

//6: show prev. person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1; //e questo è per far ripartire dall'ultimo elemento dell'array quando vado indietro, se vado oltre l'elemento 0
  }
  showPerson(); //9
});

//7: random number per cambiare a random l'oggetto
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson();
});
