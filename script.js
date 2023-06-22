const itemsObject = [
  {
    itemPic: "berry.png",
    itemName: "Berry & Bright",
    itemTags: "Juice",
    itemDescription: [
      "Delicious berries and wholesome ingredients such as carrots and blueberries to brighten up your day: Tart cherry, Carrot, Blackberry, Pomegranate, Blueberry, Cranberry, Açaí",
    ],
    itemPrice: ["5€"],
    addToCart: ["Add to cart"],
  },

  {
    itemPic: "green.png",
    itemName: "Clean & Green",
    itemTags: "Juice",
    itemDescription: [
      "A refreshing boost in a bottle with those daily vitamins and minerals you need for a great day : Kale, Cucumber, Apple, Spinach, Mint, Celery, Lime, Parsley",
    ],
    itemPrice: ["5€"],
    addToCart: ["Add to cart"],
  },

  {
    itemPic: "red.png",
    itemName: "Restoration Red",
    itemTags: "Juice",
    itemDescription: [
      "A combination of red fruits to bring you flavor and sustenance : Tomato, Tart cherry, Beet, Strawberry, Apple, Lime",
    ],
    itemPrice: ["5€"],
    addToCart: ["Add to cart"],
  },

  {
    itemPic: "tropical.png",
    itemName: "Tropical Glow",
    itemTags: "Juice",
    itemDescription: [
      "A blend of tropical fruit with revitalizing coconut water : Pineapple, Orange, Banana, Apple, Mango, Passionfruit, Coconut water",
    ],
    itemPrice: ["5€"],
    addToCart: ["Add to cart"],
  },

  {
    itemPic: "mushroom.png",
    itemName: "Shimeji and Shitake",
    itemTags: "Starter",
    itemDescription: [
      "Stir-fry mushrooms in olive oil with saké and soy sauce.",
    ],
    itemPrice: ["€6"],
    addToCart: ["Add to cart"],
  },
  {
    itemPic: "sunomono.png",
    itemName: "Sunomono",
    itemTags: "Starter",
    itemDescription: ["Cumcuber salad marinated in rice vinegar."],
    itemPrice: ["€4"],
    addToCart: ["Add to cart"],
  },
  {
    itemPic: "sweetpotato.png",
    itemName: "Sweet potato chips",
    itemTags: "Starter",
    itemDescription: ["Baked sweet potato chips."],
    itemPrice: ["€4"],
    addToCart: ["Add to cart"],
  },
  {
    itemPic: "shrimp.png",
    itemName: "Honey Garlic and Pineapple Shrimp Skewers",
    itemTags: "Starter",
    itemDescription: [
      "Succulent shrimp and juicy pineapple chunks grilled, coated in a sweet and savory honey garlic glaze",
    ],
    itemPrice: ["€8"],
    addToCart: ["Add to cart"],
  },

  {
    itemPic: "edamame.jpg",
    itemName: "Edamame",
    itemTags: "Side",
    itemDescription: ["Nutritious and flavorful young soybean pods, lightly seasoned with salt, perfect as an appetizer or snack."],
    itemPrice: ["€4"],
    addToCart: ["Add to cart"]
  },
  {
    itemPic: "musubi.png",
    itemName: "Spam Musubi with Egg",
    itemTags: "Side",
    itemDescription: [
      "Spam Musubi with Egg is a delicious Hawaiian dish consisting of grilled Spam, a slice of omelette, and sticky rice, wrapped in a sheet of nori seaweed.",
    ],
    itemPrice: ["€4"],
    addToCart: ["Add to cart"],
  },
  {
    itemPic: "salmonpoke.png",
    itemName: "Salmon Poke",
    itemTags: "Main course",
    itemDescription: [
      "Vinegared rice base, fresh salmon, mango or pineapple, radish, cucumber, red cabbage, avocado, edamame, sesame seeds. Served with Teriyaki sauce",
    ],
    itemPrice: ["€13"],
    addToCart: ["Add to cart"],
  },
  {
    itemPic: "tunapoke.png",
    itemName: "Tuna Poke",

    itemTags: "Main course",
    itemDescription: [
      "Vinegared rice base, marinated tuna, mango or pineapple, radish, cucumber, red cabbage, avocado, edamame, sesame seeds. Served with Ponzu dressing.",
    ],
    itemPrice: ["€13"],
    addToCart: ["Add to cart"],
  },
  {
    itemPic: "falafelpoke.png",
    itemName: "Falafel Poke",
    itemTags: "Main course",
    itemDescription: [
      "Vinegared rice base, falafels, grenade , radish, carrot, avocado, edamame, cucumber, red cabbage, sesame seeds and raspberry. Served with Wasabi mayo.",
    ],
    itemPrice: ["€11"],
    addToCart: ["Add to cart"],
  },
  {
    itemPic: "veggiechickenpoke.png",
    itemName: "Veggie Chicken Poke",
    itemTags: "Main course",
    itemDescription: [
      "Vinegared rice base, veggie chicken, avocado, mango, edamame, cucumber, cashew nuts, thai cebette and sesame.",
    ],
    itemPrice: ["€12"],
    addToCart: ["Add to cart"],
  },
  {
    itemPic: "marble.png",
    itemName: "Moist Marble Cake",
    itemTags: "Dessert",
    itemDescription: [
      "Fall for our super marble cake: Flour, Milk, Butter, Eggs, Sugar, and Chocolate",
    ],
    itemPrice: ["4€"],
    addToCart: ["Add to cart"],
  },
  {
    itemPic: "fruits.png",
    itemName: "Fruit Ninja",
    itemTags: "Dessert, Vegan",
    itemDescription: [
      "Our exotic fruit salad brings a touch of freshness with its chunks of fresh mango, pomegranate and pineapple",
    ],
    itemPrice: ["5€"],
    addToCart: ["Add to cart"],
  },
];

