// Locations for suggestion
const locationList = [
    "in Vespucci Canals",
  "in Vinewood Hills",
  "in Rancho",
  "in Sandy Shores",
  "in Vanilla Unicorn Bar",
  "in Vespucci Canals",
  "in Vinewood Hills",
  "in Richman",
  "in Rockford Hills",
  "in Paleto Bay",
  "in Pillbox Hill",
  "in West Vinewood",
  "in Bahama Mamas",
  "in Banham Canyon",
  "in Cayo Perico Island",
  "in ghetto",
  "in Eclipse Tower",
  "in Del Perro",
  "in Bahama Mamas",
  "in Banham Canyon",
  "in Downtown Vinewood",
  "in El Burro Heights",
  "in city",
  "near beach",
  "near beach market",
  "near stadium",
  "near fire station",
  "near train station",
  "near post office",
  "near airport",
  "near mall",
  "near Stock Exchange",
  "near Residential complex",
  "near Auto Salon",
  "near Fight Club",
  "near Hospital",
  "near Sandy Hospital",
  "near Diamond Bar",
  "near LifeInvader",
];

// Format price function for house ads
function formatHousePrice(price) {
    if (price == "") {
        return "Negotiable";
    }
    if (price.slice(-1) == 'k') {
        return `$${(parseFloat(price.slice(0, -1)) * 1000).toLocaleString()}`.replace(/,/g, ".");
    } else if (price.slice(-1) == 'm') {
        return `$${parseFloat(price.slice(0, -1)).toLocaleString(undefined, {maximumFractionDigits: 1})} Million`.replace(/,/g, "");
    } else {
        return `$${parseFloat(price).toLocaleString(undefined, {maximumFractionDigits: 0})}`.replace(/,/g, ".");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // House Ad Form Elements
    const houseNumberInput = document.getElementById('house-number');
    const locationInput = document.getElementById('location');
    const houseSubmitBtn = document.getElementById('house-submit-btn');
    const houseCopyBtn = document.getElementById('house-copy-btn');
    const houseOutput = document.getElementById('house-output');
    const locationSuggestions = document.getElementById('location-suggestions');
    const apartmentCheckbox = document.getElementById('apartment');
    const apartmentNumberGroup = document.getElementById('apartment-number-group');
    const apartmentNumberInput = document.getElementById('apartment-number');
    
    // Show/Hide Apartment No. input based on checkbox
    apartmentCheckbox.addEventListener('change', () => {
        if (apartmentCheckbox.checked) {
            apartmentNumberGroup.style.display = 'block';
        } else {
            apartmentNumberGroup.style.display = 'none';
            apartmentNumberInput.value = ''; // Clear input when unchecked
        }
    });

    // Location suggestions
    locationInput.addEventListener('input', function() {
        updateLocationSuggestions();
    });
    
    // Generate house ad
    houseSubmitBtn.addEventListener('click', function () {
        const houseNumber = houseNumberInput.value;
        const transactionType = document.querySelector('input[name="house-transaction"]:checked').value;
        const location = locationInput.value.trim();
        const view = document.getElementById('view').value; // Get the selected view

        const isApartment = apartmentCheckbox.checked;
        const apartmentNumber = apartmentNumberInput.value.trim();

        const garageSpaces = [];
        if (document.getElementById('garage-2').checked) garageSpaces.push("2 g.s.");
        if (document.getElementById('garage-5').checked) garageSpaces.push("5 g.s.");
        if (document.getElementById('garage-9').checked) garageSpaces.push("9 g.s.");
        if (document.getElementById('garage-25').checked) garageSpaces.push("25 g.s.");

        const warehouseSpaces = [];
        if (document.getElementById('warehouse-3').checked) warehouseSpaces.push("3 w.h.");
        if (document.getElementById('warehouse-4').checked) warehouseSpaces.push("4 w.h.");
        if (document.getElementById('warehouse-5').checked) warehouseSpaces.push("5 w.h.");

        const features = [];
        if (document.getElementById('garden').checked) features.push("a garden");
        if (document.getElementById('custom-interior').checked) features.push("custom interior");
        if (document.getElementById('house-insurance').checked) features.push("insurance");

        const others = [];
        if (document.getElementById('helipad').checked) others.push("helipad");
        if (document.getElementById('tennis-court').checked) others.push("tennis court");
        if (document.getElementById('driveway').checked) others.push("long driveway");
        if (document.getElementById('swimming-pool').checked) others.push("swimming pool");

        const mainFeatures = [
            ...features.filter(feature => feature === "a garden"),
            ...garageSpaces,
            ...warehouseSpaces,
            ...features.filter(feature => feature !== "a garden"),
            ...others,
        ];

        let adText = transactionType === "Selling" ? "Selling" : "Buying";

        if (isApartment) {
            if (apartmentNumber) {
                adText += ` apartment №${apartmentNumber}`;
            } else {
                adText += " an apartment";
            }
        } else if (houseNumber) {
            adText += ` house №${houseNumber}`;
        } else {
            adText += " a house";
        }

        if (mainFeatures.length > 0) {
            adText += " with ";
            if (mainFeatures.length === 1) {
                adText += mainFeatures[0];
            } else {
                const allButLast = mainFeatures.slice(0, -1).join(", ");
                const lastFeature = mainFeatures[mainFeatures.length - 1];
                adText += `${allButLast} and ${lastFeature}`;
            }
        }

        if (view) {
            adText += ` and ${view}`;
        }

        if (location) {
            adText += `  ${location}`;
        }

        const price = document.getElementById('house-price').value;
        const priceText = formatHousePrice(price);
        adText += transactionType === "Selling" ? `. Price: ${priceText}.` : `. Budget: ${priceText}.`;

        houseOutput.textContent = adText;
    });
    
    // Copy house ad to clipboard
    houseCopyBtn.addEventListener('click', async function() {
        const outputText = houseOutput.textContent;
        if (!outputText) {
            showErrorPopup("Nothing to copy! Please generate an ad first.");
            return;
        }
        
        try {
            await navigator.clipboard.writeText(outputText);
            showNotification();
            await updateAdCount('house');
            
            // Reset all fields
            houseNumberInput.value = "";
            document.querySelector('input[name="house-transaction"][value="Selling"]').checked = true;
            document.getElementById('garage-2').checked = false;
            document.getElementById('garage-5').checked = false;
            document.getElementById('garage-9').checked = false;
            document.getElementById('garage-25').checked = false;
            document.getElementById('warehouse-3').checked = false;
            document.getElementById('warehouse-4').checked = false;
            document.getElementById('warehouse-5').checked = false;
            document.getElementById('garden').checked = false;
            document.getElementById('custom-interior').checked = false;
            document.getElementById('house-insurance').checked = false;
            document.getElementById('helipad').checked = false;
            document.getElementById('tennis-court').checked = false;
            document.getElementById('driveway').checked = false;
            document.getElementById('swimming-pool').checked = false;
            document.getElementById('view').value = "";
            locationInput.value = "";
            document.getElementById('house-price').value = "";
            houseOutput.textContent = "";
        } catch (err) {
            showErrorPopup("Error copying text: " + err);
        }
    });
    
    // Location suggestion functionality
    function updateLocationSuggestions() {
        const inputText = locationInput.value.toLowerCase();
        locationSuggestions.innerHTML = "";
        
        if (inputText) {
            const matches = locationList.filter(location => 
                location.toLowerCase().includes(inputText)
            );
            
            if (matches.length > 0) {
                matches.forEach(location => {
                    const div = document.createElement('div');
                    div.textContent = location;
                    div.addEventListener('click', () => {
                        locationInput.value = location;
                        locationSuggestions.style.display = 'none';
                    });
                    locationSuggestions.appendChild(div);
                });
                locationSuggestions.style.display = 'block';
                return;
            }
        }
        
        locationSuggestions.style.display = 'none';
    }
});