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

// Edit task modal
const editTaskButton = document.querySelector(".todolist__task-button_edit-task");
const editTaskCloseButton = document.querySelector(".edit-task__close-button");
const editTaskBlock = document.querySelector(".edit-task");

editTaskButton.addEventListener("click", function(){
    openingModal = `${this.classList[0]}~.edit-task`;
    toggleModal(openingModal);
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
const deleteTaskButton = document.querySelector(".todolist__task-button_delete-task");
const deleteTaskCloseButton = document.querySelector(".delete-task__close-button");
const deleteTaskBlock = document.querySelector(".delete-task");

deleteTaskButton.addEventListener("click", function(){
    openingModal = `${this.classList[0]}~.delete-task`;
    toggleModal(openingModal);
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