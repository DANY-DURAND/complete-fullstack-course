const btn = document.querySelectorAll('.drum');


btn.forEach(element => {
    
    element.addEventListener('click',handleClick)
});

function handleClick(){
    alert('I got clicked!');
}


