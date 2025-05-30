document.addEventListener('DOMContentLoaded', () => {
    
    // Access control for AFK Logs tab
    const allowedUsers = ["sabbir12@", "lucix", "admin"]; // Add allowed usernames here
    
    // Tab navigation
    window.showTab = function(tabId) {
        // If trying to access AFK logs but not allowed
        if (tabId === 'afk-logs' && !allowedUsers.includes(username)) {
            showErrorPopup("You are not permitted to access this page.");
            showTab('car-trade'); // Redirect to the Cars section
            return;
        }
        
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Show selected tab
        document.getElementById(tabId).classList.add('active');
        
        // Update active button in the top bar
        document.querySelectorAll('.tab-button').forEach(button => {
            button.classList.remove('active');
        });
        
        // Update the active button of the currently selected tab
        const activeButton = document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    };
    
    // Function to show the error popup
    window.showErrorPopup = function(message) {
        const errorPopup = document.getElementById("errorPopup");
        errorPopup.style.display = "block";
        
        // Set the message in the popup
        errorPopup.querySelector('p').textContent = message;
        
        // Add event listener to close button
        document.getElementById("errorOkButton").addEventListener('click', () => {
            errorPopup.style.display = 'none';
        });
    };
    
    // Show notification for copy success
    window.showNotification = function() {
        const notification = document.getElementById('notification');
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 2000);
    };
    
    // Run permission check on page load
    if (!allowedUsers.includes(username)) {
        showTab('car-trade'); // Redirect to Cars section initially if not allowed
        
        // Hide the AFK Logs tab for unauthorized users
        const afkLogsTab = document.getElementById('afk-logs-tab');
        if (afkLogsTab) {
            afkLogsTab.style.display = 'none';
        }
    }
    
    // Handle clicks outside suggestion boxes
    document.addEventListener('click', (e) => {
        if (e.target.id !== 'car-name') {
            document.getElementById('car-suggestions').style.display = 'none';
        }
        if (e.target.id !== 'trading-car') {
            document.getElementById('trading-car-suggestions').style.display = 'none';
        }
        if (e.target.id !== 'location') {
            document.getElementById('location-suggestions').style.display = 'none';
        }
    });
    
    // Track ad stats locally
    window.updateAdCount = function(type) {
        let counts = localStorage.getItem('adCounts');
        counts = counts ? JSON.parse(counts) : { car: 0, house: 0 };
        counts[type] += 1;
        localStorage.setItem('adCounts', JSON.stringify(counts));
        
        // Update stats in local storage
        const stats = {
            username: username,
            carAds: counts.car,
            houseAds: counts.house,
            totalAds: counts.car + counts.house,
            lastUpdated: new Date().toLocaleString()
        };
        
        localStorage.setItem('userStats', JSON.stringify(stats));
        return counts[type];
    };
});