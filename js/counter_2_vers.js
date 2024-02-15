console.log("Counter second vers JS is work");
//счетчик для всех товаров, просто первая версия, но для всех позиций

//Будем отслеживать любой клик на стр, потом определять где был, искать родителя, и от него изменять значение   

//Отслеживание клика на странице, event показывает где и на что был совершен клик, а ивент таргет, выводит куда конкретно по эл клик
window.addEventListener('click',function(event){
    
    let counter;
    //это ищет data-action!!!
    if(event.target.dataset.action==='plus'||event.target.dataset.action==='minus'){    
        //находим родителя а потом переходим к значению(в нашем случае), тк по классу, то точка, как и в css
        const counterWraper = event.target.closest('.counter-wrapper');
        
        //теперь наъодим класс где значение, то есть внутри родителя
        counter = counterWraper.querySelector('[data-counter]');
    }
    
    //датабасет переводит к эл, а актион это по типу класса, выводит только те атрибуты где есть data-action
    if (event.target.dataset.action==='plus'){
        counter.innerText = ++counter.innerText;
    }
    else if (event.target.dataset.action==='minus'){
        if(parseInt(counter.innerText)>1){
            counter.innerText = --counter.innerText;
        }
    }
});