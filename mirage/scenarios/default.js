export default function( server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  //generate 10 absent records
  server.createList('employee', 10);
  server.createList('absence', 10);
}
