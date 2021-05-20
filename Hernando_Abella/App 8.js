const boton = document.querySelector('button'),
body = document.querySelector('body'),
colors = ['red','green','blue','yellow','pink','purple'];

body.style.background = 'violet';
boton.addEventListener('click',changeBackground);

function changeBackground(){
    const colorIndex =parseInt(Math.random()* colors.length)
    body.style.backgroundColor = colors[colorIndex]
}
