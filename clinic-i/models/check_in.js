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
    }
});

Checks.attachSchema(Schemas.Checks);