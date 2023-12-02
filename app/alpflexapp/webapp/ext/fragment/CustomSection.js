sap.ui.define(["sap/fe/core/PageController", "sap/m/MessageToast"], function(PageController, MessageToast) {
    'use strict';

    return PageController.extend("com/alp/travel/alpflexapp/ext/fragment/CustomSection", {
		onChartSelectionChanged: function () {
			MessageToast.show("Selection changed");
		}
	});
});