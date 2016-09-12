import DS from 'ember-data';

/**
 * API used to get a list of employee: <host>/api/employees
 */
export default DS.JSONAPIAdapter.extend({
	namespace: 'api',
	pathForType( /* type */ ) {
    	return 'employees';
  	}
});
