import Ember from 'ember';

export default Ember.Controller.extend({
  actions   : {
    create         : function() {
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
    },
    clearCompleted : function() {
      var completed = this.get('done');
      completed.invoke('destroyRecord');
    }
  },
  remaining : function() {
    let todos = this.get('model').filter((todo) => {
      return !todo.get('isDone');
    });
    return todos.length;
  }.property('model.length', 'model.@each.isDone'),
  done      : function() {
    let todos = this.get('model').filter((todo) => {
      return todo.get('isDone');
    });
    return todos;
  }.property('model.length', 'model.@each.isDone'),
  hasDone   : Ember.computed('done', function() {
    return this.get('done').length > 0;
  })
});
