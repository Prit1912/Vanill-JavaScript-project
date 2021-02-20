// selector

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

// event listner

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filtertodo)

// function
function addTodo(event){
// prevent form from submitting
event.preventDefault();
// create todo div
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');
// create li
const todoNew = document.createElement('li');
todoNew.innerText = todoInput.value;
todoNew.classList.add('todo-item');
todoDiv.appendChild(todoNew);
// check mark button
const completedButton = document.createElement('button');
completedButton.innerHTML = "<i class = 'fas fa-check'></i>"
completedButton.classList.add('complete-button');
todoDiv.appendChild(completedButton);
// trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = "<i class = 'fas fa-trash'></i>"
trashButton.classList.add('trash-button');
todoDiv.appendChild(trashButton);
// append to todo list
todoList.appendChild(todoDiv);
todoInput.value = "";
}


function deleteCheck(e){
    // console.log(e.target)
    const item = e.target;
    if(item.classList[0] === 'trash-button'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){    // after comoplleting the transition element wiill be removed
            todo.remove();
        })
    }

    if(item.classList[0] === 'complete-button'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


function filtertodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'All':
                todo.style.display = 'flex';
                break;
            case 'Completed':
                if(todo.classList.contains("completed")){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
            case 'Uncompleted':
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
        }
    })

}