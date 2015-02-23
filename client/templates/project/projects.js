Template.projects.helpers({
  projects: function() {
    return Projects.find({}, {
      sort: {
        votes: -1
      }
    });
  }

});

Template.projectVotes.helpers({
  buttonColor: function() {
    if (Meteor.user()) {
      var project = this.upvoters;
      // Figure out how to refer to object
      if (_.include(project, Meteor.userId())) {
        return 'btn-danger unvoteButton';
      } else {
        return 'btn-primary voteButton';
      }
    } else {
      return 'loginVote';
    }
  }
});

Template.projectVotes.events({
  'click .vote': function(event) {
    var projId = this._id;
    Meteor.call('projectUpvote', projId);
  }
});
