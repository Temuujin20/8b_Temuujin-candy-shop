const products = [
    {
      name: "twix",
      price: 1500,
      description: "Candy",
      type: "chocolate",
      image:
        "https://m.media-amazon.com/images/I/61fmv+Y0ElL.jpg",
    },
    {
      name: "snickers",
      price: 2500,
      description: "Candy",
      type: "gummy",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "kit kat",
      price: 2000,
      description: "Candy",
      type: "chocolate",
      image:
        "https://assets.bonappetit.com/photos/5908b834e0c1030c2f288251/16:9/w_2992,h_1683,c_limit/strawberry-kit-kat-lede.jpg",
    },
    {
      name: "m&m",
      price: 2450,
      description: "Candy",
      type: "gummy",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e5/Plain-M%26Ms-Pile.jpg",
    },
    {
      name: "chupa chups",
      price: 1000,
      description: "Candy",
      type: "chocolate",
      image:
        "https://res.cloudinary.com/dm8ly2rci/image/upload/v1629189475/site5/2021-08/Tokyo%20Assortment.png",
    },
  ];
  
  function PrintProducts() {
    const productsContainer = document.getElementById("products");
    let newDiv = "";
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];

  
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <img class='productImage' src="${product.image}"
        <h3 class="title">${product.name}</h3>
        <p>${product.description}</p>
        <p id="price">${product.price}</p>
        <button onclick="AddItem('${product.name}')">add</button>
        <button onclick="MinusItem('${product.name}')">minus</button>
      `;
  
      newDiv += div.outerHTML;
    }
  
    productsContainer.innerHTML = newDiv;
  }
  
  window.onload = PrintProducts;
  
  const userbasket = [];
  
  function AddItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity += 1;
    } else {
      userbasket.push({ name: itemName, quantity: 1 });
    }
  
    Basket();
  }
  
  function MinusItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity -= 1;
  
      if (userbasket[itemIndex].quantity === 0) {
        userbasket.splice(itemIndex, 1);
      }
    }
  
    Basket();
  }
  
  function Purchase() {
    let total = 0;
    for (let i = 0; i < userbasket.length; i++) {
      const { name, quantity } = userbasket[i];
      const product = products.find((p) => p.name === name);
      if (product) {
        total += product.price * quantity;
      }
    }
  
    document.getElementById("total").innerHTML = total;
    Clear();
  }
  
  function Clear() {
    userbasket = [];
  }
  
  function Basket() {
    const basketDiv = document.getElementById("basket");
    const basketHtml = userbasket
      .map(
        ({ name, quantity }) => `
      <h1>${name} - ${quantity}</h1>
    `
      )
      .join("");
    basketDiv.innerHTML = basketHtml;
  }
  
  thumbs.dreamstime.com