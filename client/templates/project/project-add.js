Template.projectAdd.events({
  'submit .proposal': function(event) {
    if (Meteor.user()) {
      var name = event.target.name.value;
      var description = event.target.name.value;

      // Add project to database
      Projects.insert({
        name: name,
        description: description,
        createdBy: Meteor.user().username
      });

      // cleaning after database gets values
      event.target.name.value = '';
      event.target.url.value  = '';

      // maybe have some sort of router redirect
      Router.go('/');
    } else {
      alert('Must be logged in to add a project proposal');
      Router.go('/');
    }
    return false;
  }
});
