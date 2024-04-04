var mainDishes = [
    "Spaghetti Carbonara", "Chicken Alfredo", "Beef Stroganoff", "Vegetable Stir Fry", "Grilled Salmon",
    "Mushroom Risotto", "Tacos", "Chicken Parmesan", "Taquitos", "Shrimp Scampi", "Pad Thai",
    "Lamb Curry", "Pasta Primavera", "Hamburger", "Roast Chicken", "Vegetable Curry",
    "Fish and Chips", "Lasagna", "Beef Burger", "Sushi"
]

var sideDishes = [
    "Mashed Potatoes", "Steamed Vegetables", "Garlic Bread", "Caesar Salad", "Fried Rice", "Coleslaw",
"Macaroni and Cheese", "Roasted Vegetables", "French Fries", "Onion Rings", "Baked Beans",
"Quinoa Salad", "Caprese Salad", "Corn on the Cob", "Sweet Potato Fries", "Bruschetta", 
"Green Bean Casserole", "Garlic Mashed Cauliflower", "Creamed Spinach", "Greek Salad"
]

var desserts = [
    "Chocolate Cake", "Apple Pie", "Cheesecake", "Ice Cream Sundae", "Brownies", "Tiramisu", "Pumpkin Pie", 
    "Lemon Tart", "Creme Brulee",  "Key Lime Pie", "Chocolate Chip Cookies", "Banana Split", 
    "Strawberry Shortcake", "Blueberry Cobbler", "Red Velvet Cupcakes", "Peach Crisp",
    "Carrot Cake", "Raspberry Cheesecake", "Pavlova", "Chocolate Mousse"
]

var sideDishButton = document.querySelector('#side-dish-button')
var mainDishButton = document.querySelector('#main-dish-button')
var dessertButton = document.querySelector('#dessert-button')
var letsCookButton = document.querySelector('#lets-cook-button')
var dishResult = document.querySelector('#result')
var cookpot = document.querySelector('.cookpot-image') 

sideDishButton.addEventListener('change', function() {
    toggleView(true, false)
})

mainDishButton.addEventListener('change', function() {
    toggleView(true, false)
})

dessertButton.addEventListener('change', function() {
    toggleView(true, false);
})

letsCookButton.addEventListener('click', function() {
    toggleView(false, true);
    getRandomDish();
})

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function getRandomDish() {
if (sideDishButton.checked) {
    dishResult.innerHTML = `<em>You should make:</em><br><span style="font-weight: bold; font-size: larger;">${sideDishes[getRandomIndex(sideDishes)]}</span>!`
} else if (mainDishButton.checked) {
    dishResult.innerHTML = `<em>You should make</em><br><span style="font-weight: bold; font-size: larger;">${mainDishes[getRandomIndex(mainDishes)]}</span>!`
    } else if (dessertButton.checked) {
    dishResult.innerHTML = `<em>You should make</em><br><span style="font-weight: bold; font-size: larger;">${desserts[getRandomIndex(desserts)]}</span>!`
  }
}


function toggleView(showCookpot, showDishResult) {
    cookpot.classList.toggle('hidden', !showCookpot)
    dishResult.classList.toggle('hidden', !showDishResult)
}

