Package.describe({
	name: "altapp:alerts",
	summary: "Site-wide error/success/info/warning alerts.",
	version: "1.0.0"
});

/* This defines your actual package */
Package.onUse(function(api) {
	api.versionsFrom("METEOR@1.2");

	api.use(["bbfc:scss@0.9.5"], ["server"]);
	api.imply("bbfc:scss", ["server"]);

	api.use([
		"templating",
	], "client");

	api.addFiles([
		"_alerts.scss"
	], "server");

	api.addFiles([
		"alerts.html",
		"alerts.js",
		"alerts_helpers.js"
	], "client");

	api.export && api.export("Alerts", "client");
});