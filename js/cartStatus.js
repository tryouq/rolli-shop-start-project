console.log("cartStatus is ready");

function cartStatus(){
    console.log("cartStatus is workd");

    const cartWrapper = document.querySelector('.cart-wrapper');
    
    const cartEmptyNull = document.querySelector('[data-cart-empty]');
    //будем искать с помощью boostrap можно добавить none и эллемент скроется

    const oformZakaz = document.querySelector('#order-form');
    
    //проверяем кол-во эл в корзине, выше на 4 строки, просто нашли корзину
    if(cartWrapper.children.length>0){  
        //добовляем в класс ноне через бустрап, и скрываем эллемент
        cartEmptyNull.classList.add('none');
        oformZakaz.classList.remove('none');
    } else {
        cartEmptyNull.classList.remove('none');
        oformZakaz.classList.add('none');
    }
}