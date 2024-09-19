// Array of products (JSON object)
const products = [
    { name: "Laptop", category: "electronics", price: 999 },
    { name: "Smartphone", category: "electronics", price: 499 },
    { name: "T-Shirt", category: "clothing", price: 25 },
    { name: "Jeans", category: "clothing", price: 40 },
    { name: "Novel", category: "books", price: 15 },
    { name: "Textbook", category: "books", price: 60 }
];

// Function to filter and display products based on selected category and price
function filterProducts() {
    // Get the selected category and price threshold from the HTML inputs
    const selectedCategory = document.getElementById('category').value;
    const priceThreshold = document.getElementById('price').value;

    // Get the div where we will display the filtered products
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ""; // Clear previous results

    let prodCount = products.length;
    for(let i=0;i<prodCount;i++){
        if((products[i].category === selectedCategory || selectedCategory === "all") && products[i].price <=priceThreshold){
            resultDiv.innerHTML += `<p>${products[i].name} - $${products[i].price}</p>`
        }
    }
    
    // Step 1: Use a for loop to iterate through the products array

	// Step 2: Use an if statement to filter by both category and price
	// The product should be included if it belongs to the selected category
	// and its price is below the priceThreshold
	// Hint: Use (selectedCategory === 'all' || product.category === selectedCategory)
	// and check product.price < priceThreshold

	// Step 3: If the product meets the criteria, append it to the result div
	// Hint: Use resultDiv.innerHTML += `<p>${product.name} - $${product.price}</p>`
    }

