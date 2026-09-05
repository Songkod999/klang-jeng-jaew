<script src="script.js"></script>
const products = [

  {
    id: "ID001",
    game: "Free Fire",
    price: 350,
    status: "available",
    description: "LV.65 มีตัวละครและไอเทม",
    image: "images/id001.svg"
  },

  {
    id: "ID002",
    game: "ROV",
    price: 450,
    status: "available",
    description: "มีฮีโร่และสกินหลายรายการ",
    image: "images/id002.svg"
  },

  {
    id: "ID003",
    game: "PUBG Mobile",
    price: 550,
    status: "available",
    description: "มีสกินและไอเทม",
    image: "images/id003.svg"
  },

  {
    id: "ID004",
    game: "Genshin Impact",
    price: 600,
    status: "sold",
    description: "รายการนี้ขายแล้ว",
    image: "images/id004.svg"
  },

  {
    id: "ID005",
    game: "Valorant",
    price: 790,
    status: "available",
    description: "มีสกินอาวุธหลายรายการ",
    image: "images/id005.svg"
  },

  {
    id: "ID006",
    game: "เกมตัวอย่าง",
    price: 990,
    status: "sold",
    description: "รายการนี้ขายแล้ว",
    image: "images/id006.svg"
  }

];


const productsBox = document.getElementById("products");
const search = document.getElementById("search");
const filter = document.getElementById("filter");


function showProducts() {

  const keyword = search.value.toLowerCase();
  const status = filter.value;

  const result = products.filter(item => {

    const text =
      item.id + " " +
      item.game + " " +
      item.description;

    const searchOK =
      text.toLowerCase().includes(keyword);

    const statusOK =
      status === "all" ||
      item.status === status;

    return searchOK && statusOK;

  });


  productsBox.innerHTML = "";


  result.forEach(item => {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `

      <img src="${item.image}" alt="${item.game}">

      <div class="card-content">

        <small>${item.id}</small>

        <h3>${item.game}</h3>

        <p>${item.description}</p>

        <div class="price">
          ฿${item.price.toLocaleString()}
        </div>

        <span class="status ${item.status}">
          ${
            item.status === "available"
            ? "ว่าง"
            : "ขายแล้ว"
          }
        </span>

      </div>

    `;

    productsBox.appendChild(card);

  });

}


search.addEventListener("input", showProducts);

filter.addEventListener("change", showProducts);

showProducts();
