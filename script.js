
let foods = [
    {
        name: "Vegetable Rice",
        category: "Vegetarian",
        quantity: 30,
        location: "Vijayawada",
        emoji: "🍛"
    },
    {
        name: "Idly and Sambar",
        category: "Vegetarian",
        quantity: 20,
        location: "Guntur",
        emoji: "🥣"
    },
    {
        name: "Chapati and Curry",
        category: "Vegetarian",
        quantity: 25,
        location: "Mangalagiri",
        emoji: "🫓"
    },
    {
        name: "Bread and Fruits",
        category: "Bakery",
        quantity: 15,
        location: "Vijayawada",
        emoji: "🥖"
    }
];

// Display Food
function displayFoods() {

    let foodList = document.getElementById("foodList");

    foodList.innerHTML = "";

    foods.forEach((food, index) => {

        foodList.innerHTML += `
            <div class="food-card">
                <div class="food-image">${food.emoji}</div>

                <div class="food-info">
                    <h3>${food.name}</h3>
                    <p>Category: ${food.category}</p>
                    <p>Quantity: ${food.quantity} meals</p>
                    <p>📍 ${food.location}</p>

                    <button class="request-btn"
                        onclick="requestFood(${index})">
                        Request Food
                    </button>
                </div>
            </div>
        `;
    });
}

// Request Food
function requestFood(index) {

    alert(
        "Your request for " +
        foods[index].name +
        " has been submitted successfully!"
    );
}

// Search Food
document.getElementById("searchFood").addEventListener("input", function() {

    let searchValue = this.value.toLowerCase();

    let cards = document.querySelectorAll(".food-card");

    cards.forEach((card) => {

        let text = card.innerText.toLowerCase();

        if (text.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Donation Form
document.getElementById("donationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let foodName = document.getElementById("foodName").value;
    let category = document.getElementById("category").value;
    let quantity = document.getElementById("quantity").value;
    let location = document.getElementById("location").value;

    let newFood = {
        name: foodName,
        category: category,
        quantity: quantity,
        location: location,
        emoji: "🍱"
    };

    foods.push(newFood);

    displayFoods();

    document.getElementById("message").innerText =
        "Donation submitted successfully! Thank you for supporting NourishNet.";

    document.getElementById("donationForm").reset();

    document.getElementById("totalDonations").innerText =
        parseInt(document.getElementById("totalDonations").innerText) + 1;
});

// Scroll Functions
function scrollToDonate() {
    document.getElementById("donate").scrollIntoView();
}

function scrollToFind() {
    document.getElementById("find").scrollIntoView();
}

// Login Modal
function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

function login() {
    alert("Login successful!");
    closeLogin();
}

// Signup Modal
function openSignup() {
    document.getElementById("signupModal").style.display = "flex";
}

function closeSignup() {
    document.getElementById("signupModal").style.display = "none";
}

function signup() {
    alert("Account created successfully!");
    closeSignup();
}

// Initial Load
displayFoods();