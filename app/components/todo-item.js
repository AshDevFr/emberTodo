import Ember from 'ember';

export default Ember.Component.extend({
  tagName           : 'li',
  classNameBindings : ['isDone:completed', 'isEditing:editing'],
  isEditing         : false,
  actions           : {
    edit   : function() {
      this.toggleProperty('isEditing');
    },
    submit : function() {
      let todo = this.get('todo');
      if (todo.get('title') === '') {
        this.send('delete');
      } else {
        this.send('update', todo);
      }
      this.set('isEditing', false);
    },
    cancel : function() {
      let todo = this.get('todo');
      todo.rollback();
      this.set('isEditing', false);
    },
    update : function(todo) {
      todo.save();
    },
    delete : function() {
      let todo = this.get('todo');
      todo.destroyRecord();
    }
  },
  stateChanged: Ember.observer('todo.isDone', function() {
    let todo = this.get('todo');
    this.send('update', todo);
  })
});
