import Ember from 'ember';

export default Ember.Controller.extend({
  allAreDoneObserver : Ember.observer('allAreDone', function() {
    let isDone = this.get('allAreDone'),
        todos         = this.get('model');
    todos.forEach((todo) => {
      todo.set('isDone', isDone);
      todo.save();
    });
  })
});
