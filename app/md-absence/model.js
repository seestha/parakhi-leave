import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo} from 'ember-data/relationships';

export default DS.Model.extend({
	employee: belongsTo('md-employee'),
	startDate: attr('date'),
  	endDate: attr('date')
});
