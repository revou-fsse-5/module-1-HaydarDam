// Select elements
const burgerBtn = document.getElementById('burgerBtn');
const searchBtn = document.getElementById('searchBtn');
const headerNavigation = document.getElementById('headerNavigation');
const searchNav = document.getElementById('searchNav');
const closeBtn = document.getElementById('closeBtn');

// Toggle navigation
burgerBtn.addEventListener('click', function() {
    headerNavigation.classList.toggle('active');
});

// Toggle search bar
searchBtn.addEventListener('click', function() {
    searchNav.classList.toggle('active');
});

// Close navigation when close button is clicked
closeBtn.addEventListener('click', function() {
    headerNavigation.classList.remove('active');
});
