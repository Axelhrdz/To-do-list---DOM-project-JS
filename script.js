console.log(localStorage)
// Getting elements
const form = document.getElementById('form');
const input = document.getElementById('task');
const mainContainer = document.querySelector('.main--container');
const checkmark = document.getElementById('check');
const nullSubmitAlert = document.querySelector('.nullSubmitAlert');


console.log(form);
console.log(input);
console.log(checkmark);
console.log(nullSubmitAlert);
// console.log(nullSubmitAlert.style.opacity);
// console.log(localStorage);

//Initialize task array
const taskArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
console.log(taskArray);
let idCounter = 0;



//Submitting form and getting value of input ------------------

form.addEventListener('submit', function(e){
    e.preventDefault();

    console.log(input.value)

    if(!input.value){
        // alert('please enter a value/text')

        nullSubmitAlert.style.opacity = '1';
        setTimeout(fadeout, 800);

        function fadeout(){
            nullSubmitAlert.style.opacity = '0';
        }
    } else{
        idCounter++;
        createTaskItem = function(){
            // console.log(input.value);
            let itemSubmitted = 
            {
                task: input.value,
                id: idCounter
            }

            taskArray.push(itemSubmitted);
            // console.log(taskArray);
            
            console.log(itemSubmitted);
            // console.log(idCounter);
        };
        createTaskItem();

        localStorage.setItem("tasks", JSON.stringify(taskArray));
        console.log(JSON.parse(localStorage.getItem("tasks")));
        // console.log(localStorage);


        const newTask = document.createElement("div");
        newTask.classList.add("test");
        console.log(newTask);
    

        taskArray.forEach(task => {
            console.log(task);        //NOTE: Need to check why the task in the DOM does not stay there when refreshing

            newTask.innerHTML =
            `<span>${task.task}</span>
                <div class="test--icons">
                    <ion-icon name="trash-sharp" id="delete"></ion-icon>
                    <ion-icon name="checkmark-circle-sharp" id="check"></ion-icon>
                </div>`

            mainContainer.appendChild(newTask); 
        });

        // newTask.innerHTML = 
        // `<span>${taskArray[0].task}</span>
        //     <div class="test--icons">
        //         <ion-icon name="trash-sharp" id="delete"></ion-icon>
        //         <ion-icon name="checkmark-circle-sharp" id="check"></ion-icon>
        //     </div>`
    
        //  mainContainer.appendChild(newTask); 
    
    
        // console.log(checkmark);
    }

    input.value = '';

});





//Delete items function ------------------
mainContainer.addEventListener('click', function(e){
    // console.log(e);
    // console.log(e.target);

    if(e.target.id === "delete"){
        // console.log(e.target.parentElement.parentElement)


        e.target.parentElement.parentElement.remove()
        
    } 
});

//Check-mark function ------------------
mainContainer.addEventListener('click', function(e){
    // console.log(e);
    // console.log(e.target);

    if(e.target.id === "check"){
        const checkIcon = e.target;
        console.log(checkIcon);
        // console.log(e.target.parentElement.parentElement);
        let = parentTextContainer = e.target.parentElement.parentElement;
        console.log(parentTextContainer);
        // console.log(parentTextContainer.firstChild);

       const textChild = parentTextContainer.firstChild;
       console.log(textChild);

       // changing text style to cross text 
       console.log(textChild.classList)
       textChild.classList.toggle("sucess");



        //changing check button to green
        checkIcon.classList.toggle("checkColor");

        //changin icon name
        checkIcon.getAttribute("name");

        console.log(true);

    } else {
        // console.log(false);
    }
})
