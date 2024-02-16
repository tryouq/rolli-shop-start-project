console.log('cartPrice is work');

function cartPrice(){
    const cartWrapper = document.querySelector('.cart-wrapper');
    //находим все селекторы предметов корзине
    const itemInBuscket=document.querySelectorAll('.cart-item');

    const totalPrice = document.querySelector('.total-price')

    let Summa_price = 0;

    //Будем проходить коллекцию и считать
    itemInBuscket.forEach(function(item){
        const kol_vo_EL = item.querySelector('.items__current');
        const priceEl = item.querySelector('.price__currency');

        const currentPrice = parseInt(kol_vo_EL.innerText) * parseInt(priceEl.innerText);
        Summa_price = Summa_price + currentPrice;
    })

    totalPrice.innerText = Summa_price;


}