

  Meteor.startup(function () {
  	AccountsEntry.config({
      dashboardRoute: '/'      // mandatory - path to redirect to after successful sign-in
  });

  });

