import DS from 'ember-data';
import Ember from 'ember';

const {
  A,
} = Ember;

export default DS.Model.extend({
  name: DS.attr('string'),
  startAt: DS.attr('string'),
  endAt: DS.attr('string'),
  authorName: DS.attr('string'),
  includes: DS.attr('raw', {
    defaultValue() { return A([]); }
  }),
});
