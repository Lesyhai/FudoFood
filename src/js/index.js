const ListProduct = [
  {
    id: 1,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    price: 30,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: "src/image/index/image 26.png",
    category: 1,
  },
  {
    id: 2,
    name: "Fresh Lime Roasted Salmon",
    price: 10,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: "src/image/index/image 27.png",
    category: 1,
  },
  {
    id: 3,
    name: "The Best Easy One Pot Chicken and Rice",
    price: 20,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: "src/image/index/image 28.png",
    category: 3,
  },
  {
    id: 4,
    name: "Fresh and Healthy Mixed Mayonnaise ",
    price: 50,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: "src/image/index/image 29.png",
    category: 4,
  },
  {
    id: 5,
    name: "The Creamiest Creamy Chicken",
    price: 60,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: "src/image/index/image 30.png",
    category: 5,
  },
  {
    id: 6,
    name: "Fruity Pancake with Orange & Blueberry",
    price: 15,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: "src/image/index/image 31.png",
    category: 6,
  },
];
const ListCategory = [
  {
    id: 1,
    name: "breakfast",
    image: "src/image/index/image 32.png",
  },
  {
    id: 2,
    name: "vegan",
    image: "src/image/index/image 33.png",
  },
  {
    id: 3,
    name: "meat",
    image: "src/image/index/image 34.png",
  },
  {
    id: 4,
    name: "dessert",
    image: "src/image/index/image 35.png",
  },
  {
    id: 5,
    name: "lunch",
    image: "src/image/index/image 36.png",
  },
  {
    id: 6,
    name: "chocolate",
    image: "src/image/index/image 37.png",
  },
];

const ListCart = [];

function ShowProduct(data) {
  const FoodC = document.querySelector(".food-c");
  if (FoodC) {
    FoodC.innerHTML = "";
    for (let item of data) {
      FoodC.innerHTML += `
            <div class="food-pt">
                <div class="img">
                <a href="./detail.html?id=${item.id}"> <img src="${item.image}" alt="" /></a>
                </div>
                <p class=" title"><a href="./detail.html?id=${item.id}">${item.name}</a></p>
                <div class="Other">
                  <div class="time">
                    <img src="src/image/index/time.png" alt="" />
                    <p>30 Minutes</p>
                  </div>
                  <div class="Option">
                    <img src="src/image/index/thia.png" alt="" />
                    <p>Snack</p>
                  </div>
                </div>
              </div>
            `;
    }
  }
}
ShowProduct(ListProduct);

const filterSelect = document.querySelector("#filter-select");
function filterProduct() {
  const under30 = ListProduct.filter(function (product) {
    return product.price <= 30;
  });
  const over30 = ListProduct.filter(function (product) {
    return product.price > 30;
  });
  if (filterSelect.value == "under30") {
    showProduct(under30);
  }
  if (filterSelect.value == "over30") {
    showProduct(over30);
  }
  if (filterSelect.value == "all") {
    showProduct(ListProduct);
  }
}
if (filterSelect) {
  filterSelect.addEventListener("change", filterProduct);
}

function ShowCategory(data) {
  const FoodCT = document.querySelector(".food-Category");
  if (FoodCT) {
    FoodCT.innerHTML = "";
    for (let item of data) {
      FoodCT.innerHTML += `
      <div class="food-ct">
      <img src="${item.image}" alt="" />
      <p>${item.name}</p>
    </div>
     `;
    }
  }
}
ShowCategory(ListCategory);

function DetailProduct() {
  const prdId = new URLSearchParams(window.location.search).get("id");
  if (prdId) {
    const product = ListProduct.find(function (item) {
      return item.id == prdId;
    });
    const DetailProductDiv = document.querySelector(".Big-and-Juicy");
    DetailProductDiv.innerHTML = `
      <div class="title-big">
      <h1>${product.name}</h1>
      <h2>$ ${product.price}</h2>
      <p>${product.desc}</p>
      <form >
      <input type="text" id="quantity" placeholder="Quantity" required>
      <button type="sub">Add To Cart</button>
    </form>
    </div>
    <div class="img-big">
      <img width="100%" src="${product.image}" alt="" />
    </div>
      `;
  }
}
DetailProduct();

