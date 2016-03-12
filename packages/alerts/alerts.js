Template.alerts.helpers({
	alerts: function() {
		return Alerts._collection.find();
	}
});

Template.alert.rendered = function() {
	var alert = this.data;
	// $('.content').scrollTop(0);
	// $('body').scrollTop(0);
	// $(window).scrollTop(0);

	Meteor.defer(function() {
		Alerts._collection.update(alert._id, {
			$set: {
				seen: true
			}
		});
	});
};