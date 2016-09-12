import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
	modelNameFromPayloadKey(payloadKey) {

     	return `md-${payloadKey.singularize()}`;
  }
});
