const input = document.querySelector('input');
const form = document.querySelector('form');
const ul = document.querySelector('ul');

const createToDo = toDo => {
  const li = document.createElement('li');
  li.innerText = toDo;
  ul.appendChild(li);
}

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  console.log(toDo);
  createToDo(toDo);
}

form.addEventListener('submit', onSubmit);