import observer from './observer';

let list = [];

function getList() {
  return list;
}

function initList(listData) {
  list = listData;
  observer.hooks.init.call(listData);
}

function addItem(item) {
  list.push(item);
  observer.hooks.add.call(item);
}

function removeItem(index) {
  list.splice(index, 1);
  observer.hooks.remove.call(index);
}

export {
  getList,
  initList,
  addItem,
  removeItem
}