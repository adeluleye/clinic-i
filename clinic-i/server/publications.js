Meteor.publish('check', function () {
	return Checks.find();
});


Meteor.publish('bill', function () {
	return Bills.find();
});
