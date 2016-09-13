import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {return `${i+1}`},
  path : "startDate",
  absences : [
     "Arjun Yonjan",
     "Suman Kumar",
     "Roji Maharjan",
     "Ajay Shresta"
  ]
});
