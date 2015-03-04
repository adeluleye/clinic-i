Checks = new Mongo.Collection('check');

var Schemas = {};

Schemas.Checks = new SimpleSchema({
    owner: {
        type: String,
        autoform: {
            omit: true
        },
        autoValue: function(){
            return Meteor.userId();
        }
    },
    createdAt: {
    type: Date,
    label: 'Date',
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  }
});

Checks.attachSchema(Schemas.Checks);