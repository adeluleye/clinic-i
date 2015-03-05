Check = new Mongo.Collection('check');

var Schemas = {};

Schemas.Check = new SimpleSchema({
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

Check.attachSchema(Schemas.Check);