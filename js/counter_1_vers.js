console.log("Counter JS is work");

/*Находим кнопку - около товара*/
const btn_minus = document.querySelector('[data-action="minus"]');

/*Находим кнопку + около товара*/
const btn_plus = document.querySelector('[data-action="plus"]');

/*Находим кол-во на ролле*/
const counter = document.querySelector('[data-counter]');

/* Слушатель нажатий*/
btn_minus.addEventListener('click', function(){
    console.log('Minus is click');
    /*условие чтобы не было меньше единицы, и переводим к цел числу */
    if(parseInt(counter.innerText)>1){
        counter.innerText = --counter.innerText;
    }

});

btn_plus.addEventListener('click', function(){
    console.log('Plus is click');
    /*обращаемся к тексту внутри*/
    counter.innerText = ++counter.innerText;
});

