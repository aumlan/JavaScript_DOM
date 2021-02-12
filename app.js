// Get Element by ClassName
/*const item = document.getElementsByClassName('collection-item');
console.log(item);

item[2].style.color = 'red';

const itemlist = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(itemlist);*/

// Get Element by Tag
// querySelectorAll()
/*const items = document.querySelectorAll('ul li');
console.log(items);

items.forEach(item => {
    item.style.color = 'red';
    //item.textContent = 'hello';
});*/

//* Traverse
//children
let val;
const list = document.querySelector('ul.collection');

val = list.children[2];
let val2 = list.children[2].children[0];

//console.log(val2);


//Parent
let pp;
const list_item = document.querySelector('li.collection-item');

pp = list.parentElement;

console.log(pp);