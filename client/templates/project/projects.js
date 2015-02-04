Template.projects.helpers({
  projects: function() {
    return Projects.find({}, {sort: {votes: -1}});
  }
});

Template.projectVotes.events({
  'click .vote': function(event) {
      if (Meteor.user()) {
        var name = Meteor.user().profile.name;
        var idTag = '#' + this._id;

        // TODO: add code similar to voting chapter from discover meteor
      }
  }
});
