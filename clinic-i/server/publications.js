Meteor.publish('check', function () {
	return Checks.find();
});
