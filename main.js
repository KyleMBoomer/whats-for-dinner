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
    "Lemon Tart", "Creme Brulee", "Key Lime Pie", "Chocolate Chip Cookies", "Banana Split",
    "Strawberry Shortcake", "Blueberry Cobbler", "Red Velvet Cupcakes", "Peach Crisp",
    "Carrot Cake", "Raspberry Cheesecake", "Pavlova", "Chocolate Mousse"
]

var sideDishButton = document.querySelector('#side-dish-button')
var mainDishButton = document.querySelector('#main-dish-button')
var dessertButton = document.querySelector('#dessert-button')
var letsCookButton = document.querySelector('#lets-cook-button')
var entireMealButton = document.querySelector('#entire-meal-button')
var dishResult = document.querySelector('#result')
var cookpot = document.querySelector('.cookpot-image')

sideDishButton.addEventListener('change', function () {
   show(cookpot)
   hide(dishResult)
   
})

mainDishButton.addEventListener('change', function () {
    show(cookpot)
    hide(dishResult)
})

dessertButton.addEventListener('change', function () {
    show(cookpot)
    hide(dishResult)
})

letsCookButton.addEventListener('click', function () {
    getRandomDish();
    hide(cookpot) 
    show(dishResult)  
})

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function getRandomDish() {
    if (!sideDishButton.checked && !mainDishButton.checked && !dessertButton.checked && !entireMealButton.checked) {
        dishResult.innerHTML = "You must select a dish!"
        toggleView(false, true)
    }
    if (sideDishButton.checked) {
        dishResult.innerHTML = `<em>You should make:</em><br><span style="font-weight: bold; font-size: larger;">${sideDishes[getRandomIndex(sideDishes)]}</span>!`
    } else if (mainDishButton.checked) {
        dishResult.innerHTML = `<em>You should make</em><br><span style="font-weight: bold; font-size: larger;">${mainDishes[getRandomIndex(mainDishes)]}</span>!`
    } else if (dessertButton.checked) {
        dishResult.innerHTML = `<em>You should make</em><br><span style="font-weight: bold; font-size: larger;">${desserts[getRandomIndex(desserts)]}</span>!`
    } else if (entireMealButton.checked) {
        dishResult.innerHTML = `<em>You should make </em><br><span style="font-size: larger;">${mainDishes[getRandomIndex(mainDishes)]} with a side of ${sideDishes[getRandomIndex(sideDishes)]} and ${desserts[getRandomIndex(desserts)]} for dessert!</span>`
    }

}


function show(element) {
    element.classList.remove('hidden')
}

function hide(element) {
    element.classList.add('hidden')
}
