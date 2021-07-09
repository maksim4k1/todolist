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
})

function toggleModal(modalClass) {
    let modalBlock = document.querySelector(`.${modalClass}`);
    modalBlock.classList.toggle("open-modal");
}