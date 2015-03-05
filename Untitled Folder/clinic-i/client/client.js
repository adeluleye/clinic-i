Accounts.ui.config({
	requestPermissions: {},
	extraSignupFields: [{
		fieldName: 'first',
		fieldLabel: 'First name',
		inputType: 'text',
		visible: true,
		saveToProfile: true
	}, {
		fieldName: 'last',
		fieldLabel: 'Last name',
		inputType: 'text',
		visible: true,
		saveToProfile: true
	}]
});

Meteor.startup(function () {
	AccountsEntry.config({
      dashboardRoute: '/'      // mandatory - path to redirect to after successful sign-in
  });

});

