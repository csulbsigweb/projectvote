Template.projectAdd.events({
  'submit .proposal': function(event, template) {
    if (Meteor.user()) {
      var name = event.target.name.value;
      var description = event.target.description.value;
      var languages = template.findAll("input[type=checkbox]:checked");

      var langArray = _.map(languages, function(lang) {
        return lang.defaultValue;
      });

      // Add project to database
      Projects.insert({
        name: name,
        description: description,
        languages: langArray,
        votes: 0,
        upvoters: [],
        createdBy: Meteor.user().profile.name
      });

      // cleaning after database gets values
      event.target.name.value = '';
      event.target.description.value  = '';

      // maybe have some sort of router redirect
      Router.go('projects');
      return false;
    } else {
      alert('Must be logged in to add a project proposal');
      Router.go('projects');
      return false;
    }
  }
});
