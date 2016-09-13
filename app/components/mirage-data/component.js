import Ember from 'ember';

export default Ember.Component.extend({
  keyword:'',
  categoryList:[],
  init:function(){
    this._super.apply(this, arguments);
    this.set('categoryList',[]);
    var _this = this;
    let property = this.get('property');
    property.forEach(function(prop){
      let category = prop.get('data').properties.getEach('category');
      _this.set('categoryList',category);
      return false;
    });
    // console.log('pp',property);
  },
  actions:{
    searchEmployee: function(){
      this.sendAction('searchText',this.get('keyword'));
    }
  }
});
