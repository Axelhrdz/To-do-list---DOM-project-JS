console.log(localStorage)
// Getting elements
const form = document.getElementById('form');
const input = document.getElementById('inputTask');
const mainContainer = document.querySelector('.main--container');
const ulContainer = document.querySelector('.ulContainer');
const clearTest = document.getElementById('clearTest');
// const checkmark = document.getElementById('check');
// const nullSubmitAlert = document.querySelector('.nullSubmitAlert');
const deleteOpt = document.querySelector('.deleteOpt');
const checkOpt = document.querySelector('.checkOpt');



loadItems();

console.log(form);
console.log(input);
console.log(ulContainer);

//Clear localStorage and DOM elements
clearTest.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
})

deleteOpt.addEventListener('click', function(e){
    console.log(e);  //this wont't work since the deleteOpt it is dinamically created inside createElement function, find a workaround for tomorrow
})




//Adding Task
function addTask(){
    const task = input.value.trim();
    console.log(task);

    if(task){
        createElement(task);

        input.value = '';

        saveTask();
    }
}

// Submitting responses
form.addEventListener('submit', function(e){
    e.preventDefault();

    addTask();
});



//Creating element with the task
function createElement(task){
    const liItem = document.createElement('li');
    liItem.classList.add("liItem");
    liItem.textContent = task;


    //List items buttons creation
    const optionContainer = document.createElement('div');
    optionContainer.classList.add('optionsContainer');

    const deleteOpt = document.createElement('span');
    deleteOpt.textContent = 'Delete';
    deleteOpt.classList.add('deleteOpt');
        
    const checkOpt = document.createElement('span');
    checkOpt.textContent = 'Check';
    checkOpt.classList.add('checkOpt');


    //Appending buttons to its div container
    optionContainer.appendChild(deleteOpt);
    optionContainer.appendChild(checkOpt);

    liItem.appendChild(optionContainer);



    ulContainer.appendChild(liItem);

    console.log(liItem);
}



//Saving information in local Storage
function saveTask(){
    let tasks = [];

    ulContainer.querySelectorAll('li').forEach(item => {
        tasks.push(item.textContent.replace('Delete', ' ').replace('Check', ' ').trim());

        // console.log(tasks);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


//Function to load tasks, if existing localStorage data
function loadItems(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(item => createElement(item));
}