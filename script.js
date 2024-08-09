// Getting elements
const form = document.getElementById('form');
const input = document.getElementById('task');
const mainContainer = document.querySelector('.main--container');


console.log(form);
console.log(input);



//Submitting form and getting value of input
form.addEventListener('submit', function(e){
    e.preventDefault();

    console.log(input.value)


    const newTask = document.createElement("div.test");
    newTask.classList.add("test");
    console.log(newTask);

    newTask.innerHTML = 
    `<span>${input.value}</span>
        <div class="test--icons">
            <ion-icon name="trash-sharp" id="delete"></ion-icon>
            <ion-icon name="checkmark-circle-sharp" id="check"></ion-icon>
        </div>`

     mainContainer.appendChild(newTask); 






    input.value = '';
})