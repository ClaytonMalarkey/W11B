function addToCart(name, image, price) {
    let cookie = Cookies.get('cart');
    let cart = [];
    if(cookie){
        cart=JSON.parse(cookie);
    }
    console.log(cart);

    cart.push({ name, image, price });
    
    // JSON.stringify(cart);

    console.log(cart);  
    Cookies.set('cart', JSON.stringify(cart));
}

// You can add more products and details here.
