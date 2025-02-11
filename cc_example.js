// Task 1 

let products = [
{ name: "Laptop", price: 1200, category: "Electronics"}, // T
{ name: "Notebook", price: 5, category: "Stationary"}, //F
{ name: "Headphones", price: 100, category: "Electronics"} //T

];


function getProductsByCategory(products, category)
 { return products.filter(product => product.category === category);

 }

 console.log(getProductsByCategory(products, "Electronics"));