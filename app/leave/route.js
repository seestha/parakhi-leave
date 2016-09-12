import Ember from 'ember';

const { RSVP, $ } = Ember;

export default Ember.Route.extend({
  model() {
    // return this.store.findAll('md-absence');
    return RSVP.hash({
      employees: this.store.findAll('md-employee'),
      absences: this.store.findAll('md-absence')
    });
  },
  setupController: function(controller, model) {
    this._super.apply(this, arguments);
    // controller.set('absentRecords',model.absences);
    debugger;
  },
  actions:{
    search:function(keyword){
      var controller = this.controller;
      $.ajax({
            url:"/api/absences/"+keyword,
            type: "GET",
            contentType: "application/json",
            dataType:"json",
        }).done(function(response) {
          console.log('response',response);
          controller.set('absentRecords',response);
        });
    }
  }
});
