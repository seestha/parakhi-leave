import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  desc(i) {
  return `Lorem comment ${i}`
  }
});
