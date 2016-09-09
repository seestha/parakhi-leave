import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {return `${i+1}`},
  employeeId:2,
  startDate:"Fri Mar 25 2016 00:00:00 GMT+0545 (NPT)",
  endDate:"Wed Mar 30 2016 00:00:00 GMT+0545 (NPT)"
});
