// Add tast modal
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

// Edit task modal
const editTaskButton = document.querySelector(".todolist__task-button_edit-task");
const editTaskCloseButton = document.querySelector(".edit-task__close-button");
const editTaskBlock = document.querySelector(".edit-task");

let openingModal;
editTaskButton.addEventListener("click", function(){
    toggleModal(`${this.classList[0]}~.edit-task`);
    openingModal = `${this.classList[0]}~.edit-task`;
});
editTaskCloseButton.addEventListener("click", function(){
    toggleModal(openingModal);
});
editTaskBlock.addEventListener("click", function (event) {
    if(event.target === event.currentTarget){
        toggleModal(openingModal);
    }    
});

function toggleModal(modalClass) {
    let modalBlock = document.querySelector(`.${modalClass}`);
    modalBlock.classList.toggle("open-modal");
}