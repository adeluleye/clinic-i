Meteor.publish('check', function () {
	return Check.find();
});
