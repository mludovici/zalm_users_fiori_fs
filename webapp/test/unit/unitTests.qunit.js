/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zalm/zalm_users_fiori_fs/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
