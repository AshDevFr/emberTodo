import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    create             : function() {
      var title, todo;

      title = this.get('newTitle').trim();
      if (!title) {
        return;
      }

      todo = this.store.createRecord('todo', {
        title  : title,
        isDone : false
      });
      todo.save();

      this.set('newTitle', '');
    }
  },
  remaining: function() {
    let todos = this.get('model').filter((todo) => {
      return !todo.get('isDone');
    });
    return todos.length;
  }.property('model.length', 'model.@each.isDone')
});
