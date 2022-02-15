// function iPhoneQuantityButton(quantityButtonId) {
//     if (quantityButtonId == '') {

//     }

// }
function updateCartPrice() {
    // calculate sub total price
    let subTotalPrice = Number(document.getElementById('iPhone-11-price').innerText) + Number(document.getElementById('iPhone-case-price').innerText);
    // set subtotal price
    document.getElementById('sub-total-price').innerText = subTotalPrice;

    let tax = (subTotalPrice * 10) / 100;
    //set tax price
    document.getElementById('tax-price').innerText = tax;
    //set total price
    document.getElementById('total-price').innerText = tax + subTotalPrice;


}
// iPhone-11-plus-button
document.getElementById('iPhone-11-plus-button').addEventListener('click', function() {
    // get current quantity with number
    let iPhoneQuantity = Number(document.getElementById('iPhone-11-quantity').value);
    // increase it's quantity by 1
    ++iPhoneQuantity;
    // set new quantity value
    document.getElementById('iPhone-11-quantity').value = iPhoneQuantity;

    // set default price
    let iPhoneCurrentPrice = 1219;
    document.getElementById('iPhone-11-price').innerText = iPhoneCurrentPrice;
    // make total price according to quantity
    let totalIphonePrice = iPhoneQuantity * iPhoneCurrentPrice;
    // set total iphone price
    document.getElementById('iPhone-11-price').innerText = totalIphonePrice;
    //update cart price section
    updateCartPrice();



});
// iPhone-11-minus-button
document.getElementById('iPhone-11-minus-button').addEventListener('click', function() {
    // get current quantity with number
    let iPhoneQuantity = Number(document.getElementById('iPhone-11-quantity').value);
    if (iPhoneQuantity > 0) {
        //decrease it's quantity by 1
        --iPhoneQuantity;
        // set new quantity value
        document.getElementById('iPhone-11-quantity').value = iPhoneQuantity;

        // set default price
        let iPhoneCurrentPrice = 1219;
        // make total price according to quantity
        let totalIphonePrice = iPhoneQuantity * iPhoneCurrentPrice;
        // set total price
        document.getElementById('iPhone-11-price').innerText = totalIphonePrice;
        //update cart price section
        updateCartPrice();

    } else {
        alert('Input at least 0<=')
    }


});
// iPhone-case-plus-button
document.getElementById('iPhone-case-plus-button').addEventListener('click', function() {
    // get current quantity with number
    let iPhoneCaseQuantity = Number(document.getElementById('iPhone-11-case-quantity').value);
    // increase it's quantity by 1
    ++iPhoneCaseQuantity;
    // set new quantity value
    document.getElementById('iPhone-11-case-quantity').value = iPhoneCaseQuantity;

    // set default price
    let iPhoneCaseCurrentPrice = 59;
    document.getElementById('iPhone-case-price').innerText = iPhoneCaseCurrentPrice;
    // make total price according to quantity
    let totalIphoneCasePrice = iPhoneCaseQuantity * iPhoneCaseCurrentPrice;
    // set total iphone price
    document.getElementById('iPhone-case-price').innerText = totalIphoneCasePrice;

    //update cart price section
    updateCartPrice();

});
// iPhone-case-minus-button
document.getElementById('iPhone-case-minus-button').addEventListener('click', function() {
    // get current quantity with number
    let iPhoneCaseQuantity = Number(document.getElementById('iPhone-11-case-quantity').value);
    if (iPhoneCaseQuantity > 0) {
        //decrease it's quantity by 1
        --iPhoneCaseQuantity;
        // set new quantity value
        document.getElementById('iPhone-11-case-quantity').value = iPhoneCaseQuantity;

        // set default price
        let iPhoneCasePrice = 59;
        // make total price according to quantity
        let totalIphoneCasePrice = iPhoneCaseQuantity * iPhoneCasePrice;
        // set total price
        document.getElementById('iPhone-case-price').innerText = totalIphoneCasePrice;
        //update cart price section
        updateCartPrice();

    } else {
        alert('Input at least 0<=')
    }
});