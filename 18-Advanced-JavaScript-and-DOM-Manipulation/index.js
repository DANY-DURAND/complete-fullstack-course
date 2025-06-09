const btn = document.querySelectorAll('button');


btn.forEach(element => {
    
    element.addEventListener('click',handleClick)
});

function handleClick(){
    alert('I got clicked!');
}