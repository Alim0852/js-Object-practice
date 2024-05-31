// Car models data with specifications and images (placeholder images)
const carModels = {
    Sedan: { name: "Sedan", brand: "Brand X", price: 25000, specifications: "Specification 1", image: "https://via.placeholder.com/300" },
    SUV: { name: "SUV", brand: "Brand Y", price: 35000, specifications: "Specification 2", image: "https://via.placeholder.com/300" },
    Truck: { name: "Truck", brand: "Brand Z", price: 45000, specifications: "Specification 3", image: "https://via.placeholder.com/300" },
    // Add more car models with specifications and images as needed
};

// Function to display car details
function displayCarDetails(car) {
    const carDetailsContainer = document.getElementById("car-details");
    carDetailsContainer.innerHTML = ""; // Clear previous content

    const carElement = document.createElement("div");
    carElement.classList.add("car");
    carElement.innerHTML = `
        <img src="${car.image}" alt="${car.name}">
        <h3>${car.name}</h3>
        <p><strong>Brand:</strong> ${car.brand}</p>
        <p><strong>Price:</strong> $${car.price}</p>
        <p><strong>Specifications:</strong> ${car.specifications}</p>
    `;
    carDetailsContainer.appendChild(carElement);
}

// Event listener for select car dropdown
document.getElementById("car-select").addEventListener("change", function(event) {
    const selectedCarName = event.target.value;
    const selectedCar = carModels[selectedCarName];
    if (selectedCar) {
        displayCarDetails(selectedCar);
    }
});

// Function to filter cars based on search query
function filterCars(query) {
    const filteredCars = Object.values(carModels).filter(car => {
        return car.name.toLowerCase().includes(query.toLowerCase()) ||
               car.brand.toLowerCase().includes(query.toLowerCase());
    });
    displayCarDetails(filteredCars[0]); // Display first matching car
}

// Event listener for search input
document.getElementById("search-input").addEventListener("input", function(event) {
    filterCars(event.target.value);
});