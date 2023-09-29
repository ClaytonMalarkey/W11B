function displayCart() {
    let cookie = Cookies.get('cart');
    let cart = [];
    if(cookie){
        cart=JSON.parse(cookie);
    }
    console.log(cart);
    // const cart = Cookies.get('cart') || [];
    const cartDiv = document.getElementById('cart');
    // cartDiv.innerHTML = '';

    if (cart.length === 0) {
        cartDiv.innerHTML = 'Your cart is empty.';
        return;
    }

    // console.log(cart);

    // const cartArr = Object.keys(cart);

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="100">
            <span>${item.name} - $${item.price}</span>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartDiv.appendChild(itemDiv);
    });
}

function removeFromCart(name) {
    const cart = Cookies.get('cart') || [];
    const updatedCart = cart.filter(item => item.name !== name);
    Cookies.set('cart', updatedCart);
    displayCart();
}

function clearCart() {
    Cookies.remove('cart');
    displayCart();
}

displayCart();
