/*
 =================================================================
 To use with a real rest server replace the code below by this one
 =================================================================

 import DS from 'ember-data';

 export default DS.RESTAdapter.extend({
 namespace: 'api'
 });


 */

import DS from 'ember-data';

export default DS.LSAdapter.extend({
  namespace: 'api'
});
