sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/alp/travel/alpflexapp/test/integration/FirstJourney',
		'com/alp/travel/alpflexapp/test/integration/pages/TravelMain'
    ],
    function(JourneyRunner, opaJourney, TravelMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/alp/travel/alpflexapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelMain: TravelMain
                }
            },
            opaJourney.run
        );
    }
);