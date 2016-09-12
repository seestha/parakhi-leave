import Ember from 'ember';

// const { RSVP, $ } = Ember;

export default Ember.Route.extend({
  model() {
    return this.store.findAll('md-absence');
    // return RSVP.hash({
    //   employees: $.getJSON('/api/employees'),
    //   absences: $.getJSON('/api/absences/?id=1')
    // });
  },
  setupController: function(controller, model) {
    this._super.apply(this, arguments);
  },
  actions:{
  //   search:function(keyword){
  //     console.log('keyword',keyword);
  //     $.ajax({
  //           url:"/api/absences/?name="+keyword,
  //           type: "GET",
  //           contentType: "application/json",
  //           dataType:"json",
  //       }).done(function(response) {
  //         console.log('response',response);
  //       });

  //     console.log('employee',employee);
  //   }
  }
});