const dishesContainer = document.querySelector(".cardCollection");
const shoppingCart = document.getElementById("cartPopUp")

const displayCollection = (
  itemPic,
  itemName,
  itemTags,
  itemDescription,
  itemPrice,
  addToCart
) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = itemPic;
  image.classList.add("productImg")
  card.appendChild(image);

  const name = document.createElement("h2");
  name.textContent = itemName;
  card.appendChild(name);

  const tags = document.createElement("p");
  tags.textContent = itemTags;
  card.appendChild(tags);

  const description = document.createElement("p");
  description.textContent = itemDescription;
  card.appendChild(description);

  const price = document.createElement("div");
  price.textContent = itemPrice;
  price.classList.add("priceValue");
  card.appendChild(price);

  const addButton = document.createElement("button");
  addButton.textContent = addToCart;
  addButton.classList.add("addToCart");
  card.appendChild(addButton);

  dishesContainer.appendChild(card);
};

const generateItemsObject = (items) => {
  dishesContainer.innerHTML = ''; // Clear the existing items

  items.forEach((dishes) => {
    displayCollection(
      dishes.itemPic,
      dishes.itemName,
      dishes.itemTags,
      dishes.itemDescription,
      dishes.itemPrice,
      dishes.addToCart
    );
  });
};

//filtering itens

const displayFilteredItems = (items) => {
  generateItemsObject(items);
};

generateItemsObject(itemsObject);

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredItems = itemsObject.filter((item) =>
    item.itemName.toLowerCase().includes(searchTerm)
  );

  displayFilteredItems(filteredItems);
});

////////// Darkmodeswitch //////////////

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("light")
});

//displaying shopping cart 

document.addEventListener("DOMContentLoaded", function() {
    const shoppingCartIcon = document.getElementById("cartIcon");
    const shoppingCartPopup = document.getElementById("cartPopUp");
  
    shoppingCartIcon.addEventListener("click", function() {
      if (shoppingCartPopup) {
        if (shoppingCartPopup.style.display === "none") {
          shoppingCartPopup.style.display = "block";
        } else {
          shoppingCartPopup.style.display = "none";
        }
      }
    });
  });
  
// //filtering buttons

function filterObjects(category) {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const tags = card.querySelector("p").textContent.split(",");
    const cardCategories = tags.map((tag) => tag.trim().toLowerCase());

    if (
      category.toLowerCase() === "all" ||
      cardCategories.includes(category.toLowerCase())
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function addClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const tags = card.querySelector("p").textContent.split(",");
  tags.forEach((tag) => card.classList.add(tag.trim().toLowerCase()));
});

