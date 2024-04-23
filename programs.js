// Get all elements with the class "day"
var days = document.querySelectorAll('.day');

// Loop through each day element
days.forEach(function(day) {
    // Add a click event listener to each day
    day.addEventListener('click', function() {
        // Toggle the class "green" on the expand icon and the day text
        day.querySelector('.expand-icon').classList.toggle('green');
        day.classList.toggle('green-text');
        
        // Toggle the display of the content
        var content = day.nextElementSibling; // Get the content next to the day
        content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var expandIcons = document.querySelectorAll('.expand-icon');

    expandIcons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            var content = this.nextElementSibling;
            content.classList.toggle('expanded');
        });
    });
});


