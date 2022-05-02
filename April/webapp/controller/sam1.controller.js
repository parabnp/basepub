sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ns.April.controller.sam1", {
		onInit: function () {

			var that = this;

			//  that.byId("pressMeButton").setVisible(true);
			/*setTimeout(function () {
				that.byId("pressMeButton").setVisible(true);
			}, Math.random() * 100);*/

		},
		square: function (value) {

			var result = value * value;
			return result;

		},

		onPress: function () {
			this.byId("pressMeButton").setText("I got pressed");
		},

		_getDialog: function () {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("ns.April.view.HelloDialog");
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},
		onOpenDialog: function () {
			this._getDialog().open();
		}

	});
});