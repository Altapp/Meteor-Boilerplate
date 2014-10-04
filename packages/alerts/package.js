Package.describe({
    name: "alerts",
    summary: "Site-wide error/success/info/warning alerts.",
    version: "1.0.0"
});

/* This defines your actual package */
Package.onUse(function (api) {
  // If no version is specified for an 'api.use' dependency, use the
  // one defined in Meteor 0.9.0.
	api.versionsFrom("METEOR@0.9.1");

	api.use([
		"templating", 
		"raix:handlebar-helpers"
	], "client");

	api.addFiles([
		"_alerts.scss",
		"alerts.html",
		"alerts.js",
		"alerts_helpers.js"
	], "client");

	api.export && api.export("throwError", "client");
	api.export && api.export("throwWarning", "client");
	api.export && api.export("throwInfo", "client");
	api.export && api.export("throwSuccess", "client");
	api.export && api.export("clearAlerts", "client");
});
