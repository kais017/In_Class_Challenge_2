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

 // Task 2: array methods - map 

 console.log(products)
 console.log("*".repeat(20))


 function applyDiscount(products, discountRate) {
     return products.map( product =>({
        ...product,
        price: product.price - (product.price * discountRate)

    }

    ))
    }

console.log(applyDiscount(products, 0.1)); 
console.log(products)
console.log("*".repeat(20))

