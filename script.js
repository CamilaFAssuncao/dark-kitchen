const itemsObject = [
    {
        itemPic: "berry.png",
        itemName: "Berry & Bright",
        itemTags: ["Juice, Vegan, Organic, Gluten-free"],
        itemDescription: ["Delicious berries and wholesome ingredients such as carrots and blueberries to brighten up your day: Tart cherry, Carrot, Blackberry, Pomegranate, Blueberry, Cranberry, Açaí"], 
        itemPrice: ["5€"],
        addToCart : ["Add to cart"]
    },

    {
        itemPic: "green.png",
        itemName: "Clean & Green",
        itemTags: ["Juice, Vegan, Organic, Gluten-free"],
        itemDescription: ["A refreshing boost in a bottle with those daily vitamins and minerals you need for a great day : Kale, Cucumber, Apple, Spinach, Mint, Celery, Lime, Parsley"], 
        itemPrice: ["5€"],
        addToCart : ["Add to cart"]
    },

    {
        itemPic: "red.png",
        itemName: "Restoration Red",
        itemTags: ["Juice, Vegan, Organic, Gluten-free"],
        itemDescription: ["A combination of red fruits to bring you flavor and sustenance : Tomato, Tart cherry, Beet, Strawberry, Apple, Lime"], 
        itemPrice: ["5€"],
        addToCart : ["Add to cart"]
    },

    {
        itemPic: "tropical.png",
        itemName: "Tropical Glow",
        itemTags: ["Juice, Vegan, Organic, Gluten-free"],
        itemDescription: ["A blend of tropical fruit with revitalizing coconut water : Pineapple, Orange, Banana, Apple, Mango, Passionfruit, Coconut water"], 
        itemPrice: ["5€"],
        addToCart : ["Add to cart"]
    },

    {
      itemPic: "mushroom.png",
      itemName: "Shimeji and Shitake",
      itemTags: ["starter","vegan", "vegetarian", "dairyfree", "gluten-free"],
      itemDescription: ["Stir-fry mushrooms in olive oil with saké and soy sauce."],
      itemPrice: ["€6"],
      addToCart : ["Add to cart"]
    },
    {
      itemPic: "sunomono.png",
      itemName: "Sunomono",
      itemTags: ["starter", "vegan", "vegetarian", "dairyfree", "gluten-free"],
      itemDescription: ["Cumcuber salad marinated in rice vinegar."],
      itemPrice: ["€4"],
      addToCart : ["Add to cart"]
    },
    {
      itemPic: "sweetpotato.png",
      itemName: "Sweet potato chips",
      itemTags: ["starter","vegan", "vegetarian", "dairyfree", "gluten-free"],
      itemDescription: ["Baked sweet potato chips."],
      itemPrice: ["Add for €4"],
      addToCart : ["Add to cart"]
    },
    {
      itemPic: "shrimp.png",
      itemName: "Honey Garlic and Pineapple Shrimp Skewers",
      itemTags: ["starter","dairyfree", "gluten-free"],
      itemDescription: ["Succulent shrimp and juicy pineapple chunks grilled, coated in a sweet and savory honey garlic glaze"],
      itemPrice: ["€8"],
      addToCart : ["Add to cart"]
    },

   {
    itemPic: "salmonpoke.png",
    itemName: "Salmon Poke ",
    itemTags: ["main course", "fish"],
    itemDescription: ["Choice of base, fresh salmon, mango or pineapple, radish, cucumber, red cabbage, avocado, edamame, sesame seeds.Served with the sauce of your choice."],
    itemPrice: ["€13"],
    addToCart : ["Add to cart"]
  },

  {
    itemPic: "tunapoke.png",
    itemName: "Tuna Poke",
    itemTags: ["main course", "fish"],
    itemDescription: ["Choice of marinated tuna, mango or pineapple, radish, cucumber, red cabbage, avocado, edamame, sesame seeds.Served with the sauce of your choice."],
    itemPrice: ["€13"],
    addToCart : ["Add to cart"]
  },

  {
    itemPic: "falafelpoke.png",
    itemName: "Falafel Poke ",
    itemTags: ["main course", "vegetarian", "gluten-free"],
    itemDescription: ["Choice of base, falafels depending , grenade , radish, carrot, avocado, edamame, cucumber, red cabbage, sesame seeds and raspberry.Served with the sauce of your choice"],
    itemPrice: ["€11"],
    addToCart : ["Add to cart"]
  },

  {
    itemPic: "veggiechickenpoke.png",
    itemName: "Veggie Chicken Poke ",
    itemTags: ["main course", "vegan", "vegetarian", "gluten-free"],
    itemDescription: ["Vinegared rice base, veggie chicken, avocado, mango, edamame, cucumber, cashew nuts, thai cebette and sesame."],
    itemPrice: ["€12"],
    addToCart : ["Add to cart"]
  },

  {
    itemPic: "musubi.png",
    itemName: "Spam Musubi with Egg",
    itemTags: ["side dish","dairyfree", "gluten-free"],
    itemDescription: ["Spam Musubi with Egg is a delicious Hawaiian dish consisting of grilled Spam, a slice of omelette, and sticky rice, wrapped in a sheet of nori seaweed."],
    itemPrice: ["€4"],
    addToCart : ["Add to cart"]
  },

  {
    itemPic: "marble.png",
    itemName: "Moist Marble Cake",
    itemTags: ["Dessert, Vegetarian"],
    itemDescription: ["Fall for our super marble cake: Flour, Milk, Butter, Eggs, Sugar, and Chocolate"], 
    itemPrice: ["4€"],
    addToCart : ["Add to cart"]
},

{
    itemPic: "fruits.png",
    itemName: "Fruit Ninja",
    itemTags: ["Dessert", "Vegan"],
    itemDescription: ["Our exotic fruit salad brings a touch of freshness with its chunks of fresh mango, pomegranate and pineapple"], 
    itemPrice: ["5€"],
    addToCart : ["Add to cart"]
}
  ];
  
  const dishesContainer = document.querySelector(".cardCollection");
  
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
  
  const generateItemsObject = () => {
    itemsObject.forEach((dishes) => {
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
  
  generateItemsObject();
  
  document.addEventListener("DOMContentLoaded", function() {
    const shoppingCartIcon = document.getElementById("cartIcon");
    const shoppingCartPopup = document.getElementById("cartPopUp");
  
    shoppingCartIcon.addEventListener("click", function() {
      if (shoppingCartPopup) {
        shoppingCartPopup.style.display = "block";
      }
    });
  });

// const buttons = document.querySelectorAll(".priceButton");

// document.querySelectorAll(".priceButton").addEventListener("click")

//   priceButton.forEach(button => {
//     button.addEventListener('click', () => {}

// const priceButtons = document.querySelectorAll(".priceValue");

// priceButtons.forEach(function(button) {
//   button.addEventListener("click", myFunction);
// });

// function myFunction() {
//   alert("Hello World!");
// };


// // TEST FOLLOWING CODE LATER
// function ready() {
//   // Get the add, remove, and count elements
//   const addButton = document.querySelector('.addMore');
//   const removeButton = document.querySelector('.remove');
//   const countElement = document.querySelector('.count');

//   // Set the initial count value
//   let count = 1;
//   countElement.textContent = count;

//   // Increase count on add button click
//   addButton.addEventListener('click', function() {
//     count++;
//     countElement.textContent = count;
//   });

//   // Decrease count on remove button click
//   removeButton.addEventListener('click', function() {
//     if (count > 1) {
//       count--;
//       countElement.textContent = count;
//     }
//   });

//   // Get the product price element
//   const productPriceElement = document.querySelector('.productPrice');

//   // Set the initial product price
//   const initialProductPrice = 10.99;
//   productPriceElement.textContent = '$' + initialProductPrice.toFixed(2);

//   // Get the total price element
//   const totalPriceElement = document.querySelector('.totalPrice');

//   // Calculate and update the total price
//   function updateTotalPrice() {
//     const totalPrice = count * initialProductPrice;
//     totalPriceElement.textContent = '$' + totalPrice.toFixed(2);
//   }

//   // Update the total price when count changes
//   countElement.addEventListener('input', updateTotalPrice);

//   // Get the checkout button
//   const checkoutButton = document.querySelector('.checkoutButton');

//   // Handle checkout button click
//   checkoutButton.addEventListener('click', function() {
//     alert('Thank you for your purchase!');
//   });
// }


  
  