import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {return `${i+1}`},
  employeeId:2,
  startDate:new Date(),
  endDate:new Date()
});
