Template.header.events({
	'click #services': function () {
		Checks.insert({},function(e,r){
			var checkIn = Checks.findOne(r);
			firstName = Meteor.user().profile['first'];
			lastName = Meteor.user().profile['last'];

			text = firstName + ' ' + lastName + ' is going to the hospital ' + 'with the following code ' + r;
			console.log(text);
			Session.set('checkIn',checkIn);
			Meteor.call('sendEmail', 'yeboahmedia@gmail.com', 'kwame.yeboah@meltwater.org', 'hello admin', text);
		});
	}
});


// Template.registerHelper('checker',function(){
//   return Check.find({_id}, {sort: -1})
// });