import { Model , belongsTo, hasMany	 } from 'ember-cli-mirage';

// an ansence record belongs to one employee
export default Model.extend({
   employee: belongsTo('employee'),
   similarity: hasMany('similarity')
});
