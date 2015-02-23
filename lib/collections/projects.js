Projects = new Mongo.Collection('projects');

Meteor.methods({
  projectInsert: function(projAttrs) {
    check(Meteor.userId(), String);
    //TODO: check proj attrs

    var user = Meteor.user();
    var project = _.extend(projAttrs, {
      createdBy: user.profile.name
    });

    var projId = Projects.insert(project);
    return {
      _id: projId
    };
  },
  projectUpvote: function(projectId) {
    check(Meteor.userId(), String);
    var project = Projects.findOne(projectId);

    if (!project)
      throw new Meteor.Error('invalid', 'project does not exist');
    if (_.include(project.upvoters, Meteor.userId())) {
      var projId = Projects.update(project._id, {
        $pull: {upvoters: Meteor.userId()},
        $inc: {votes: -1}
      });
      return {
        _id: projId
      };
    } else {
      projId = Projects.update(project._id, {
        $addToSet: {upvoters: Meteor.userId()},
        $inc: {votes: 1}
      });
      return {
        _id: projId
      };
    }
  }
});
