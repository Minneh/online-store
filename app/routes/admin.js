import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // return all items from db
    return this.store.findAll('item');
  },
  // actions
  actions: {
    saveItem(params){
      var newItem = this.store.createRecord('item', params);
      newItem.save();
      this.transitionTo('admin');
    },
    update(item, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          item.set(key,params[key]);
        }
      });
      item.save();
      this.transitionTo('admin');
    },
    destroyItem(item){
      if(confirm('Are you sure you want to delete this item?')){
        item.destroyRecord();
      }
      this.transitionTo('admin');
    }
  }
});
