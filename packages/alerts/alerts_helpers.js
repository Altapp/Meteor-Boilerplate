// Local (client-only) collection
Alerts = new Meteor.Collection(null);

throwError = function(message) {
    Alerts.insert({
        message: message,
        seen: false,
        color: 'danger'
    })
}
throwWarning = function(message) {
    Alerts.insert({
        message: message,
        seen: false,
        color: 'warning'
    })
}
throwInfo = function(message) {
    Alerts.insert({
        message: message,
        seen: false,
        color: 'info'
    })
}
throwSuccess = function(message) {
    Alerts.insert({
        message: message,
        seen: false,
        color: 'success'
    })
}
clearAlerts = function() {
    Alerts.remove({
        seen: true
    });
}