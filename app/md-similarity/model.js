import DS from 'ember-data';

export default DS.Model.extend({
  path : DS.attr('string'),
  absences : DS.attr() // array<string>
});