function ListCategoryMenu() {
  const CateList = document.querySelector("#cate-list");
  for (let item of ListCategory) {
    CateList.innerHTML += `
          <li><a href="./product.html?cateId=${item.id}">${item.name}</a></li>
      `;
  }
}
ListCategoryMenu();


function ListProductPage(data) {
  const listProductDiv = document.querySelector(".food-c");
  listProductDiv.innerHTML = "";
  for (let item of data) {
    // lặp qua mảng truyền vào tham số data
    // đổ dữ liệu vào trong thẻ div popular
    listProductDiv.innerHTML += `
      <div class="food-t">
      <div class="img">
      <a href="./detail.html?id=${item.id}"><img src="${item.image}" alt="" /></a>
      </div>  
      <div class="title">
      <h3><a href="./detail.html?id=${item.id}" style="color: #F54748;">${item.name}</a></h3>
        <p>$30</p>
      </div>
      <div class="button">
        <button>Add To Cart</button>
      </div>
    </div>
      `;
  }
}


function addCart(id) {
  for (let item of ListProduct) {
    if (id == item.id) {
      if (!item.quality) {
        item.quality = 1;
        ListCart.push(item);
      } else {
        item.quality += 1; 
      }
    }
  }
  sessionStorage.setItem("cart", JSON.stringify(ListCart));
}

function showCart() {
  const listCartDiv = document.querySelector(".row1");
  let data = sessionStorage.getItem("cart");
  data = JSON.parse(data);
  if (listCartDiv) {
    for (let item of data) {
      listCartDiv.innerHTML += `
            <div class="maxwin">
            <div class="stt">
                    <p>${item.quality}</p>
                </div>
                <div class="rowimg"><img src="${item.image}" alt=""></div>
                <div class="describe">
                    <h2>${item.name}</h2>
                    <div class="jj"><p>${item.desc}</p></div>
                    <div class="price"><p>$ ${item.price}</p></div>
                </div>
                
                <button>Thanh toán</button>
            </div>
            `;
    }
  }
}
showCart();


function reRender() {
  const CateId = new URLSearchParams(window.location.search).get("cateId");
  const ProductByC = ListProduct.filter(function (item) {
    return item.category == CateId;
  });
  if (CateId) {
    ListProductPage(ProductByC);
  } else {
    ListProductPage(ListProduct);
  }
}
reRender();

//////////Validate/////////////

function validate() {
  var Name = document.querySelector("#name");
  var Subject = document.querySelector("#subject");
  var Email = document.querySelector("#email");
  var Enquiry = document.querySelector("#enquiry");
  var Messages = document.querySelector("#messages");
  const regname = /^[a-zA-z]+/;
  const reggmail = /\w+@\w+(\.\w+){1,2}$/;
  kq = true;

  // Tên
  if (Name.value == "") {
    document.querySelector("#loiname").innerHTML = "Please enter your name";
    kq = false;
  } else if (!Name.value.match(regname)) {
    document.querySelector("#loiname").innerHTML =
      "The name you entered is in the wrong format";
    kq = false;
  } else {
    document.querySelector("#loiname").innerHTML = "";
  }

  // Sub
  if (Subject.value == "") {
    document.querySelector("#loisub").innerHTML = "Please enter subject";
    kq = false;
  } else {
    document.querySelector("#loisub").innerHTML = "";
  }

  // Email
  if (Email.value == "") {
    document.querySelector("#loiemail").innerHTML =
      "Please enter your email address";
    kq = false;
  } else if (!Email.value.match(reggmail)) {
    document.querySelector("#loiemail").innerHTML =
      "Email address is wrong format";
    kq = false;
  } else {
    document.querySelector("#loiemail").innerHTML = "";
  }

  // Enquiry
  if (Enquiry.value == 0) {
    document.querySelector("#loienquiry").innerHTML =
      "You must select one of the prices in the box";
    kq = false;
  } else {
    document.querySelector("#loienquiry").innerHTML = "";
  }

  if (kq) {
    alert("We will contact you soon");
    return true;
  } else return false;
}
