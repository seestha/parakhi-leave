import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {return `${i+1}`},
  name(i) {
  return `Employee ${i+1}`
  }
});
