const dupFild = document.querySelector('#duplicateField');
const inpButton = document.querySelector('#ipt')
const key = document.querySelector('#but')

function enterText() {
dupFild.textContent = inpButton.value
}

function keyButton(){
console.log(inpButton.value)
inpButton.value =""
}

inpButton.addEventListener("keydown",enterText)
key.addEventListener('click', keyButton)
