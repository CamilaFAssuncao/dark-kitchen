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
    itemPrice: "4,6",
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

const displayCollection = (item) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = item.itemPic;
  card.appendChild(image);

  const name = document.createElement("h2");
  name.textContent = item.itemName;
  card.appendChild(name);

  const tags = document.createElement("p");
  tags.textContent = item.itemTags;
  card.appendChild(tags);

  const description = document.createElement("p");
  description.textContent = item.itemDescription[0];
  card.appendChild(description);

  const price = document.createElement("div");
  price.textContent = item.itemPrice;
  price.classList.add("priceValue");
  card.appendChild(price);

  const addButton = document.createElement("button");
  addButton.textContent = item.addToCart;
  addButton.classList.add("addToCart");
  card.appendChild(addButton);

  dishesContainer.appendChild(card);
};

const generateItemsObject = () => {
  itemsObject.forEach((item) => {
    displayCollection(item);
  });
};

generateItemsObject();

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

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("light");
});
//The checkbox.addEventListener("change", () => { ... }); line adds an event listener to the checkbox element. It listens for the "change" event, which occurs when the checkbox is checked or unchecked. When the event is triggered, the provided callback function is executed.

//The arrow function () => { ... } is the callback function that runs when the checkbox's "change" event occurs.

//Inside the callback function, document.body.classList.toggle("light") toggles the "light" class on the body element. The classList property provides access to the class attributes of an element. The toggle() method adds the "light" class to the body element if it is not present, and removes it if it is already present. This way, each time the checkbox is checked or unchecked, the "light" class is added or removed from the body element, effectively toggling the light mode.



//open shopping cart popup - start

document.addEventListener("DOMContentLoaded", ()=> {
    const shoppingCartIcon = document.getElementById("cartIcon");
    const shoppingCartPopup = document.getElementById("cartPopUp");
  
    shoppingCartIcon.addEventListener("click", ()=> {
      if (shoppingCartPopup) {
        if (shoppingCartPopup.style.display === "none") {
          shoppingCartPopup.style.display = "block";
        } else {
          shoppingCartPopup.style.display = "none";
        }
      }
    });
  });
  
//open shopping cart popup - end  

// const addToCart = card.querySelector(".addToCart");
// const priceButton = card.querySelector(".priceValue");

// addToCart.addEventListener("click", () => addToCart(dishes));

// return card;

