// Function to show the popup
function showPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'block';
}

// Function to hide the popup
function hidePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'none';
}

// Select all buttons with the class 'popup-button' and add event listeners
var buttons = document.querySelectorAll('.popup-button');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var popupId = button.getAttribute('data-popup');
        showPopup(popupId);
    });
});

// Hide the popup when clicking outside of the popup content
window.addEventListener('click', function(event) {
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
