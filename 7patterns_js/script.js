//  Пример по делегированию прослушивания событий:
//  вешаем прослушиватель на родительский класс, но обрабатываем действие,
//  если событие случится на детях
// const container = document.querySelector(".js-container");
// container.addEventListener("click", onClick);

// function onClick(evt) {
//   if (!evt.target.classList.contains("js-box")) {
//     return;
//   }
//   console.log(evt.target.dataset.color);
// }

// Крестики-нолики
// const wins = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];
// const container = document.querySelector(".js-content");
// const nameWinner = document.querySelector(".js-winner");

// let historyX = [];
// let historyY = [];
// let player = "X";

// container.addEventListener("click", onClick);

// function createMarkup() {
//   let markup = "";
//   for (let i = 1; i < 10; i += 1) {
//     markup += `<div class="item js-item" data-id="${i}"></div>`;
//   }
//   container.innerHTML = markup;
// }

// createMarkup();

// function onClick(evt) {
//   const { target } = evt;
//   if (!target.classList.contains("js-item") || target.textContent) {
//     return;
//   }

//   const id = Number(target.dataset.id);
//   let result = false;

//   if (player === "X") {
//     historyX.push(id);
//     // console.log(historyX);
//     result = isWinner(historyX);
//   } else {
//     historyY.push(id);
//     // console.log(historyY);
//     result = isWinner(historyY);
//   }

//   const isEndGame = historyX.length + historyY.length === 9;
//   target.textContent = player;

//   if (result) {
//     console.log(`Winner ${player}!`);
//     nameWinner.textContent = `Winner ${player}!`;
//     resetGame();
//     return;
//   } else if (isEndGame) {
//     console.log("Try again.");
//     resetGame();
//     return;
//   }

//   player = player === "X" ? "O" : "X";
// }

// function isWinner(arr) {
//   return wins.some((item) => item.every((id) => arr.includes(id)));
// }

// function resetGame() {
//   createMarkup();
//   historyX = [];
//   historyY = [];
//   player = "X";
// }

// Basiclightbox
// const cars = [
//   {
//     id: 1,
//     brand: "Ford",
//     model: "Fiesta",
//     price: 20000,
//     year: 2015,
//     img: "https://media.ed.edmunds-media.com/ford/fiesta/2014/oem/2014_ford_fiesta_4dr-hatchback_st_fq_oem_2_1280x855.jpg",
//   },
//   {
//     id: 2,
//     brand: "BMW",
//     model: "M3",
//     price: 12000,
//     year: 2012,
//     img: "https://tuzing.cz/wp-content/uploads/2011/06/2012-BMW-M3-CRT-Sedan.jpg",
//   },
//   {
//     id: 3,
//     brand: "Audi",
//     model: "A3",
//     price: 14000,
//     year: 2018,
//     img: "https://edgecast-img.yahoo.net/mysterio/api/02A6E63CC634CB02C1D5D48FECE9A6DD2E4A607F3618C793CF3C94C3D9F9A4AF/autoblog/resizefill_w1200_h675;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/os/ab/_cms/2021/10/18125324/4E9A6680.jpg",
//   },
//   {
//     id: 4,
//     brand: "KIA",
//     model: "Sorento",
//     price: 10000,
//     year: 2010,
//     img: "https://www.wintonsworld.com/wp-content/uploads/2010/03/Kia-Sorento_1.jpg",
//   },
//   {
//     id: 5,
//     brand: "Ford",
//     model: "Mustang",
//     price: 10000,
//     year: 2010,
//     img: "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/media/267933/2010-ford-mustang-gt-photo-267937-s-986x603.jpg?crop=0.879xw:0.864xh;0.121xw,0.136xh&resize=1200:*",
//   },
// ];

// const container = document.querySelector(".js-container");

// const markup = cars.map(({ id, brand, img }) => {
//   return `<li data-car-id="${id}" class="js-target js-card"><img class="js-target" src="${img}" alt="${brand}" width="200"><h2 class="js-target">${brand}</h2></li>`;
// });

// container.insertAdjacentHTML("beforeend", markup.join(""));
// container.addEventListener("click", omClick);

// function omClick(evt) {
//   const { target } = evt;
//   if (!target.classList.contains("js-target")) {
//     return;
//   }
//   const carId =
//     target.dataset.carId ?? target.closest(".js-card").dataset.carId;
//   const currentItem = cars.find(({ id }) => id === Number(carId));
//   console.log(currentItem)
//   const instance = basicLightbox.create(`
//     <div class="bg">
//         <img src="${currentItem.img}" alt="${currentItem.brand}" width="300">
//         <h2>${currentItem.brand}</h2>
//         <h3>${currentItem.model}</h3>
//         <p>${currentItem.price}</p>
//     </div>
//   `);
//   instance.show();
// }

// CDN
// throttle - контролирует промежуток времени между срабатываниями колбека
// debounce - вызов колбека после окончания действия
// В примере ниже колбек будет вызван через 600 мс, после того, как юзер перестанет вводить текст в поле
// При использовании throttle и debounce надо использовать target, а не currentTarget

// const input = document.querySelector(".js-input");
// // input.addEventListener("input", _.throttle(onSearch, 600));

// const PASSWORD_LENGTH = 7;

// input.addEventListener("input", _.debounce(onSearch, 800));

// function onSearch(evt) {
//   if (evt.target.value.length < 7) {
//     evt.target.classList.remove("valid");
//     evt.target.classList.add("invalid");
//   } else {
//     evt.target.classList.remove("invalid");
//     evt.target.classList.add("valid");
//   }
//   console.log(evt.target.value);
// }


// Cats
const cats = [
  "https://www.thesprucepets.com/thmb/APYdMl_MTqwODmH4dDqaY5q0UoE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg",
  "https://www.thesprucepets.com/thmb/03iDIGAag9taVH_qx32554bIjE0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1312010933-2bd8a91f82754273b41999d324f81cba.jpg",
  "https://www.thesprucepets.com/thmb/ORK2KgPR3wtcvHoicJ01feoJrc8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1300167045-9199f824c28b401da66835b8539f9424.jpg",
  "https://www.thesprucepets.com/thmb/OXAaWFdTA7kQ5BN2MZvvJz7ffd8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-816211496-92280a69f91c4787953029f736a91ae8.jpg",
  "https://www.thesprucepets.com/thmb/4pKqmmVih7XFX_JqQFRbl_x7ehU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1222236360-df36f38029694b6ab7b41d1cd7b392de.jpg"
]

const list = document.querySelector(".js-list");
const markup = cats.map(cat => `<li><img src="${cat}" alt="cat" width="250" loading="lazy"><p>Some description</p></li>`)

list.insertAdjacentHTML("beforeend", markup.join(""))
