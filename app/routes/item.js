import Ember from 'ember';

export default Ember.Route.extend({
  // model hook for a single item
  model(params){
    return this.store.findRecord('item', params.item_id);
  }
});
