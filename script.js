

// function postData(data) {
// fetch("https://sitniks.ua/mail-send.php", {
//   "headers": {
//     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//   },
//   "body": "name=test&phone=+380976503982&form_name=%D0%9A%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F&test=1",
//   "method": "POST",
// })
// }

const article = document.querySelector(".article-input")
const addBtn = document.querySelector(".submit-btn");
const productList = document.querySelector(".product");


const product = {
  name:" Test-1",
  imgURL: "images/images.png",
  tags: "img",
  article: 111111

}


addBtn.addEventListener("click", () => {

   const data = postData(article.value)

   console.log(data);
   

  if (data === 5) {
    console.log('ERROR');
    
  } else {

    console.log('OK');


 
    // product = JSON.parse(data)
    addProductCard(product)
  }


})


 function postData(data) {

 return  data = Number(data) + 4


 }


 function addProductCard(product) { 
  console.log('addProductCard');
  

  const markup = 

          `<div class="product-card">
            <span>X</span>
            <h5>${product.name}</h5>
            <img src="images/images.png" alt="img">
            <img src="${product.imgURL}" alt="${product.tags}" loading="lazy"/>
            <p>${product.article}</p>
            <div>
                <span>количество</span>
                <input type="text">
            </div>
          </div>`

  console.log(markup);

 
  productList.insertAdjacentHTML("beforeend", markup);
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