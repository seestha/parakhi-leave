import DS from 'ember-data';
/*
	i used singularize because we use singular word in model
// ex: employee ( => md-employee)
// but the api return plural word in its payload object
// ex: employees (
									=> { data: [{
											type: "employees"
											...
											}] }
								)
*/
export default DS.JSONAPISerializer.extend({
	modelNameFromPayloadKey(payloadKey) {

     	return `md-${payloadKey.singularize()}`;
  }
});
