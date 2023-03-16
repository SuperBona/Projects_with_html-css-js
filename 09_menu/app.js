// display items when page load
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 5,
    img: `https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam qui ipsum amet nisi id eum aut odio corrupti sit magni.`,
  },
  {
    id: 2,
    title: "milkshake",
    category: "shakes",
    price: 5,
    img: `https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam qui ipsum amet nisi id eum aut odio corrupti sit magni.`,
  },
  {
    id: 3,
    title: "diner double",
    category: "lunch",
    price: 15,
    img: `https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam qui ipsum amet nisi id eum aut odio corrupti sit magni.`,
  },
  {
    id: 4,
    title: "the toast",
    category: "breakfast",
    price: 7,
    img: `https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam qui ipsum amet nisi id eum aut odio corrupti sit magni.`,
  },
  {
    id: 5,
    title: "egg hamburger",
    category: "lunch",
    price: 10,
    img: `https://images.pexels.com/photos/6529815/pexels-photo-6529815.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam qui ipsum amet nisi id eum aut odio corrupti sit magni.`,
  },
  {
    id: 6,
    title: "oreo milkshake",
    category: "shakes",
    price: 5,
    img: `https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam qui ipsum amet nisi id eum aut odio corrupti sit magni.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "lunch",
    price: 12,
    img: `https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam qui ipsum amet nisi id eum aut odio corrupti sit magni.`,
  },
  {
    id: 8,
    title: "classic burger",
    category: "lunch",
    price: 9,
    img: `https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam qui ipsum amet nisi id eum aut odio corrupti sit magni.`,
  },
  {
    id: 9,
    title: "chocolate delice",
    category: "breakfast",
    price: 8,
    img: `https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam qui ipsum amet nisi id eum aut odio corrupti sit magni.`,
  },
  {
    id: 10,
    title: "steak diner",
    category: "lunch",
    price: 15,
    img: `https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam qui ipsum amet nisi id eum aut odio corrupti sit magni.`,
  },
];
/* piazzerò questi data in html */

/* uso dom content, quindi devo selezionare section-center -> quando la pagina ha caricato voglio che succeda qualcosa */
const sectionCenter = document.querySelector(".section-center");

//load item
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

/* window.addEventListener("DOMContentLoaded", function () {
  //console.log("shake and bake"); //appena la pagina carica, ho questo in console
  //map -> funziona come un filtro, possiamo accedere a ogni item di un certo parametro
  let displayMenu = menu.map(function (item) {
    //qui il parametro è (item)
    //console.log(item); // nella console ho tutti gli items del const menu
    //return item;
    //return `<h1>hello world</h1>`; //vengono creati items con dentro questo
    //return `<h1>${item.title}</h1>`; //ora in console vedo tutti i titoli degli item nel menu
    // POSSO FARE QUESTO e renderlo dinamico
    return `<article class="menu-item">
          <img
            src=${item.img}
            class="img photo"
            alt=${item.title}
          />
          <div class="item-info">
            <header>
              <h5>${item.title}</h5>
              <span class="price">$${item.price}</span>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
    // voglio che questi elementi in console rientrino in una sola string perchè voglio metterli nella section-center, devo usare join method 
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
  //così return un nuovo setup (è uguale a come prima, non ho messo modifiche).
  //posso avere anche solo un elemento in html, lo collego qui così, creo un numero di item che voglio e li rimpiazzo così. ora cancello tutto in html e lascio solo un article, il primo
  //console.log(displayMenu); //ho l'array in console
}); */

//se voglio usare i filtri lunch, breakfast ecc... devo refractioning il codice, inserire la funzionalità in una function
//prendo tutto ciò che ho scritto sopra nel body della funzione e lo reinserisco qui sotto
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
          <img
            src=${item.img}
            class="img photo"
            alt=${item.title}
          />
          <div class="item-info">
            <header>
              <h5>${item.title}</h5>
              <span class="price">$${item.price}</span>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

// COME FAR FUNZIONARE I FILTRI ORA
//seleziono i filter btns
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget.dataset.id); //dataset: nell'elemento a cui possiamo aggiungere attributo con un data prefix
    //vado ad aggiungere in html ai btn data- =-> in console se clicco quel btn vedo -id= nome inserito
    //ora che ho messo anche .id, vedo in console solo il valore del data-id
    const category = e.currentTarget.dataset.id;
    //ora devo filtrare l'array
    const menuCategory = menu.filter(function (menuItem) {
      //console.log(menuItem.category); // ora in console vedo lista array e i filtri
      if (menuItem.category === category) {
        return menuItem;
        //ora in console se clicco un btn vedo quali oggetti dell'array hanno la categoria del btn cliccato
      }
      //return menuItem;
    });
    //console.log(menuCategory); //ora nella console, quando clicco un btn vedo l'array con i suoi item, ancora non filtrati
    //voglio return di specifiche categorie se il menu item ha quella categoria, scrivo log sopra return
    if (category === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});

//questo metodo però rende difficile tutto se qualcosa cambia o si aggiorna, dovrei modificare manualmente tutto da 0. vado su un nuovo file js
