const consoleLog = document.querySelector('#consoleLog');
const AlertName = document.querySelector('#alert');
const promptName = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
});

AlertName.addEventListener('click', () =>{
    alert('Служит для оповещения пользователя');
});

promptName.addEventListener('click', () =>{
    alert('Служит для ввода информации');
});

