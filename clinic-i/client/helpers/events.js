Template.header.events({
	'click #services': function () {
		Check.insert({name: 'doro'});
		console.log('run');
	}
});