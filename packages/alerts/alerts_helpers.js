Alerts = {
	_collection: new Meteor.Collection(null), // Local (client-only) collection

	throwError: function(message) {
		this._collection.update({
			message: message,
			color: 'danger'
		}, {
			$set: {
				seen: false
			}
		}, {
			upsert: true
		});
	},

	throwWarning: function(message) {
		this._collection.update({
			message: message,
			color: 'warning'
		}, {
			$set: {
				seen: false
			}
		}, {
			upsert: true
		});
	},

	throwInfo: function(message) {
		this._collection.update({
			message: message,
			color: 'info'
		}, {
			$set: {
				seen: false
			}
		}, {
			upsert: true
		});
	},

	throwSuccess: function(message) {
		this._collection.update({
			message: message,
			color: 'success'
		}, {
			$set: {
				seen: false
			}
		}, {
			upsert: true
		});
	},

	clearSeen: function() {
		this._collection.remove({
			seen: true
		});
	},
};