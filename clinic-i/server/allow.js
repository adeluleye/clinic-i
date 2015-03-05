Checks.allow({
	insert: function (userId, doc) {
        return  true;
    },
    update: function (userId, doc, fields, modifier) {
        return true;
    },
    remove: function (userId, doc) {
        return true;
    }
});


Bills.allow({
	insert: function (userId, doc) {
        return  true;
    },
    update: function (userId, doc, fields, modifier) {
        return true;
    },
    remove: function (userId, doc) {
        return true;
    }
});