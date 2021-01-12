import { calculateNumberOfRouteWithExactlyStops, numberOfMethodsWithExactlyStops } from './CalculateNumberOfRoute/WithExactlyStops/calculate';
import { calculateNumberOfRouteWithMaximumStops, numberOfMethodsWithMaximumStops } from './CalculateNumberOfRoute/WithMaximumStops/calculate'
import calculateDistance from './CalculateRouteDistnce/calculate'

const distanceBetweenTwoPoints = calculateDistance("A-B-C")
console.log(`The distance of the route A-B-C: ${distanceBetweenTwoPoints}`);

calculateNumberOfRouteWithMaximumStops("C", "C")
console.log(`the number of methohs with maximum stops: ${numberOfMethodsWithMaximumStops}`);

calculateNumberOfRouteWithExactlyStops(4, "A", "C")
console.log(`the number of methohs with exactly stops: ${numberOfMethodsWithExactlyStops}`);
