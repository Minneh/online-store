import Ember from 'ember';

export default Ember.Component.extend({
  newItemForm: false,
  // actions
  actions: {
    newItem(){
      this.set('newItemForm', true);
    },

    saveItem(){
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        cost: this.get('cost'),
        image: this.get('image')
      };
      this.set('newItemForm', false);
      this.sendAction('saveItem', params);
    }
  }
});
