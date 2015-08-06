/**
 * Created by Zain Mustafa on 7/29/2015.
 */
angular.module('app.view', ['luegg.directives'])
    .controller('ViewController', function($db){
        var that = this;
        that.todos = [];
        $db.allDocs({include_docs: true}, function(err, response) {
            angular.forEach(response.rows, function(data) {
                that.todos.push(data.doc);
            });
        });
        //Add A TODO.
        that.addTodo = function() {
            var newTodo = {
                _id: new Date().toISOString(),
                text: that.todoText,
                done: false
            };
            that.todos.push(newTodo);
            that.todoText = '';
            $db.post(newTodo, function(err, res) {
                if (err) { console.log(err); }
                newTodo._id = res.id;
                newTodo._rev = res.rev;
            });
        };

        //Remove a TODO.
            that.removeDone = function(todo1) {
            var oldTodos = that.todos;
            that.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (todo.text != todo1.text) {
                    that.todos.push(todo);
                }
                else {
                    $db.remove(todo);
                }
            });
        };
        //Update Todo.
        /*that.updateTodo = function(todo) {
            /!*$db.put(todo);*!/
        };*/
    });
