console.log("busket is ready");
//во втором баскете еще реализуем суммирование эллементов

const cardWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function(event){
    //просто проверяем по любому атрибуту в ней(в карточке + в корзину)
    if(event.target.hasAttribute('data-cart')){
        //ищем родителя, у которого в классе есть кард
        const card = event.target.closest('.card');

        //собираем данные с товара
        const producInfo = {
            id: card.dataset.id,
            //находим по классу, имени класса!!! и получает изображение
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemInBox: card.querySelector('.text-muted').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            count: card.querySelector('[data-counter]').innerText,
        }
        console.log(producInfo);

        //проверяем есть ли такой товар в корзине
        const itemInCard = cardWrapper.querySelector(`[data-id="${producInfo.id}"]`);

        //есть ли товар в корзине
        if(itemInCard!=null){
            const counterEl = itemInCard.querySelector('[data-counter]');
            counterEl.innerText = parseInt(counterEl.innerText) + parseInt(producInfo.count);
            
        } else{
            //если товара нет в корзине
            
        //передаем данные в корзину, исп ковычки для шаблонных строк, на необх места будем делать подстановку
        const cartItemHTML = `<div class="cart-item" data-id="${producInfo.id}">
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img src="${producInfo.imgSrc}" alt="">
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${producInfo.title}</div>
                <div class="cart-item__weight">${producInfo.itemInBox} / ${producInfo.weight}</div>

                <!-- cart-item__details -->
                <div class="cart-item__details">
                    <!-- Счетчик -->
                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">${producInfo.count}</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__currency">${producInfo.price}</div>
                    </div>

                </div>
                <!-- // cart-item__details -->

            </div>
        </div>
        </div>`;
        //отобразим в корзине, beforeend будет вставляться в конец
        cardWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }
        //Сбрасываем счетчик после добовления в корзину
        card.querySelector('[data-counter]').innerText= '1';
    }
})