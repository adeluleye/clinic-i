Template.header.events({
	'click #services': function () {
		Check.insert({},function(e,r){
			var checkin = Check.findOne(r);
			id = checkin._id
			console.log(id);
			return id;
		});
	}
});


// Template.registerHelper('checker',function(){
//   return Check.find({_id}, {sort: -1})
// });