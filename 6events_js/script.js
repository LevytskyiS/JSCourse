const cars = [
  {
    id: 1,
    brand: "Ford",
    model: "Fiesta",
    price: 20000,
    year: 2015,
  },
  {
    id: 2,
    brand: "BMW",
    model: "M3",
    price: 12000,
    year: 2012,
  },
  {
    id: 3,
    brand: "Audi",
    model: "A3",
    price: 14000,
    year: 2018,
  },
  {
    id: 4,
    brand: "KIA",
    model: "Sorento",
    price: 10000,
    year: 2010,
  },
  {
    id: 5,
    brand: "Ford",
    model: "Mustang",
    price: 10000,
    year: 2010,
  },
];
const list = document.querySelector(".js-list");
const form = document.querySelector(".js-search-form");
const button = document.querySelector(".js-click-default");
const favouriteList = document.querySelector(".js-favourite-list");

form.addEventListener("submit", onSearch);
button.addEventListener("click", onClickDefaultCars);

list.insertAdjacentHTML("beforeend", createMarkup(cars));
list.addEventListener("click", onClickFavouriteCars);

function onClickFavouriteCars(evt) {
  if (evt.target.classList.contains("js-favourite")) {
    evt.target.style.color = "gold";
    const { id } = evt.target.closest("li").dataset;
    const currentCar = cars.find(({ id: carId }) => {
      return carId === Number(id);
    });
    addFavouriteCar(currentCar);
  }
}

function addFavouriteCar(currentCar) {
  favouriteList.insertAdjacentHTML(
    "beforeend",
    `<li>${currentCar.brand} ${currentCar.model}</li>`
  );
  // на бэке надо сохранить, что у пользователя это теперь избранное авто
}

function onClickDefaultCars() {
  list.innerHTML = createMarkup(searCars);
  form.reset();
}

function createMarkup(arr) {
  return arr
    .map(({ id, brand, model, price, year }) => {
      return `<li data-id="${id}">
                <div class="js-favourite">&#9734;</div>
                <h2>${brand}</h2>
                <h4>${model}</h4>
                <p>${price}</p>
                <p>${year}</p>
                </li>`;
    })
    .join("");
}

function onSearch(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const { query, select } = form.elements;
  const searCars = cars.filter((item) => {
    if (item[select.value].toLowerCase() === query.value.trim().toLowerCase()) {
      return item;
    }
  });
  list.innerHTML = createMarkup(searCars);
}
