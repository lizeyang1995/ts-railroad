import { calculateNumberOfRouteWithMaximumStops, numberOfMethods } from './CalculateNumberOfRoute/WithMaximumStops/calculate'
import calculateDistance from './CalculateRouteDistnce/calculate'

const distanceBetweenTwoPoints = calculateDistance("A-B-C")
console.log(`The distance of the route A-B-C: ${distanceBetweenTwoPoints}`);

calculateNumberOfRouteWithMaximumStops("C", "C")
console.log(`the number of methohs: ${numberOfMethods}`);