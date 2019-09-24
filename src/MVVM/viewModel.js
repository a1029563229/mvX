import binder from './binder';
import './view';
import './model';

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
    binder.setState({ todoList });
  }, 200);
}

function addTodo(item) {
  const todoItem = `Todo Controller ${item} ADD`;
  logger('add todo');
  
  // mock fetch data
  setTimeout(() => {
    const todoList = binder.state.todoList;
    binder.setState({ todoList: [...todoList, todoItem] });
  }, 200);
}

function removeTodo(index) {
  const todoList = [...binder.state.todoList];
  todoList.splice(index, 1);
  // mock fetch data
  setTimeout(() => {
    binder.setState({ todoList });
  }, 200);
}

fetchTodoList();

export {
  addTodo,
  removeTodo
}