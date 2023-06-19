// const itemsObject = [
//     {
//         itemPic: "mushroom.png",
//         itemName: "Shimeji and Shitake",
//         itemTags: ["starter","vegan", "vegetarian", "dairyfree", "gluten-free"],
//         itemDescription: ["Stir-fry mushrooms in olive oil with saké and soy sauce."],
//         itemPrice: "6e"},

//     {
//             itemPic: "sunomono.png",
//             itemName: "Sunomono",
//             itemTags: ["starter", "vegan", "vegetarian", "dairyfree", "gluten-free"],
//             itemDescription: ["Cumcuber salad marinated in rice vinegar."],
//             itemPrice: "4e"},

//     {
//                 itemPic: "sweetpotato.png",
//                 itemName: ["Sweet potato chips"],
//                 itemTags: ["starter","vegan", "vegetarian", "dairyfree", "gluten-free"],
//                 itemDescription: ["Baked sweet potato chips."],
//                 itemPrice: "4e"},

//     {
//                     itemPic: "shrimp.png",
//                     itemName: ["Honey Garlic and Pineapple Shrimp Skewers"],
//                     itemTags: ["starter","dairyfree", "gluten-free"],
//                     itemDescription: ["Succulent shrimp and juicy pineapple chunks grilled, coated in a sweet and savory honey garlic glaze"],
//                     itemPrice: "8e"}
            

// ];

// const dishesContainer = document.querySelector(".cardCollection");

// const displayCollection = (
//     itemPic, 
//     itemName, 
//     itemTags, 
//     itemDescription, 
//     itemPrice
//     ) => {

//     }


// const generateItemsObject = () => {
//     itemsObject.forEach((dishes) => {
//             displayCollection(
//                 dishes.itemPic,
//                 dishes.itemName,
//                 dishes.itemTags,
//                 dishes.itemDescription,
//                 dishes.itemPrice
//             );
//         });
// };

// generateItemsObject();

const itemsObject = [
    {
      itemPic: "mushroom.png",
      itemName: "Shimeji and Shitake",
      itemTags: ["starter","vegan", "vegetarian", "dairyfree", "gluten-free"],
      itemDescription: ["Stir-fry mushrooms in olive oil with saké and soy sauce."],
      itemPrice: "€6"
    },
    {
      itemPic: "sunomono.png",
      itemName: "Sunomono",
      itemTags: ["starter", "vegan", "vegetarian", "dairyfree", "gluten-free"],
      itemDescription: ["Cumcuber salad marinated in rice vinegar."],
      itemPrice: "€4"
    },
    {
      itemPic: "sweetpotato.png",
      itemName: "Sweet potato chips",
      itemTags: ["starter","vegan", "vegetarian", "dairyfree", "gluten-free"],
      itemDescription: ["Baked sweet potato chips."],
      itemPrice: "€4"
    },
    {
      itemPic: "shrimp.png",
      itemName: "Honey Garlic and Pineapple Shrimp Skewers",
      itemTags: ["starter","dairyfree", "gluten-free"],
      itemDescription: ["Succulent shrimp and juicy pineapple chunks grilled, coated in a sweet and savory honey garlic glaze"],
      itemPrice: "€8"
    },

    {
        itemPic: "musubi.png",
        itemName: "Spam Musubi with Egg",
        itemTags: ["side dish","dairyfree", "gluten-free"],
        itemDescription: ["Spam Musubi with Egg is a delicious Hawaiian dish consisting of grilled Spam, a slice of omelette, and sticky rice, wrapped in a sheet of nori seaweed."],
        itemPrice: "€4"
      }
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
    tags.textContent = itemTags.join(", ");
    card.appendChild(tags);
  
    const description = document.createElement("p");
    description.textContent = itemDescription.join(", ");
    card.appendChild(description);
  
    const price = document.createElement("p");
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
  