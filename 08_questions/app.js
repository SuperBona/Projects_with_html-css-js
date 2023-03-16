//using selectors inside the element
//TRAVERSING THE DOM

/* 
//seleziono tutti i btn delle questions con un solo comando
const btns = document.querySelectorAll(".question-btn");

//assegno la funzione e l'evento ad ogni btn
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //console.log(e.currentTarget); //quando clicco sui btn vedo in console come sono stati scritti in html, singolarmente
    //devo rendere visibile il btn minus e il testo
    //console.log(e.currentTarget.parentElement); //vedo quale è l'elemento genitore del btn = question-title
    //voglio l'elemento genitore dell'elem genitore del btn
    //console.log(e.currentTarget.parentElement.parentElement); //risultato = question, la casella con dentro le domande
    //devo attivare la funzione toggle dei btn per mostrare il text e il minus-btn
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
}); 
*/

//USING SELECTORS INSIDE THE ELEMENT
const questions = document.querySelectorAll(".question");

/* creo un loop su di questi */
questions.forEach(function (question) {
  //console.log(question);
  /* looping over le question, devo selezionare i btn */
  const btn = question.querySelector(".question-btn");
  //console.log(btn); //in console ora posso vedere una lista dei btn all'interno di ogni singola question
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      //console.log(item);
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

/* così quando apro un nuovo btn, se un'altro era già aperto quest'ultimo si chiude in automatico */
