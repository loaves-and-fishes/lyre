import DS from 'ember-data';

const {
  attr,
  belongsTo
} = DS;

export default DS.Model.extend({
  title: attr('string'),
  content: attr('string'),
  book: belongsTo('book', { inverse: 'songs' })
});
