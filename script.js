// Getting elements
const form = document.getElementById('form');
const input = document.getElementById('task');


console.log(form);
console.log(input);



//Submitting form and getting value of input
form.addEventListener('submit', function(e){
    e.preventDefault();

    console.log(input.value)
})