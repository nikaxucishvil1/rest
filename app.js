// const array = [
//     {
//         name: 'nika',
//         id: 1
//     },
//     {
//         name: 'saba',
//         id: 2
//     }
// ]
// const newArr = array.map((sum) => {
//    if (sum.id === 2) {
//     return {...sum , name: 'beqa'}
//    }else{
//     return sum
//    }
// })

// console.log(newArr);

// const Numarr = [10,13,33000]
// const allNum = Numarr.reduce((sum,num ) => {
//     return sum + num
// })
// console.log(allNum);

// const arr = [12,13]
// let x
// let y
// x = y = arr

// console.log(x,y);

// 1. შეუცვალეთ დივს ბექრაუნდი წითლიდან მწვანეზე , მწვანიდან წითელზე

// const button = document.querySelector("#button");
// const container = document.querySelector("#div");

// button.addEventListener("click", () => {
//   container.classList.toggle("div");
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. შექმენით მასივი ფერებით დივის კლიკზე უნდა უცვალოს ამ დივს ფერები,
// ფერები უნდა აიღოს მასივიდიან
// let colors = ["red", "green", "blue", "yellow"];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3.
// უნდა შექმნათ ფუნქცია რომელიც პარამეტრად მიიღებს მასივს და შეამოწმებს,
// თუ მასივში არის უარყოფითი ციფრი დალოგეთ "მაფია" თუ არარის დალოგეთ
// "არარის"

// function checkNum() {
//   const array1 = [1, 2, 3, 4];
//   array1.forEach((item) => {
//     if (item < 0) {
//       console.log("მაფია");
//     } else {
//       console.log("არარის");
//     }
//   });
// }
// checkNum();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. გაფილტრეთ პროდუქტები კატეგორიის მიხედვით , Filter მეთოდით

// const products = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 10 },
//   { id: 2, name: "Headphones", category: "Electronics", price: 200, stock: 15 },
//   { id: 3, name: "Coffee Maker", category: "Appliances", price: 100, stock: 5 },
//   { id: 4, name: "Blender", category: "Appliances", price: 150, stock: 8 },
//   { id: 5, name: "Smartphone", category: "Electronics", price: 500, stock: 20 },
//   { id: 6, name: "Book", category: "Literature", price: 20, stock: 100 },
// ];

// button.addEventListener("click", () => {
//   const input = document.querySelector("#input");

//   const result = products.filter(check);

//   function check(sum) {
//     if (input.value === "Electronics") {
//       return sum.category === "Electronics";
//     }else if(input.value === "Literature"){
//         return sum.category === "Literature"
//     }else if(input.value === 'Appliances'){
//         return sum.category === 'Appliances'
//     }else{
//         return "err"
//     }
//   }

//   console.log(result);
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5. იპოვეთ ყველაზე იაფრი პროდუქტი , Reduce მეთოდით

function lowest() {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 10 },
    {
      id: 2,
      name: "Headphones",
      category: "Electronics",
      price: 200,
      stock: 15,
    },
    {
      id: 3,
      name: "Coffee Maker",
      category: "Appliances",
      price: 100,
      stock: 5,
    },
    { id: 4, name: "Blender", category: "Appliances", price: 150, stock: 8 },
    {
      id: 5,
      name: "Smartphone",
      category: "Electronics",
      price: 500,
      stock: 20,
    },
    { id: 6, name: "Book", category: "Literature", price: 20, stock: 100 },
  ];

  

}



console.log(lowest());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6.

// დაასორტირეთ პროდუქტები ფასის მიხედვით

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 10 },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, stock: 15 },
  { id: 3, name: "Coffee Maker", category: "Appliances", price: 100, stock: 5 },
  { id: 4, name: "Blender", category: "Appliances", price: 150, stock: 8 },
  { id: 5, name: "Smartphone", category: "Electronics", price: 500, stock: 20 },
  { id: 6, name: "Book", category: "Literature", price: 20, stock: 100 },
];


products.sort()



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7

// წამოიღეთ დეითა ეიპიაიდან კონკრეტულად (Id, Title, Price)

// https://fakestoreapi.com/products

// function fetchFoo() {
//   fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// }
// fetchFoo()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// karoche davwer ra saxlshi eseni imena ar maxsovs 5 6 