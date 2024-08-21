$(document).ready(function () {
    let cartItems = 0;
    let cart = [];

    function showToast(message) {
        const toast = $('#toast');
        toast.text(message);
        toast.addClass('show');
        setTimeout(function () {
            toast.removeClass('show');
        }, 3000);
    }

    $('.add-to-cart').on('click', function () {
        cartItems++;
        const productName = $(this).closest('.product-item').find('.product-name').text();
        cart.push(productName);
        $('.cart-items').text(cartItems);

        // Shows toast notification
        showToast(`${productName} has been added to your cart!`);

        // Added animation to the cart badge
        $('.cart-items').addClass('animated');
        setTimeout(function () {
            $('.cart-items').removeClass('animated');
        }, 300);
    });

    $('.cart-icon').on('click', function () {
        if (cart.length === 0) {
            alert("Your cart is empty.");
        } else {
            // Displays the cart modal
            $('#cart-modal').fadeIn();
    
            
            const cartList = $('#cart-list');
            cartList.empty(); // 
            cart.forEach(function (item, index) {
                cartList.append(`<li>${index + 1}. ${item}</li>`);
            });
        }
    });
    
    // Close the cart modal
    $('#close-modal').on('click', function () {
        $('#cart-modal').fadeOut();
    });

    // Checkout button action
    $('#checkout-button').on('click', function () {
        if (confirm("Proceed to checkout?")) {
            alert("Proceeding to checkout...");
            // Placeholder for checkout process
        }
        $('#cart-modal').fadeOut();
    });

    $('#search-button').on('click', function () {
        const searchTerm = $('#search-input').val().toLowerCase();
        let itemFound = false;
        $('.product-item').each(function () {
            const productName = $(this).find('.product-name').text().toLowerCase();
            if (productName.includes(searchTerm)) {
                $(this).show();
                itemFound = true;
            } else {
                $(this).hide();
            }
        });

        if (!itemFound) {
            alert("Item not found");
        }
    });

    $('.submit-review').on('click', function () {
        const reviewText = $('#review-text').val().trim();

        if (reviewText) {
            const reviewHTML = `
                <div class="review-item">
                    <p class="review-author">Anonymous</p>
                    <p class="review-text">${reviewText}</p>
                    <div class="rating">
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                    </div>
                </div>
            `;
            $('.reviews-list').append(reviewHTML);
            $('#review-text').val('');
        } else {
            alert("Please write a review before submitting.");
        }
    });

    $('.product-item a').on('click', function (event) {
        event.preventDefault();
    });
    
    $('.footer').on('click', function (event) {
        event.preventDefault();
        alert("This Page is Coming Soon!");
    });
});
