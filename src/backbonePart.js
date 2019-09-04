var User = Backbone.Model.extend({

    initialize: function(){
        console.log('This model has been initialized.');
        this.on('change', function(){
            console.log('- Values for this model have changed.');
        });
    }
});
User.validate = function(attrs) {
    if (!attrs.firstName) {
        return 'I need your firstName';
    }};

var user = new User({
    firstName: 'Thomas',
    lastName: 'Bolivar'
});
var user2 = new User({
   firstName:"John",
    lastName: "Doe",
});
var user3 = new User({
    firstName:"Denis",
    lastName : "Lashtur",
});
console.log(user.get("firstName"));
console.log(JSON.stringify(user));
user.set('firstName','John');
console.log(JSON.stringify(user));

/**
 * Changing multiple attributes with .set
 */
user.set({
    firstName: 'Lores',
    lastName: 'Jose'
});
console.log(JSON.stringify(user));

var SimpleCollection = Backbone.Collection.extend({});
var scol = new SimpleCollection();
scol.add(user);
scol.add(user2);
scol.add(user3);


var UserContent = Backbone.View.extend({
    initialize : function(){
        this.model.on('change',this.render,this)
    },
render : function () {
    this.$el.html(this.model.get('firstName') + " " + this.model.get('lastName'));
    return this
}
});

var contentPanel = new UserContent ({el : "#container", model : user});
console.log(contentPanel.el);
contentPanel.render();

setTimeout(function(){
   user.set({firstName : "Thomas",lastName : "Bolivar"})
},1000);
