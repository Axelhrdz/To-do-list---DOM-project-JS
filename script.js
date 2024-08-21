console.log(localStorage)
// Getting elements
const form = document.getElementById('form');
const input = document.getElementById('inputTask');
const mainContainer = document.querySelector('.main--container');
const ulContainer = document.querySelector('.ulContainer');
const clearTest = document.getElementById('clearTest');
// const checkmark = document.getElementById('check');
// const nullSubmitAlert = document.querySelector('.nullSubmitAlert');


loadItems();

console.log(form);
console.log(input);
console.log(ulContainer);

clearTest.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
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
    liItem.textContent = task;
    ulContainer.appendChild(liItem);

    console.log(liItem);
}



//Saving information in local Storage
function saveTask(){
    let tasks = [];

    ulContainer.querySelectorAll('li').forEach(item => {
        tasks.push(item.textContent.trim());

        // console.log(tasks);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


//Function to load tasks, if existing localStorage data
function loadItems(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(item => createElement(item));
}