Router.configure({
  layoutTemplate: 'layout'
  // ,notFoundTemplate: '404'
});

Router.route('/', function () {
 this.render('home');
 name: 'home'
},{
	data: function(){
		return {
			check: Check.find().fetch()
		}
	}
});


