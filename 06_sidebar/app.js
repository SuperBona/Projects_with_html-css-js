// PRIMO METODO LUNGO
/* inizio prendendo gli elementi che mi servono */
const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

//aggiungo l'evento per il toggle-btn
toggleBtn.addEventListener("click", function () {
  //controllo la classe del sidebar, se l'ha va rimossa, viceversa. sappiamo che come classe ha sidebar
  /*  console.log(sidebar.classList);
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  } else {
    sidebar.classList.add("show-sidebar");
  } */
  //ora il toggle btn apre e chiude la sidebar e il close-btn non funziona più
  //METODO PIù VELOCE
  sidebar.classList.toggle("show-sidebar");
});

//faccio funzionare il close-btn
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

/* ALTRO MODO PER SCRIVERE IL CODICE */
/* const getElement = (selector) => {
  const el = document.querySelector(selector);
  if (el) return el;
  throw new Error(`Please check your classes : ${selector} does not exist`);
};

const sidebarToggle = getElement(".sidebar-toggle");
const sidebar = getElement(".sidebar");
const closeBtn = getElement(".close-btn");

sidebarToggle.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
 */
