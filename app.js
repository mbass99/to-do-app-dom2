function onREady() {
    let id = 0; //declare let id of 0
    let toDos = [];
    const toDos = []; //todos array

    //create newtodo function from event listener
    const addToDoForm = document.getElementById('addToDoForm');

    function createNewToDo() { //newToDo Function
        //access text input for title
        const newToDoText = document.getElementById('newToDoText');
        //prevent empty to do item submission
        if (!newToDoText.value) {
            return;
        }
        //add todo using push, assign value to title, create key initializedto false
        toDos.push({
            title: newToDoText.value,
            complete: false,
            id: id //create third value
        });

        newToDoText.value = ''; //clear input for text user 
        id++; //increment variable
        //render UI each time the state changes
        renderTheUI();
    }

    //build the render the ui function
    function renderTheUI() {
        //access the ul
        const toDoList = document.getElementById('toDoList');


        toDoList.textContent = ''; //set newli to empty string

        //use array forEach to render each todo as li in ul
        toDos.forEach(function (toDo) {
            //create ui for li and checkbox assign title tex tna dupdate dom
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            //add todo title text to li
            newLi.textContent = toDo.title;

            //create delete button
            const deletebutton = document.createElement('button');
            deletebutton.textContent = 'delete';

            //add event listener
            deletebutton.addEventListener('click', () => {
                toDos = toDos.filter(toDos => toDo.id != toDos.id);
                renderTheUI();
            })

            //update dom
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
            newLi.appendChild(deletebutton); //append delete button
        });
    }


    //adding newtodo event listener
    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
    });

    renderTheUI();
}

window.onload = function () {
    onREady();
}
