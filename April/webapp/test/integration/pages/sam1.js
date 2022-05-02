sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/test/matchers/Properties",
	"sap/ui/test/matchers/Ancestor"
], function (Opa5, Press, Properties, Ancestor) {
	"use strict";
	var sViewName = "sam1";
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {
				iPressOnTheButton: function () {
					return this.waitFor({
						viewName: sViewName,
						id: "pressMeButton",
						actions: new Press(),
						errorMessage: "did not find the Button"
					});
				},

				iPressTheSayHelloWithDialogButton: function () {
					return this.waitFor({
						viewName: sViewName,
						id: "btn2",
						actions: new Press(),
						errorMessage: "Did not find the helloDialogButton button on the app page"
					});
				}
			},

			assertions: {

				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The sam1 view is displayed");
						},
						errorMessage: "Did not find the sam1 view"
					});
				},

				theButtonShouldHaveADifferentText: function () {
					return this.waitFor({
						id: "pressMeButton",
						viewName: sViewName,
						matchers: new sap.ui.test.matchers.PropertyStrictEquals({
							name: "text",
							value: "I got pressed"
						}),
						success: function (oButton) {
							Opa5.assert.ok(true, "The button's text changed to: " + oButton.getText());
						},
						errorMessage: "did not change the Button's text"
					});
				},

				iShouldSeeTheHelloDialog: function () {
					return this.waitFor({
						controlType: "sap.m.Dialog",
						success: function () {
							// we set the view busy, so we need to query the parent of the app
							Opa5.assert.ok(true, "The dialog is open");
						},
						errorMessage: "Did not find the dialog control"
					});
				}

			}
		}
	});

});