const section2 = document.querySelector(".section_2");
const section3 = document.querySelector(".section_3");
const CardsParent = document.querySelector(".Cards_Parent");
const ReklamParent = document.querySelector(".reklam_parent");
const PopularItems = document.querySelector(".popular_items");
const restourant = document.querySelector(".restourant");
const section_4 = document.querySelector(".section_4");
const fass_food = document.querySelector(".fass_food");
const chegirmalar = document.querySelector(".chegirmalar");
const canel = document.querySelector(".canel");
const owner_in = document.querySelector("#owner_input");
const Qidiring = document.querySelectorAll("#Qidiring");

//  search function

const search = () =>
  Qidiring.forEach(
    (e) =>
      (e.style.display =
        e.innerHTML
          .toLocaleUpperCase()
          .indexOf(owner_in.value. toLocaleUpperCase()) > -1
          ? ""
          : "none")
  );
  search();

// section 1#

let data = [
  {
    id: 0,
    img: "./img/rasmlar/salat1.png",
    name: "Gresy Vage",
    kun: "6 Days Remaining",
  },
  {
    id: 1,
    img: "./img/rasmlar/hamir2.png",
    name: "Gresy Vage",
    kun: "6 Days Remaining",
  },
  {
    id: 2,
    img: "./img/rasmlar/parhezSalat3.png",
    name: "Gresy Vage",
    kun: "7 Days Remaining",
  },
  {
    id: 3,
    img: "./img/rasmlar/AchchiqQalampir4.png",
    name: "Gresy Vage",
    kun: "7 Days Remaining",
  },
];

data.forEach((item) => {
  CardsParent.innerHTML += `
  <div class="card">
   <img src="${item.img}" alt="rasm">
   <h4>${item.name}</h4>
   <b>${item.kun}</b>
  </div>
`;
search();
});

// section 2# reklama

let reklam = [
  {
    id: 0,
    rasm: "./img/icons/joylashuv.png",
    nomi: "Select location",
    kichik: "Choose the location where your food will be delivered.",
  },
  {
    id: 1,
    rasm: "./img/icons/qongiroq.png",
    nomi: "Choose order",
    kichik: "Check over hundreds of menus to pick your favorite food",
  },
  {
    id: 2,
    rasm: "./img/icons/hat3.png",
    nomi: "Pay advanced",
    kichik: "It's quick, safe, and simple. Select several methods of payment",
  },
  {
    id: 3,
    rasm: "./img/icons/donats 4.png",
    nomi: "Enjoy meals",
    kichik: "Food is made and delivered directly to your home.",
  },
];

reklam.map((param) => {
  ReklamParent.innerHTML += `
    <div class="reklam">
     <img src="${param.rasm}" alt="rasm">
     <h2>${param.nomi}</h2>
     <p>${param.kichik}<br></p>
    </div>
    `;
});

// section 3# #popularProducts

let mashxurTavar = [
  {
    id: 0,
    foto: "./img/icons/hamburger 1.png",
    ism: "Cheese Burger",
    joylashuv: "Burger Arena",
    narxi: "$3.88",
  },
  {
    id: 1,
    foto: "./img/icons/quymoq.png",
    ism: "Toffe’s Cake",
    joylashuv: "Top Sticks",
    narxi: "$4.00",
  },
  {
    id: 2,
    foto: "./img/icons/pecheniya.png",
    ism: "Dancake",
    joylashuv: "Cake World",
    narxi: "$1.99",
  },
  {
    id: 3,
    foto: "./img/icons/tort.png",
    ism: "Crispy Sandwitch",
    joylashuv: "Fastfood Dine",
    narxi: "$3.00",
  },
  {
    id: 4,
    foto: "./img/icons/shorva.png",
    ism: "Thai  Soup",
    joylashuv: "Foody man",
    narxi: "$2.79",
  },
];

mashxurTavar.map((param) => {
  PopularItems.innerHTML += `
    <div class="popular">
     <img src="${param.foto}" alt="rasm">
     <h2>${param.ism}</h2>
     <p><i class="fa-solid fa-location-dot"></i> ${param.joylashuv}</p>
     <h3>${param.narxi}</h3>
     <button>Order Now</button>
    </div>
    `;
});

//  4# section

