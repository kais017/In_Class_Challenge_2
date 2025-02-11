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

// Task 3

let sales = [250, 400, 150, 900, 1200];

function calculateTotalRevenue(sales) {
return sales.reduce((total, sale) =>total+sale, 0); // 0 is the starting point

}
console.log(`Total Rev. 2024 $${calculateTotalRevenue(sales)}`)


//Task 4

let employee = { name: "John Doe", salary: 50000, position: "manager"};

function updateSalary(employee, percentageIncrease) {
     return employee.salary += employee.salary * percentageIncrease;
}
console.log(updateSalary(employee, .1));

