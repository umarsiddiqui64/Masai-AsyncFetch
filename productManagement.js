// Factory function to create product objects
function createProduct(name, price, category) {
    return {
        name,
        price,
        category,
        applyDiscount(discountPercentage) {
            this.price -= this.price * (discountPercentage / 100);
            console.log(`${this.name} price after ${discountPercentage}% discount: $${this.price.toFixed(2)}`);
        }
    };
}

// Factory function to manage categories and products
function createCategoryManager(categoryName) {
    let products = [];

    return {
        categoryName,
        addProduct(product) {
            if (product.category === categoryName) {
                products.push(product);
                console.log(`${product.name} added to ${categoryName}`);
            } else {
                console.log(`${product.name} does not belong to ${categoryName}`);
            }
        },
        removeProduct(productName) {
            products = products.filter(product => product.name !== productName);
            console.log(`${productName} removed from ${categoryName}`);
        },
        listProducts() {
            console.log(`Products in ${categoryName}:`);
            products.forEach(product => console.log(`- ${product.name}: $${product.price.toFixed(2)}`));
        },
        applyCategoryDiscount(discountPercentage) {
            products.forEach(product => product.applyDiscount(discountPercentage));
        }
    };
}

// Example Usage
const electronicsManager = createCategoryManager('Electronics');
const phone = createProduct('Smartphone', 1000, 'Electronics');
const laptop = createProduct('Laptop', 1500, 'Electronics');
const chair = createProduct('Office Chair', 200, 'Furniture');

// Add products to category manager
electronicsManager.addProduct(phone);
electronicsManager.addProduct(laptop);
electronicsManager.addProduct(chair);

// List products
electronicsManager.listProducts();

// Apply category-wide discount
electronicsManager.applyCategoryDiscount(10);

// Remove a product
electronicsManager.removeProduct('Smartphone');

// List products after removal
electronicsManager.listProducts();
