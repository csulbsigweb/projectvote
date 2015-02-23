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
      var projAttrs = {
        name: name,
        description: description,
        languages: langArray,
        votes: 0,
        upvoters: []
      };

      Meteor.call('projectInsert', projAttrs, function(err, result) {
        if (err)
          return alert(error.reason);
        Router.go('/');
      });
      // might be better to redirect here instead
      Router.go('/');
    }
  }
});
