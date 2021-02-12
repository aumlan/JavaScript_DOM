// Get Element by ClassName
const item = document.getElementsByClassName('collection-item');
console.log(item);

item[2].style.color = 'red';

const itemlist = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(itemlist);

// Get Element by Tag
// querySelectorAll()
const items = document.querySelectorAll('ul li');
console.log(items);

items.forEach(item => {
    item.style.color = 'red';
    //item.textContent = 'hello';
});