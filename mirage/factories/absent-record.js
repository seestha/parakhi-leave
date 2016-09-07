import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
  return `Absence Record ${i+1}`
},
desc : `this is absence record`
});
