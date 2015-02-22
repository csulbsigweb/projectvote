Template.projects.helpers({
  projects: function() {
    return Projects.find({}, {sort: {votes: -1}});
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
    event.preventDefault();
    if (Meteor.user()) {
      var project = Projects.findOne(this._id);
      if (!project)
        throw new Meteor.Error('invalid', 'project does not exist');
      if (_.include(project.upvoters, Meteor.userId())) {
        Projects.update(project._id, {
          $pull: {upvoters: Meteor.userId()},
          $inc: {votes: -1}
        });
      } else {
        Projects.update(project._id, {
          $addToSet: {upvoters: Meteor.userId()},
          $inc: {votes: 1}
        });
      }
    }
  }
});
