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
    Router.go('home');
    return false;
  }
});
