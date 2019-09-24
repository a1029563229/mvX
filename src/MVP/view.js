import KeyCode from 'rc-util/lib/KeyCode';
import $ from 'jquery';
import { addTodo, removeTodo } from './presenter';

function initTodoView(todoList) {
  const html = todoList.map(todoItem => `<li class="list-group-item">${todoItem}<span class="close">X</span></li>`).join("");
  $(".list-group").html(html);
}

function addTodoView(todoItem) {
  const todo = `<li class="list-group-item">${todoItem}<span class="close">X</span></li>`;
  $(".list-group").append(todo);
}

function removeTodoView(index) {
  const child = $(".list-group").children().eq(index);
  child.remove();
}

$("#input").keyup(e => {
  const { value } = e.target;
  const { keyCode } = e;
  if (keyCode === KeyCode.ENTER) {
    if (value === "") return;
    addTodo(value);
    $("#input").val("");
  }
});

$(".list-group").click(e => {
  if (e.target.className !== 'close') return;
  const index = $(e.target.parentNode).index();
  removeTodo(+index);
})

export {
  initTodoView,
  addTodoView,
  removeTodoView
}