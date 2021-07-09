let tasksList;
if(localStorage.tasksList !== undefined){
    tasksList == localStorage.tasksList;
} else{
    tasksList = [];
}

// Add task modal
let openingModal;

const addNewTaskButton = document.querySelector(".todolist__button");
const addNewTaskCloseButton = document.querySelector(".add-new-task__close-button");
const addNewTaskBlock = document.querySelector(".add-new-task");

addNewTaskButton.addEventListener("click", function(){
    toggleModal("add-new-task");
});
addNewTaskCloseButton.addEventListener("click", function(){
    toggleModal("add-new-task");
});
addNewTaskBlock.addEventListener("click", function (event) {
    if(event.target === event.currentTarget){
        toggleModal("add-new-task");
    }    
});

const addNewTaskForm = document.querySelector(".add-new-task__form");
const addNewTaskButtonCancel = document.querySelector(".add-new-task__button_cancel");

addNewTaskForm .addEventListener("submit", function(event) {
    event.preventDefault();
    let input = document.querySelector(".add-new-task__input");
    let error = document.querySelector(".add-new-task__error");
    if(!input.value.trim()){
        error.innerHTML = "Введите заголовок!";
        return;
    } else{
        error.innerHTML = "";
    }
})

addNewTaskButtonCancel.addEventListener("click", function() {
    toggleModal("add-new-task");;
});

// Edit task modal
const editTaskButtons = document.querySelectorAll(".todolist__task-button_edit-task");
const editTaskCloseButton = document.querySelector(".edit-task__close-button");
const editTaskBlock = document.querySelector(".edit-task");

editTaskButtons.forEach(item => {
    item.addEventListener("click", function(){
        openingModal = `edit-task`;
        toggleModal(openingModal);
    });
});
editTaskCloseButton.addEventListener("click", function(){
    toggleModal(openingModal);
});
editTaskBlock.addEventListener("click", function (event) {
    if(event.target === event.currentTarget){
        toggleModal(openingModal);
    }    
});

// Delete task modal
const deleteTaskButtons = document.querySelectorAll(".todolist__task-button_delete-task");
const deleteTaskCloseButton = document.querySelector(".delete-task__close-button");
const deleteTaskBlock = document.querySelector(".delete-task");

deleteTaskButtons.forEach(item => {
    item.addEventListener("click", function(){
        openingModal = `delete-task`;
        toggleModal(openingModal);
    });
});
deleteTaskCloseButton.addEventListener("click", function(){
    toggleModal(openingModal);
});
deleteTaskBlock.addEventListener("click", function (event) {
    if(event.target === event.currentTarget){
        toggleModal(openingModal);
    }    
});

function toggleModal(modalClass) {
    let modalBlock = document.querySelector(`.${modalClass}`);
    modalBlock.classList.toggle("open-modal");
}

// Create new task function
function createTask(title, deskription, id) {
    let todolistList = document.querySelector(".todolist__list");
    let block = `<li class="todolist__task">
    <div class="todolist__content">
        <input type="checkbox" name="done" id="task-checkbox-${id}" class="todolist__done-input">
        <label for="task-checkbox-${id}" class="todolist__done-button"></label>
        <h3 class="todolist__content-title">${title}</h3>
        <p class="todolist__content-text">${deskription}</p>
    </div>
    <div class="todolist__task-buttons">
        <button class="todolist__task-button todolist__task-button_edit-task">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 11.8771V15.0021H3.125L12.3417 5.78542L9.21667 2.66042L0 11.8771ZM14.7583 3.36875C15.0833 3.04375 15.0833 2.51875 14.7583 2.19375L12.8083 0.24375C12.4833 -0.08125 11.9583 -0.08125 11.6333 0.24375L10.1083 1.76875L13.2333 4.89375L14.7583 3.36875Z" fill="#2A5B94"/>
            </svg>
            изменить
        </button>
        <button class="todolist__task-button todolist__task-button_delete-task">
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00008 13.8333C1.00008 14.75 1.75008 15.5 2.66675 15.5H9.33342C10.2501 15.5 11.0001 14.75 11.0001 13.8333V3.83333H1.00008V13.8333ZM11.8334 1.33333H8.91675L8.08342 0.5H3.91675L3.08342 1.33333H0.166748V3H11.8334V1.33333Z" fill="black"/>
            </svg>                                    
        </button>
    </div>
</li>`;
    todolistList.innerHTML += block;
}