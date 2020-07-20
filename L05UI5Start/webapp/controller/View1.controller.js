sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Workspace.L05UI5Start.controller.View1", {
		
		onInit: function () {
		},
		
		onClickButton1: function () {
			var oInput = this.byId("idInput");
			var oMessageStrip = this.byId("idMessageStrip");
			
			function factorial( n ) { return (n !== 1) ? n * factorial(n - 1) : 1; }
			oMessageStrip.setText("Result: " + factorial(oInput.getValue()) );
		},
		
		onClickButton2: function () {
			var oInput = this.byId("idInput");
			var oMessageStrip = this.byId("idMessageStrip");
			oMessageStrip.setText("Result: ");
			oInput.setValue("");
		}
	});
});