let menyu = [
  {
    id: 0,
    foto: "./img/rasmlar/tuxumBarak.png",
    logotip: "./img/rasmlar/tuxumbarakLOgo.png",
    joylashuv: "Foodworld",
    ball: "46",
    button: "Opens tomorrow",
  },
  {
    id: 1,
    foto: "./img/rasmlar/kokteyl.png",
    logotip: "./img/rasmlar/KokteyLogo.png",
    joylashuv: "Pizzahub",
    ball: "40",
    button: "Opens tomorrow",
  },
  {
    id: 2,
    foto: "./img/rasmlar/Quymoq2.png",
    logotip: "./img/rasmlar/Quymoq2 Logo.png",
    joylashuv: "Donuts hut",
    ball: "20",
    button: "Open now",
  },
  {
    id: 3,
    foto: "./img/rasmlar/muzqaymoq.png",
    logotip: "./img/rasmlar/Muzqaymoq Logo.png",
    joylashuv: "Donuts hut",
    ball: "50",
    button: "Open now",
  },
  {
    id: 4,
    foto: "./img/rasmlar/gosht.png",
    logotip: "./img/rasmlar/gosht Logo.png",
    joylashuv: "Ruby Tuesday",
    ball: "26",
    button: "Open now",
  },
  {
    id: 5,
    foto: "./img/rasmlar/tovuqGoshti.png",
    logotip: "./img/rasmlar/tovuqGoshtiLogo.png",
    joylashuv: "Kuakata Fried Chicken",
    ball: "53",
    button: "Open now",
  },
  {
    id: 6,
    foto: "./img/rasmlar/mastava.png",
    logotip: "./img/rasmlar/mastavaLOgo.png",
    joylashuv: "Red Square",
    ball: "45",
    button: "Open now",
  },
  {
    id: 7,
    foto: "./img/rasmlar/kalbasaTuxum.png",
    logotip: "./img/rasmlar/kalbasaTuxumLogo.png",
    joylashuv: "Taco Bell",
    ball: "35",
    button: "Open now",
  },
];
menyu.map((param) => {
  restourant.innerHTML += `
    <div class="taomlar">
     <img src="${param.foto}" alt="rasm" class="rasmlar">
     <div class="markaz">
        <div class="logotip">
          <img src="${param.logotip}">
          <div class="sentr">
            <b>${param.joylashuv}</b>
            <i class="fa-solid fa-star"> ${param.ball}</i>
          </div>
       </div>
       <button class="gb_btn" >${param.button}</button>
     </div>    
    </div>
    `;
});

// #section 5

let qidirmoq = [
  {
    id: 0,
    foto: "./img/rasmlar/pitsa.png",
    nomi: "Pizza",
  },
  {
    id: 1,
    foto: "./img/rasmlar/burger'.png",
    nomi: "Burger",
  },
  {
    id: 2,
    foto: "./img/rasmlar/lagman'.png",
    nomi: "Noodles",
  },
  {
    id: 3,
    foto: "./img/rasmlar/hotdog.png",
    nomi: "Sub-sandiwch",
  },
  {
    id: 4,
    foto: "./img/rasmlar/norn.png",
    nomi: "Chowmein",
  },
  {
    id: 5,
    foto: "./img/rasmlar/grill.png",
    nomi: "Steak",
  },
];
qidirmoq.map((param) => {
  fass_food.innerHTML += `
  <div class="search_ovqat">
   <img src="${param.foto}">
   <p>${param.nomi}</p>
  </div>
    `;
});

let yetkaziberish = [
  {
    id: 0,
    foto: "./img/rasmlar/chegirma.png",
    nomi: "Daily Discounts",
  },
  {
    id: 1,
    foto: "./img/rasmlar/joylashgan.png",
    nomi: "Live Tracing",
  },
  {
    id: 2,
    foto: "./img/rasmlar/texlik.png",
    nomi: "Quick Delivery",
  },
];
yetkaziberish.map((param) => {
  chegirmalar.innerHTML += `
  <div class="jonatma">
    <img src="${param.foto}">
    <h1>${param.nomi}</h1>
  </div>
    `;
});

//  ohirgi section

let abouts = [
  {
    id: 0,
    foto: "",
    haqida: " Best deals Crispy Sandwiches",
    ish: "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.",
    btn: "Proceed to order",
  },
  {
    id: 1,
    haqida: "Celebrate  partieswith Fried Chicken",
    ish: "Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.",
    foto: "",
    btn: "Proceed to order",
  },
  {
    id: 2,
    foto: "",
    haqida: "Wanna eat hot & spicy Pizza?",
    ish: "Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.",
    btn: "Proceed to order",
  },
];
