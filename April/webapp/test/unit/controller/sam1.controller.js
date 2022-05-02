/*global QUnit*/

sap.ui.define([
	"ns/April/controller/sam1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("sam1 Controller");

	QUnit.test("I should test the sam1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

	QUnit.test("square", function (assert) {
		var oAppController1 = new Controller();
		assert.equal(oAppController1.square(5), "25", "value correct");
		assert.notEqual(oAppController1.square(4), "25", "value wrong");//
		assert.deepEqual(oAppController1.square(5), 25, "value and content correct");
		assert.notDeepEqual(oAppController1.square(4), 25, "value and content correct");
		assert.notStrictEqual(oAppController1.square(5), "25", "triple equal wrong");
	});

});