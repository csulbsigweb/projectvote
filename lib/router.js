Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'projects'
});

Router.route('/propose', {
  name: 'projectAdd'
});
