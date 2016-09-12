import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	namespace: '/api',
	pathForType( /* type */ ) {
    	return 'absences';
  	}
});
