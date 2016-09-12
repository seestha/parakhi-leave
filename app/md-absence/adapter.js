import DS from 'ember-data';
import config from 'parakhi-leave/config/environment';
const {
	host
} = config.backend_settings;
/**
 * API used to get absence record list: <host>/api/absences
 */
export default DS.JSONAPIAdapter.extend({
	host,
	namespace: 'api',
	pathForType( /* type */ ) {
    	return 'absences';
  	}
});
