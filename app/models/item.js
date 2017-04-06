import DS from 'ember-data';

export default DS.Model.extend({
  // defining product objects
  name: DS.attr(),
  cost: DS.attr(),
  description: DS.attr(),
  image: DS.attr()
});
