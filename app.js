const li = document.createElement('li');
li.className = 'collection-item';
li.textContent = 'New Item';
document.querySelector('ul.collection').appendChild(li);

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove">'

li.appendChild(link);
console.log(li);