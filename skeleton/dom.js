// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo', done:false },
    { id: -2, description: 'second todo', done:true },
    { id: -1, description: 'third todo', done:false },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    todoNode.setAttribute("class",'one-item');
    // you will need to use addEventListener
    var dis = document.createElement("p");
    dis.innerHTML = "<p>"+todo.description+"</p>";
    dis.setAttribute("class",'dis');
    todoNode.appendChild(dis);
    // add span holding description
    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      event.preventDefault();
      update(newState);
    });
    deleteButtonNode.setAttribute("class",'button-delete');
    todoNode.appendChild(deleteButtonNode);
    // add markTodo button
    var checkdone = document.createElement('button');
    checkdone.setAttribute("id", todo.id);

    if (todo.done==true) {
      checkdone.style.backgroundColor='#000000';
     }
    checkdone.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(checkdone);
deleteButtonNode.setAttribute("class",'button-done');
    // add classes for css
    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
        event.preventDefault();
      // what is inside event.target?
      var description = event.target.description.value; // event.target ....
       var todofun=todoFunctions.addTodo(state,description);
      // hint: todoFunctions.addTodo
      update(todofun);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');
    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
    console.log(state);
  };

  if (container) renderState(state);
})();
