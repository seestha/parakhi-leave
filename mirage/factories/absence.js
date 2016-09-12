import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {return `${i+1}`},
  employeeId: 2,
  properties: [{
    category: 'startDate',
    name: new Date()
  }, {
    category: 'endDate',
    name: new Date()
  }, {
    category: 'reason',
    name: 'i just wanna to relax'
  }],
  similarities: []
});
