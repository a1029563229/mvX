import KeyCode from 'rc-util/lib/KeyCode';
import $ from 'jquery';
import binder from './binder';
import { addTodo, removeTodo } from './viewModel';

function updateTodoView(state) {
  const html = state.todoList.map(todoItem => `<li class="list-group-item">${todoItem}<span class="close">X</span></li>`).join("");
  $(".list-group").html(html);
}

binder.setViewUpdater(updateTodoView);

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
});