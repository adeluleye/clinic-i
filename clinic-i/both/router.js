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


Router.route('/dashboard', function () {
 this.render('dashboard');
 name: 'dashboard'
},{
	data: function(){
		return {
			check: Checks.find().fetch()
		}
	}
});


Router.route('/clinic', function () {
 this.render('clinicHome');
 name: 'clinicHome'},{
	data: function(){
		return {
			bill: Bills.find().fetch(),
			check: Checks.find()
			
		}
	}

});

Router.route('/clinic/new', function () {
 this.render('clinic');
 name: 'clinic'},{
	data: function(){
		return {
			bill: Bills.find().fetch(),
			check: Checks.find()
		}
	}
});

Router.route('/clinic/report/overview/diseases', function () {
 this.render('report');
 name: 'report'},{
	data: function(){
		return {
			bill: Bills.find().fetch(),
			check: Checks.find()

		}
	}

});

Router.route('/clinic/reports', function () {
 this.render('reports');
 name: 'reports'},{
	data: function(){
		return {
			bill: Bills.find().fetch(),
			check: Checks.find()

		}
	}

});