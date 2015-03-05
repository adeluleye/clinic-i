  AutoForm.addHooks(null, {
  	onError: function (operation,error) {
  		alert(error);
  	}
  });

  AutoForm.hooks({
  	billForm: {
  		before: {
  			insert: function(doc, template) {
  				console.log(doc.passId);
  				_id = doc.passId
  				if (Checks.findOne(_id)._id == doc.passId) {
  					return doc 
  				};
  				if (Checks.findOne(_id)._id == undefined) {
  					console.log('error');
  				};
  			}
  		}
  	}
  	});


  AutoForm.addHooks('#billForm', {
    onSubmit: function () {
      console.log("Only this onSubmit");
    }
  }, true);