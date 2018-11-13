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
