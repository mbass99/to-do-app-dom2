function onReady() {

    //declare variable
    const toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');
    //set to 0    
    let id = 0;

    function createNewToDo() {
        const newToDoText = document.getElementById('newToDoText');
        if (!newToDoText.value) {
            return;
        }

        //increment id variable
        id++;
        toDos.push({
            title: newToDoText.value,
            complete: false,
            //add third variable of id
            id: id
        });
        newToDoText.value = '';

        renderTheUI();

    }

    function renderTheUI() {
        const toDoList = document.getElementById('toDoList');

        toDoList.textContent = '';

        toDos.forEach(function (toDo) {
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";

            newLi.textContent = toDo.title;


            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);

            // create delete button
            let removeItem = document.createElement('button')
            removeItem.type = "button";
            removeItem.textContent = "Remove";

            newLi.textContent = toDo.title;
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
        });
        // add function to delete button
        removeItem.addEventListener('click', event => {
            toDos = toDos.filter(function (el) {
                return el.id !== toDo.id;
                renderTheUI()
            });

        });
    }
    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
    });
    renderTheUI();
}

window.onload = function () {
    onReady();
};
