const inputsCheckbox = document.querySelectorAll('.container-custom-checkbox input'),
    ingredients = document.querySelectorAll('.current-pizza-item'),
    totalAmount = document.querySelector('.total-amount>.summa'),
    orderBtn = document.querySelector('.tupical-btn'),
    modalWindow = document.querySelector('.modal-window'),
    submitBtn = document.querySelector('.modal-window__submit-btn');

    // Добавление ингридиентов в пиццу / Additing ingredients to pizza
    
    const addIngredients = checkboxes => {
        const nodesArray = Array.from(checkboxes);
        const ingredientsArray = Array.from(checkboxes);
        ingredientsArray.slice(0, 2);

        for(let node of checkboxes) {
            node.addEventListener('click', event => {
                event.target.parentNode.classList.toggle('active');
                const index = nodesArray.indexOf(event.target);
                ingredientsArray[index].classList.toggle('active');
            })
        }
    }

    addIngredients(inputsCheckbox);

    // добавляем напитки
const addDrinks = drinkItems => {}











