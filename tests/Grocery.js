class Product {
    constructor(name, category, pricePerUnit, quantity, bulkDiscount,
    nonPerishableDiscount) {
    this.name = name;
    this.category = category;
    this.pricePerUnit = pricePerUnit;
    this.quantity = quantity;
    this.bulkDiscount = bulkDiscount;
    this.nonPerishableDiscount = nonPerishableDiscount;
    }
    calculateDiscountedTotal() {
    let total = this.pricePerUnit * this.quantity;
    // Apply bulk discount for perishable items if quantity > 5
    if (this.category === "Perishable" && this.quantity > 5) {
    total-= total * (this.bulkDiscount / 100);
    }
    // Apply non-perishable discount if total order value > 2000
    if (this.category === "Non-Perishable" && total > 2000) {
    total-= total * (this.nonPerishableDiscount / 100);
    }
    return total;
    }
    }
    class GroceryOrderSystem {
    constructor(products) {
    this.products = products;
    }
    calculateTotalAmount() {
    let totalAmount = 0;
    let highestCostProduct = null;
    let highestCost = 0;
    this.products.forEach(product => {
    const productTotal = product.calculateDiscountedTotal();
    totalAmount += productTotal;
   if (productTotal > highestCost) {
    highestCost = productTotal;
    highestCostProduct = product;
    }
    });
    return { totalAmount, highestCostProduct };
    }
    displayResults() {
    const { totalAmount, highestCostProduct } =
    this.calculateTotalAmount();
    if (highestCostProduct) {
    console.log("Product with the highest total cost after discounts:",
    highestCostProduct.name);
    console.log("Total amount to be paid by the customer: Rs.",
    totalAmount);
    }
    }
    }
    // Create the list of products as per the example order
    const products = [
    new Product("Apples", "Perishable", 100, 6, 10, 0),
    new Product("Rice (5kg bag)", "Non-Perishable", 500, 4, 0, 5),
    new Product("Milk (1 liter)", "Perishable", 50, 10, 5, 0)
    ];
    // Create an instance of GroceryOrderSystem with the products list
    const orderSystem = new GroceryOrderSystem(products);
    orderSystem.displayResults();