import Ember from 'ember';

export function pluralize(params) {
  var inflector = Ember.Inflector.inflector;

  console.log(params);
  return params[1] === 1 ? params[0] : inflector.pluralize(params[0]);
}

export default Ember.Helper.helper(pluralize);
