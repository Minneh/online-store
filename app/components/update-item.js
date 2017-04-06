import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  // actions
  actions: {
    updateForm(){
      this.set('updateForm', true);
    },

    update(item){
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        cost: this.get('cost'),
        image: this.get('image')
      };
      this.set('updateForm', false);
      this.sendAction('update', item, params);
    }
  }
});
