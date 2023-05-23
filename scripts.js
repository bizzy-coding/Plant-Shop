let plants = [
    {
      name: "Outdoor Palm",
      description:
        "Add a tropical touch to your home with this artificial palm plant. With its lush green leaves and realistic texture, it's the perfect way to bring the outdoors inside.",
      price: 29.99,
      imageURL:
        "https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-in-outdoor-palm__0902075_pe689305_s5.jpg?f=xxxs",
      inStock: false
    },
    {
      name: "Epipremnum Golden Pothos",
      description:
        "Brighten up your space with this stunning golden pothos plant. Its cascading leaves will add a pop of green to any room, and its low maintenance nature makes it the perfect choice for busy households.",
      price: 14.99,
      imageURL:
        "https://www.ikea.com/gb/en/images/products/epipremnum-potted-plant-golden-pothos__0900460_pe668029_s5.jpg?f=xxxs",
      inStock: true
    },
    {
      name: "String of Beads",
      description:
        "Get the look of real hanging plants without the hassle with this artificial string of beads plant. With its delicate beads cascading down, it's sure to add a touch of charm to any room.",
      price: 21.99,
      imageURL:
        "https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-in-outdoor-string-of-beads__0901067_pe687832_s5.jpg?f=xxxs",
      inStock: true
    },
    {
      name: "Hanging String of Hearts",
      description:
        "Bring the romance of the outdoors inside with this artificial string of hearts plant. Its delicate heart-shaped leaves are sure to add a touch of charm to any space.",
      price: 19.99,
      imageURL:
        "https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-in-outdoor-hanging-string-of-hearts__0817873_pe774217_s5.jpg?f=xxxs",
      inStock: true
    },
    {
      name: "Ivy Potted Plant",
      description:
        "Add a touch of greenery to your home without the maintenance with this artificial ivy plant. With its realistic texture and lush green leaves, it's the perfect way to bring the outdoors inside.",
      price: 12.99,
      imageURL:
        "https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-ivy__0901324_pe668406_s5.jpg?f=xxxs",
      inStock: true
    },
    {
      name: "Island Date Palm",
      description:
        "Bring a touch of the exotic to your home with this stunning Canary Island date palm. With its dramatic fronds and impressive height, it's sure to make a statement in any room.",
      price: 35.0,
      imageURL:
        "https://www.ikea.com/gb/en/images/products/phoenix-canariensis-potted-plant-canary-island-date-palm__0958848_pe805499_s5.jpg?f=xxxs",
      inStock: true
    },
    
    {
    name: "Epipremnum Potted Plant",
    description: "This versatile houseplant is perfect for beginners and adds a pop of green to any room. With its trailing vines and heart-shaped leaves, it's easy to care for and thrives in a variety of lighting conditions.",
    price: 19.99,
    imageURL: "https://www.ikea.com/gb/en/images/products/epipremnum-potted-plant-golden-pothos__0900460_pe668029_s5.jpg?f=xxxs",
    inStock: true
  },
  {
    name: "Phoenix Canariensis",
    description: "Bring a tropical touch to your space with this striking Canary Island Date Palm. Its large, feathery fronds make it a statement piece in any room or outdoor area. Best of all, it requires little maintenance!",
    price: 29.99,
    imageURL: "https://www.ikea.com/gb/en/images/products/phoenix-canariensis-potted-plant-canary-island-date-palm__0958848_pe805499_s5.jpg?f=xxxs",
    inStock: true
  },
  {
    name: "Dracaena Marginata Plant",
    description: "With its tall, slender stems and spiky leaves, the Dragon Tree adds a touch of drama to any space. It's a slow grower, so it's perfect for those who prefer low-maintenance plants.",
    price: 24.99,
    imageURL: "https://www.ikea.com/gb/en/images/products/dracaena-marginata-potted-plant-dragon-tree-2-stem__0902168_pe654240_s5.jpg?f=xxxs",
    inStock: true
  },
  {
    name: "Whitley Giant Potted Plant",
    description: "Make a statement with this bold and beautiful Whitley Giant. With its large, glossy leaves and vibrant green color, it's sure to be a conversation starter. Best of all, it's easy to care for!",
    price: 34.99,
    imageURL: "https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-in-outdoor-whitley-giant__0959239_pe809450_s5.jpg?f=xxxs",
    inStock: true
  }
  
  ];

  const prodCont = document.querySelector('.product--container');

  //what am I trying to acheive here?

  //loop through the object and create a new products
  //each product should be a product card within the prod container 

  plants.forEach((plant) => {
    console.log(plant.price)
//now you can access each plant and each of it's properties
    var prodCard = document.createElement('div');
    prodCard.classList.add('product--card');
    prodCont.appendChild(prodCard);
//for each of the products, a card has been created, but this is just empty until you fill it
    prodCard.innerHTML = `
    <h3>${plant.name}</h3>
    <div class="product--image">
    <img src=${plant.imageURL} />
    <div class="product--stock">${plant.inStock ? "FREE <br>DELIVERY" : "SOLD OUT"}
    </div>
    <p>${plant.description}</p>
    <p>${plant.price}</p>
    `

  });