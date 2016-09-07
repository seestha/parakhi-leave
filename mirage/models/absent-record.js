import { Model , hasMany } from 'ember-cli-mirage';

export default Model.extend({
  absentPersons: hasMany('absent-person')
});
