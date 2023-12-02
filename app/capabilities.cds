using { TravelService } from '../srv/travel-service';

annotate TravelService.BookedFlights with @(
    Aggregation.ApplySupported: {
        $Type: 'Aggregation.ApplySupportedType',
        Transformations: [ 'aggregate', 'groupby' ],
        Rollup: #None,
        GroupableProperties: [ to_Customer_CustomerID, AirlineID ],
        AggregatableProperties: [{
            $Type: 'Aggregation.AggregatablePropertyType',
            Property : BookingUUID,
        },]
    },
    Analytics.AggregatedProperty: {
        $Type: 'Analytics.AggregatedPropertyType',
        Name: 'CountFlights',
        AggregationMethod: 'countdistinct',
        AggregatableProperty : BookingUUID,
        ![@Common.Label] : 'Booked flights per Airline',
    }
);
