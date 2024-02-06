// function postData(data) {
// fetch("https://sitniks.ua/mail-send.php", {
//   "headers": {
//     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//   },
//   "body": "name=test&phone=+380976503982&form_name=%D0%9A%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F&test=1",
//   "method": "POST",
// })
// }

const product = {
  name: "Test-1",
  imgURL: "images/images.png",
  tags: "img",
  article: '111111'
};

const article = document.querySelector(".article-input");
const orderNumber = document.querySelector(".order-number");

const addBtn = document.querySelector(".article-btn");
const orderBtn = document.querySelector(".order-btn");

const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");

const productList = document.querySelector(".product");




orderBtn.addEventListener("click", () => {

  console.log("orderBtn");

});



addBtn.addEventListener("click", () => {
  const data = postData(article.value);

  if (article.value.length === 0) {
    return alert("введите артикул");
  }

  if (data === 5) {
    console.log("ERROR");
  } else {
    console.log("OK");

    // product = JSON.parse(data)
    addProductCard(product);
    article.value = " ";
  }
});

productList.addEventListener("click", function (e) {
  
  let targetItem = e.target;
  if (targetItem.closest(".removeBtn")) {
    let removeId = targetItem.closest(".removeBtn").id;

    removeProductCard(removeId);
  }
});



btn.addEventListener("click", () => {
  if (!orderNumber.value) {
    return alert("введите номер заказа");
  }

  const params = {
    "order number": orderNumber.value,
    status: "in progress",
  };

  const productArr = dataProcessing();

  productArr.splice(0, 0, params);

  console.log(productArr);
});

btn1.addEventListener("click", () => {
  const params = {
    "order number": orderNumber.value,
    status: "completed",
  };

  const productArr = dataProcessing();

  productArr.splice(0, 0, params);

  console.log(productArr);
});

function postData(data) {
  return (data = Number(data) + 4);
}

function addProductCard(product) {
  const markup = `<li class="product-card" id="${article.value}">
          <span class="removeBtn" id="${article.value}">X</span>
          <h5>${product.name}</h5>
            <img src="${product.imgURL}" alt="${product.tags}" loading="lazy"/>
            <p> артик:${article.value}</p>
            <div>
                <span>количество</span>
                <input type="number" min="1" max="99" value="1">
            </div>
          </li>`;

  productList.insertAdjacentHTML("beforeend", markup);
}

function removeProductCard(productId) {
  let elem = document.getElementById(`${productId}`);
  productList.removeChild(elem);
}

function dataProcessing() {
  const allProducts = document.querySelectorAll(".product-card");
  const products = [...allProducts];

  const productItem = products.map((product) => {
    const quantity = product.children[4].children[1].value;
    const article = product.id;

    return { article: article, quantity: quantity };
  });
  return productItem;
}

// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUsers(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderUsers(users) {
//   const markup = users
//     .map((user) => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join("");
//   userList.insertAdjacentHTML("beforeend", markup);
// }
