	/*global QUnit*/

	sap.ui.define([
		"sap/ui/test/opaQunit",
		"./pages/sam1"
	], function (opaTest) {
		"use strict";

		QUnit.module("Navigation Journey");

		opaTest("Should see the initial page of the app", function (Given, When, Then) {
			// Arrangements
			Given.iStartMyApp();

			// Assertions
			Then.onTheAppPage.iShouldSeeTheApp();

			//Cleanup
			Then.iTeardownMyApp();
		});

		opaTest("Should press a Button", function (Given, When, Then) {
			// Arrangements
			Given.iStartMyApp();

			//Actions
			When.onTheAppPage.iPressOnTheButton();

			// Assertions
			Then.onTheAppPage.theButtonShouldHaveADifferentText();

			Then.iTeardownMyApp();
		});

		opaTest("Should open the hello dialog", function (Given, When, Then) {
			// Arrangements
			Given.iStartMyApp();
			//Actions
			When.onTheAppPage.iPressTheSayHelloWithDialogButton();
			// Assertions
			Then.onTheAppPage.iShouldSeeTheHelloDialog();
			Then.iTeardownMyApp();
		});
	});