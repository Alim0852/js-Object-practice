// Object representing iPhone models and specifications
var iphoneModels = [
    {
        productName: "iPhone 13",
        color: "Midnight",
        storageCapacity: "256GB",
        price: 999, // in dollars
        releaseDate: "September 2021",
        cameraSpecs: "Dual 12MP Ultra Wide and Wide cameras",
        displaySpecs: "6.1-inch Super Retina XDR display",
        processor: "A15 Bionic chip"
    },
    {
        productName: "iPhone 5s",
        color: "Space Gray",
        storageCapacity: "16GB",
        price: 199, // in dollars
        releaseDate: "September 2013",
        cameraSpecs: "8MP iSight camera",
        displaySpecs: "4-inch Retina display",
        processor: "Apple A7 chip"
    },
    {
        productName: "iPhone 6",
        color: "Silver",
        storageCapacity: "64GB",
        price: 649, // in dollars
        releaseDate: "September 2014",
        cameraSpecs: "8MP iSight camera",
        displaySpecs: "4.7-inch Retina HD display",
        processor: "Apple A8 chip"
    },
    {
        productName: "iPhone 6s",
        color: "white",
        storageCapacity: "64GB",
        price: 649, // in dollars
        releaseDate: "September 2014",
        cameraSpecs: "8MP iSight camera",
        displaySpecs: "4.7-inch Retina HD display",
        processor: "Apple A8 chip"
    },
    {
        productName: "iPhone 13 Pro Max",
        color: "Graphite",
        storageCapacity: "512GB",
        price: 1399, // in dollars
        releaseDate: "September 2021",
        cameraSpecs: "Triple 12MP Ultra Wide, Wide, and Telephoto cameras",
        displaySpecs: "6.7-inch Super Retina XDR display",
        processor: "A15 Bionic chip"
    },
    {
        productName: "iPhone 12 pro",
        color: "Graphite",
        storageCapacity: "512GB",
        price: 1399, // in dollars
        releaseDate: "September 2021",
        cameraSpecs: "Triple 12MP Ultra Wide, Wide, and Telephoto cameras",
        displaySpecs: "6.7-inch Super Retina XDR display",
        processor: "A15 Bionic chip"
    },
    {
        productName: "iPhone 12 pro max",
        color: "Graphite",
        storageCapacity: "512GB",
        price: 1399, // in dollars
        releaseDate: "September 2021",
        cameraSpecs: "Triple 12MP Ultra Wide, Wide, and Telephoto cameras",
        displaySpecs: "6.7-inch Super Retina XDR display",
        processor: "A15 Bionic chip"
    },
    // Add more iPhone models as needed
];

// Function to search for iPhone model
function searchiPhone() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var searchResult = document.getElementById("searchResult");
    searchResult.innerHTML = "";

    // Search for the iPhone model
    var foundModel = iphoneModels.find(function(model) {
        return model.productName.toLowerCase() === searchInput;
    });

    // Display the result if found
    if (foundModel) {
        var resultHTML = "<h2>" + foundModel.productName + "</h2>";
        resultHTML += "<p><strong>Color:</strong> " + foundModel.color + "</p>";
        resultHTML += "<p><strong>Storage Capacity:</strong> " + foundModel.storageCapacity + "</p>";
        resultHTML += "<p><strong>Price:</strong> $" + foundModel.price + "</p>";
        resultHTML += "<p><strong>Release Date:</strong> " + foundModel.releaseDate + "</p>";
        resultHTML += "<p><strong>Camera Specs:</strong> " + foundModel.cameraSpecs + "</p>";
        resultHTML += "<p><strong>Display Specs:</strong> " + foundModel.displaySpecs + "</p>";
        resultHTML += "<p><strong>Processor:</strong> " + foundModel.processor + "</p>";
        searchResult.innerHTML = resultHTML;
    } else {
        searchResult.innerHTML = "<p>No matching iPhone model found.</p>";
    }
}
