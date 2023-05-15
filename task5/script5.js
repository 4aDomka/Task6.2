const button = document.querySelector('button');
const textInput = document.querySelector('#textInput');
const duplicateField = document.querySelector('#duplicateField');


textInput.addEventListener('input', function(){
    duplicateField.textContent = textInput.value;
});

button.addEventListener('click', (event) =>{
    event.preventDefault();
    console.log(textInput.value);
    textInput.value = '';
    duplicateField.textContent = '';
});
