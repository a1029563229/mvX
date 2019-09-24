import binder from './binder';

let list = [];
function setList(state) {
  list = state.todoList;
  console.log(`model list: ${list}`);
}
binder.setModelUpdater(setList);