const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', ()=>{
    alert('Служит для вывода информации в консоль');
})

const Alert = document.querySelector('#alert');

Alert.addEventListener('click', ()=>{
    alert('Диалоговое окно на экране')
})

const Prompt = document.querySelector('#prompt');

Prompt.addEventListener('click', ()=>{
    alert('Вызывает окно с вводом текста')
}) 