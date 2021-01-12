import { calculateNumberOfRouteWithExactlyStops } from './CalculateNumberOfRoute/WithExactlyStops/calculate';
import { calculateNumberOfRouteWithMaximumDistance, numberOfMethodsWithMaximumDistance } from './CalculateNumberOfRoute/WithMaximumDistance/calculate';
import { calculateNumberOfRouteWithMaximumStops, numberOfMethodsWithMaximumStops } from './CalculateNumberOfRoute/WithMaximumStops/calculate'
import calculateDistance from './CalculateRouteDistnce/calculate'
import { calculateTheShortestRoute, lengthOfEveryRoute } from './CalculateTheShortestRoute/calculate';

const distanceBetweenTwoPoints = calculateDistance("A-B-C")
console.log(`The distance of the route A-B-C: ${distanceBetweenTwoPoints}`);

calculateNumberOfRouteWithMaximumStops("C", "C")
console.log(`the number of methohs with maximum stops: ${numberOfMethodsWithMaximumStops}`);

const numberOfMethodsWithExactlyStops = calculateNumberOfRouteWithExactlyStops(4, "A", "C", 0)
console.log(`the number of methohs with exactly stops: ${numberOfMethodsWithExactlyStops}`);

calculateNumberOfRouteWithMaximumDistance(30, "C", "C")
console.log(`the number of methohs with maximum distance: ${numberOfMethodsWithMaximumDistance}`);

calculateTheShortestRoute("A", "C")
console.log(`the shortest route: ${Math.min(...lengthOfEveryRoute)}`);