import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    create     : function() {
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
  }
});
