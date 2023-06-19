const itemsObject = [
    {
        itemPic: "berry.png",
        itemName: "Berry & Bright",
        itemTags: ["Juice, Vegan, Organic, Gluten-free"],
        itemDescription: ["Delicious berries and wholesome ingredients such as carrots and bilberries to brighten up your day: Tart cherry, Carrot, Blackberry, Pomegranate, Bilberry, Cranberry, Acai"], 
        itemPrice: ["Add for 5€"],
    },

    {
        itemPic: "green.png",
        itemName: "Clean & Green",
        itemTags: ["Juice, Vegan, Organic, Gluten-free"],
        itemDescription: ["A refreshing boost in a bottle with those daily vitamins and minerals you need for a great day : Kale, Cucumber, Apple, Spinach, Mint, Celery, Lime, Parsleyn"], 
        itemPrice: ["Add for 5€"],
    },

    {
        itemPic: "red.png",
        itemName: "Restoration Red",
        itemTags: ["Juice, Vegan, Organic, Gluten-free"],
        itemDescription: ["A combination of red fruits to bring you flavor and sustenance : Tomato, Tart cherry, Beet, Strawberry, Apple, Lime"], 
        itemPrice: ["Add for 5€"],
    },

    {
        itemPic: "tropical.png",
        itemName: "Tropical Glow",
        itemTags: ["Juice, Vegan, Organic, Gluten-free"],
        itemDescription: ["A blend of tropical fruit with revitalizing coconut water : Pineapple, Orange, Banana, Apple Mango, Passionfruit, Coconut water"], 
        itemPrice: ["Add for 5€"],
    },

    {
        itemPic: "marble.png",
        itemName: "Moist Marble Cake",
        itemTags: ["Dessert, Vegetarian"],
        itemDescription: ["Fall for our super marble cake: Flour, Milk, Butter, Eggs, Sugar, and Chocolate"], 
        itemPrice: ["Add for 4€"],
    },

    {
        itemPic: "fruits.png",
        itemName: "Fuit Ninja",
        itemTags: ["Dessert", "Vegan"],
        itemDescription: ["Our exotic fruit salad brings a touch of freshness with its chunks of fresh mango, pomegranate and pineapple"], 
        itemPrice: ["Add for 5€"],
    },

    {
      itemPic: "mushroom.png",
      itemName: "Shimeji and Shitake",
      itemTags: ["starter","vegan", "vegetarian", "dairyfree", "gluten-free"],
      itemDescription: ["Stir-fry mushrooms in olive oil with saké and soy sauce."],
      itemPrice: ["Add for €6"]
    },
    {
      itemPic: "sunomono.png",
      itemName: "Sunomono",
      itemTags: ["starter", "vegan", "vegetarian", "dairyfree", "gluten-free"],
      itemDescription: ["Cumcuber salad marinated in rice vinegar."],
      itemPrice: ["Add for €4"]
    },
    {
      itemPic: "sweetpotato.png",
      itemName: "Sweet potato chips",
      itemTags: ["starter","vegan", "vegetarian", "dairyfree", "gluten-free"],
      itemDescription: ["Baked sweet potato chips."],
      itemPrice: ["Add for €4"]
    },
    {
      itemPic: "shrimp.png",
      itemName: "Honey Garlic and Pineapple Shrimp Skewers",
      itemTags: ["starter","dairyfree", "gluten-free"],
      itemDescription: ["Succulent shrimp and juicy pineapple chunks grilled, coated in a sweet and savory honey garlic glaze"],
      itemPrice: ["Add for €8"]
    },

    {
        itemPic: "musubi.png",
        itemName: "Spam Musubi with Egg",
        itemTags: ["side dish","dairyfree", "gluten-free"],
        itemDescription: ["Spam Musubi with Egg is a delicious Hawaiian dish consisting of grilled Spam, a slice of omelette, and sticky rice, wrapped in a sheet of nori seaweed."],
        itemPrice: ["Add for €4"]
      },
   {
    itemPic: "salmonpoke.png",
    itemName: "Salmon Poke ",
    itemTags: ["main course", "fish"],
    itemDescription: ["Choice of base, fresh salmon, mango or pineapple, radish, cucumber, red cabbage, avocado, edamame, sesame seeds.Served with the sauce of your choice."],
    itemPrice: ["Add for €13"],
  },

  {
    itemPic: "tunapoke.png",
    itemName: "Tuna Poke",
    itemTags: ["main course", "fish"],
    itemDescription: ["Choice of marinated tuna, mango or pineapple, radish, cucumber, red cabbage, avocado, edamame, sesame seeds.Served with the sauce of your choice."],
    itemPrice: ["Add for €13"],
  },

  {
    itemPic: "falafelpoke.png",
    itemName: "Falafel Poke ",
    itemTags: ["main course", "vegetarian", "gluten-free"],
    itemDescription: ["Choice of base, falafels depending , grenade , radish, carrot, avocado, edamame, cucumber, red cabbage, sesame seeds and raspberry.Served with the sauce of your choice"],
    itemPrice: ["Add for €11"],
  },

  {
    itemPic: "veggiechicken.png",
    itemName: "Veggie Chicken Poke ",
    itemTags: ["main course", "vegan", "vegetarian", "gluten-free"],
    itemDescription: ["Vinegared rice base, veggie chicken, avocado, mango, edamame, cucumber, cashew nuts, thai cebette and sesame."],
    itemPrice: ["Add for €12"],
  },
  ];
  
  const dishesContainer = document.querySelector(".cardCollection");
  
  const displayCollection = (
    itemPic,
    itemName,
    itemTags,
    itemDescription,
    itemPrice
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
  
    const price = document.createElement("button");
    price.textContent = itemPrice;
    card.appendChild(price);
  
    dishesContainer.appendChild(card);
  };
  
  const generateItemsObject = () => {
    itemsObject.forEach((dishes) => {
      displayCollection(
        dishes.itemPic,
        dishes.itemName,
        dishes.itemTags,
        dishes.itemDescription,
        dishes.itemPrice
      );
    });
  };
  
  generateItemsObject();
  
