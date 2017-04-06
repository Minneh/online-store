import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // return all items from db
    return this.store.findAll('item');
  }
});
