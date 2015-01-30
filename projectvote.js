Projects = new Mongo.Collection('projects');
if (Meteor.isClient) {
  // counter starts at 0
  Template.project.helpers({
    projects: function() {
      return Projects.find({});
    }
  });

  // TODO implement iron router to handle redirect between adding projects
  Template.projectAdd.events({
    'submit .proposal': function(event) {
      var name = event.target.name.value;
      var description = event.target.name.value;

      // Add project to database
      Projects.insert({
        name: name,
        description: description
      });

      // cleaning after database gets values
      event.target.name.value = '';
      event.target.url.value  = '';

      // maybe have some sort of router redirect
      return false;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
