const link = document.querySelector('#link')

link.addEventListener('click',function(event) {
    let userText = prompt('Введите текст');
    this.textContent = userText; 
    link.preventDefault();
    
  }
)
