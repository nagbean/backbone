$(document).ready(function() {

  var TodoItem = Backbone.Model.extend({
    defaults: {
    	description: '...',
    	status: 'uncompleted'
    }
  });

  var TodoView = Backbone.View.extend({
  	model: TodoItem,

    tagName: 'li', 
    className: 'status',

    template: _.template('<%= description %>'),

    render: function() {
      var attributes = this.model.toJSON();
      this.$el.html(this.template(attributes));
    } 
  });

  var todoItem = new TodoItem();
  var todoView = new TodoView({model: todoItem});

  todoView.render();

  $('ul').html(todoView.el);

  console.log(todoView.model.get('status'));
});