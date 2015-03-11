Template.checkIn.events({
	'click #services': function () {
		Checks.insert({},function(e,r){
			var checkIn = Checks.findOne(r);
			firstName = Meteor.user().profile['first'];
			lastName = Meteor.user().profile['last'];
			console.log(checkIn);
			date = checkIn.createdAt;
			console.log(date);


			text = firstName + ' ' + lastName + ' is going to the hospital ' + 'with the following code ' + r + 'date and time log at: ' + date;
			console.log(text);
			Session.set('checkIn',checkIn);
			Meteor.call('sendEmail', 'yeboahmedia@gmail.com', 'kwame.yeboah@meltwater.org', 'hello admin', text);
		});
	}
});


Template.reports.events({
	'click #download': function () {
		console.log('download');

Blaze.saveAsPDF(Template.footer, {
  filename: "test.pdf", // optional, default is "document.pdf"
  x: 0, // optional, left starting position on resulting PDF, default is 4 units
  y: 0, // optional, top starting position on resulting PDF, default is 4 units
  orientation: "landscape", // optional, "landscape" or "portrait" (default)
  unit: "in", // optional, unit for coordinates, one of "pt", "mm" (default), "cm", or "in"
  format: "letter" // optional, see Page Formats, default is "a4"
});


	}
})


