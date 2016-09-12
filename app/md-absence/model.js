import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

// an employee canbe absent more than one
export default DS.Model.extend({
	employee: belongsTo('md-employee', {
		async: false
	}),
	properties: attr(), // ex: [{startDate, endDate}],
	similarities: hasMany('md-similarity', {
		async: false
	})
});
