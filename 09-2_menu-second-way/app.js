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

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  //reduce method for iterating over menu
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        //! = not
        values.push(item.category);
      }
      return values; //return serve sempre quando si fanno iterations
    },
    ["all"]
    //console.log(categories); //in console vedo i miei 10 items
    //ora vedo in console i 5 cateogry
    //se l'item è già nell'array allora return l'array e keep on moving if it's not an array
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  //console.log(categoryBtns); //li vedo in console, i btn
  //la nodelist però è vuota quindi non potendo accedervi non posso usare i filtri
  //devo aggiungreli al dom

  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  console.log(filterBtns);

  //filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
