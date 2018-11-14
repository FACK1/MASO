var test=require('tape')
var todoFunctions=require('./logic.js')

test('testing tape is working',function(t){
  t.equal(2,2,'2=2');
  t.end();
});

test('testing add-to-list',function(t){
  var todo=[];
  var actual=todoFunctions.addTodo(todo,"description 1");
  var expected=[{id:1, description:"description 1", done:false}];
  t.deepEqual(actual,expected,'should be add to list');
  t.end();
});

test('testing delete',function(t){
  var todo=[{id:1, description:"description 1", done:'false'}];
  var actual= todoFunctions.deleteTodo(todo,1);
  var expected=[];
  t.deepEqual(actual,expected,'delete obj');
  t.end();
});

test('testing markTodo',function(t){
  var todo=[{id:1, description:"description 1", done:false}];
  var actual=todoFunctions.markTodo(todo,1);
  var expected=[{id:1, description:"description 1", done:true}];
  t.deepEqual(actual,expected,'make mark');
  t.end();
});
