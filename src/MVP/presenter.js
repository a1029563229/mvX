import observer from './observer';
import { initList, addItem, removeItem } from './model';
import { initTodoView, addTodoView, removeTodoView } from './view';

observer.hooks.init.tap('init', initTodoView);
observer.hooks.add.tap('add', addTodoView);
observer.hooks.remove.tap('remove', removeTodoView);

const list = [
  'Cras justo odio',
  'Dapibus ac facilisis in',
  'Morbi leo risus',
  'Porta ac consectetur ac',
  'Vestibulum at eros'
]

function logger(message) {
  console.log(message);
}

function fetchTodoList() {
  setTimeout(() => {
    // mock fetch data
    const todoList = list.map(item => item + 'By Controller');
    logger('init todo list');
    initList(todoList);
  }, 200);
}

function addTodo(item) {
  const todoItem = `Todo Controller ${item} ADD`;
  logger('add todo');
  
  // mock fetch data
  setTimeout(() => {
    addItem(todoItem);
  }, 200);
}

function removeTodo(index) {
  // mock fetch data
  setTimeout(() => {
    removeItem(index);
  }, 200);
}

fetchTodoList();

export {
  addTodo,
  removeTodo
}