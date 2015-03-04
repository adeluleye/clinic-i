Router.configure({
  layoutTemplate: 'layout'
  // ,notFoundTemplate: '404'
});

Router.route('/', function () {
 this.render('index');
 name: 'main'
},{
	data: function(){
		return {
			check: Checks.find().fetch()
		}
	}
});