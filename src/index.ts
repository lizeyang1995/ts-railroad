import { calculateNumberOfRouteWithExactlyStops } from './CalculateNumberOfRoute/WithExactlyStops/calculate';
import { calculateNumberOfRouteWithMaximumDistance, numberOfMethodsWithMaximumDistance } from './CalculateNumberOfRoute/WithMaximumDistance/calculate';
import { calculateNumberOfRouteWithMaximumStops } from './CalculateNumberOfRoute/WithMaximumStops/calculate'
import calculateDistance from './CalculateRouteDistnce/calculate'
import { calculateTheShortestRoute } from './CalculateTheShortestRoute/calculate';

const distanceBetweenTwoPoints = calculateDistance("A-B-C")
console.log(`The distance of the route A-B-C: ${distanceBetweenTwoPoints}`);

const numberOfMethodsWithMaximumStops = calculateNumberOfRouteWithMaximumStops(3, "C", "C", 0)
console.log(`the number of methohs with maximum stops: ${numberOfMethodsWithMaximumStops}`);

const numberOfMethodsWithExactlyStops = calculateNumberOfRouteWithExactlyStops(4, "A", "C", 0)
console.log(`the number of methohs with exactly stops: ${numberOfMethodsWithExactlyStops}`);

calculateNumberOfRouteWithMaximumDistance(30, "C", "C")
console.log(`the number of methohs with maximum distance: ${numberOfMethodsWithMaximumDistance}`);

const lengthOfEveryRoute = calculateTheShortestRoute("A", "C", [], [], 0)
console.log(`the shortest route: ${Math.min(...lengthOfEveryRoute)}`);