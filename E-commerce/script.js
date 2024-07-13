// JavaScript for basic interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Toggle account icon based on login status
    const accountIcon = document.querySelector('.fa-user');
    const loggedIn = false; // Change this based on actual login status

    if (!loggedIn) {
        accountIcon.style.display = 'none';
    } else {
        accountIcon.style.display = 'inline-block';
    }

    // Add event listeners for add to cart buttons
    const addToCartButtons = document.querySelectorAll('#categories button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart');
        });
    });

    // Implementing a simple hover effect on categories
    const categoryItems = document.querySelectorAll('#categories .category-item');

    categoryItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            addToCart(productId);
            alert('Item added to cart');
        });
    });

    function addToCart(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || {};
        cart[productId] = (cart[productId] || 0) + 1; // Increment quantity
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});

