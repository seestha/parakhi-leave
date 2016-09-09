import Ember from 'ember';

export default Ember.Component.extend({
  keyword:'',
  actions:{
    searchEmployee: function(){
      this.sendAction('searchText',this.get('keyword'));
    }
  }
});
