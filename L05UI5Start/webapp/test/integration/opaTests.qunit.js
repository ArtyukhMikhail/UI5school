/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Workspace/L05UI5Start/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});