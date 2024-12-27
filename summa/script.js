// Add active class to nav items
document.querySelectorAll('.nav-items li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.nav-items li.active')?.classList.remove('active');
        item.classList.add('active');
    });
});

// Search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', (e) => {
    console.log('Searching for:', e.target.value);
});

// Logout button
document.querySelector('.logout-btn').addEventListener('click', () => {
    console.log('Logging out...');
});

// Book Now button
document.querySelector('.book-now-btn').addEventListener('click', () => {
    console.log('Opening booking modal...');
});

// Star rating functionality for "My Progress" section
document.querySelectorAll('.progress-card').forEach(card => {
    const stars = card.querySelectorAll('.rating .fa-star, .rating .far-star');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach((s, i) => {
                s.classList.toggle('fas', i <= index);
                s.classList.toggle('far', i > index);
            });
            console.log(`Rated ${index + 1} stars for ${card.querySelector('h3').textContent}`);
        });
    });
});
