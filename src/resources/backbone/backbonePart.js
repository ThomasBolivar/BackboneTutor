var Todo = Backbone.Model.extend({});
// Затем мы можем создать собственный экземпляр
// модели задачи без каких-либо значений:
var todo1 = new Todo();
// В журнал: {}
console.log(JSON.stringify(todo1));
// или с произвольными данными:
var todo2 = new Todo({
    title: 'Check the attributes of both model instances in the console.',
    completed: true
});
// В журнал: {"title":"Check the attributes of both model
// instances in the console.","completed":true}
console.log(JSON.stringify(todo2));