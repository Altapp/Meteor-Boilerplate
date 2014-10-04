Template.alerts.helpers({
    alerts: function() {
        return Alerts.find();
    }
});

Template.alert.rendered = function() {
    var alert = this.data;
    window.scrollTo(0, 0);
    Meteor.defer(function() {
        Alerts.update(alert._id, {
            $set: {
                seen: true
            }
        });
    });
};