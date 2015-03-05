Bills = new Mongo.Collection('bill');

var Schemas = {};

Schemas.Bills = new SimpleSchema({
passId: {
    type: String,
    label: "Passcode",
    optional: false,
    max: 20
},
comment: {
    type: String,
    label: "comment",
    optional: true,
    autoform: {
        rows: 4
    }
},
createdAt: {
    type: Date,
    label: 'Date',
    autoform: {
        omit: true
    },
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
    }
}
},
disease: {
    type: String,
    label: "Category of illness",
    allowedValues: ["malaria", "bacterial infection", "general stress and fatigue", "cold and coughs", "other"]
},
diseaseOther: {
    type: String,
    label: 'Other Disease',
    optional: true
},
status: {
    type: String,
    label: "Patient Status",
    allowedValues: ["In-Patient", "Out-patient", "Referral", "No Treatment"]
},
bill: {
    type: Number,
    label: "Bill GHC: ",
    optional: true
}
});

Bills.attachSchema(Schemas.Bills);