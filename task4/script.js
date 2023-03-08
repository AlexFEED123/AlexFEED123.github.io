const link = document.querySelector('#link')

link.addEventListener('click',function(event) {
    const userText = prompt('Введите текст');
    this.textContent = userText; 
    link.preventDefault();
    
  }
)
