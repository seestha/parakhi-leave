import { Model , belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  absentRecordId : belongsTo('absent-record')
});
