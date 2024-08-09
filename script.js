// Getting elements
const form = document.getElementById('form');
const input = document.getElementById('task');
const mainContainer = document.querySelector('.main--container');
const checkmark = document.getElementById('check');


console.log(form);
console.log(input);
console.log(checkmark);



//Submitting form and getting value of input
form.addEventListener('submit', function(e){
    e.preventDefault();

    console.log(input.value)

    if(!input.value){
        alert('please enter a value/text')
    } else{
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
    
    
        console.log(checkmark);
    }

    input.value = '';
})



//Delete items function
mainContainer.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);

    if(e.target.id === "delete"){
        console.log(e.target.parentElement.parentElement)


        e.target.parentElement.parentElement.remove()
        
    } 
})
