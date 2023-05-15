const testTextField = document.querySelector('#testTextField');

testTextField.addEventListener('click', (event) =>{
    event.preventDefault();
    const userText = prompt('Введите текст');
    testTextField.textContent = userText;
    
});
