const heading = document.querySelector("h1")
heading.innerHTML = "Good Bye!";
heading.style.color = "red";
heading.classList.add('huge')

const input = document.querySelector('input');
input.click();

const listItem = document.querySelector('ul').lastElementChild;

listItem.innerHTML = "Dany";

// const lists = document.getElementsByTagName('li');
const lists = document.getElementsByClassName('list')

console.log(lists);

const title = document.getElementById('title')
console.log(title);


const lis = document.querySelector("#title");

console.log(lis);

const link = document.querySelector('li a');
console.log(link);

// Quering
const links = document.querySelectorAll('#list item');
console.log(links);


const anchor = document.querySelector('li a');
anchor.style.color ='red';
anchor.style.fontSize= '2rem'

const btn =document.querySelector('button')
btn.style.backgroundColor= 'yellow';
btn.style.border ='none'
btn.style.padding = '1rem 2rem'

btn.classList.add('invisible');
btn.classList.remove('invisible')