export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
  */
  this.namespace = 'api';

  this.get('/employees');
  this.get('/similarities');
  this.get('/employees/:id');

  this.get('/employees/:id/absences', function(schema, request) {
    const employeeId = request.params.id;
    return schema.absences.where({ employeeId: employeeId });
  });
  this.get('/absences', schema => {
    return schema.absences.all();
  });
  this.get('/absences/:name', function(schema, request) {
    // console.log(" req.==>", request.params);

    const name = request.params.name;
    return schema.absences.where({employeeName : name});
  });
  // this.get('/absences/:name', function(schema, request) {
  //   // console.log(" req.==>", request.params);
  //
  //   const employeeName = request.params.name;
  //   let records = schema.employees.where({name:employeeName});
  //   let recordId = records.models[0].id;
  //   if (recordId) {
  //       let abscenceRecordList = schema.absences.find(recordId);
  //       console.log("senario ",abscenceRecordList.employee.absences.models);
  //       return abscenceRecordList;
  //         // return abscenceRecordList.models[0];
  //       }
  //       // console.log("users first", allUsers);
  //   // let users = schema.absences.find(1);
  //   // console.log("users");
  //   // console.log('res',  schema.absences.where({ employee.name : employeeName }))
  //   // return schema.absences.where({ employee.name : employeeName });
  // });

}
