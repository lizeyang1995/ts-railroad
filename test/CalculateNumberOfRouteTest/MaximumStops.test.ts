import { calculateNumberOfRouteWithMaximumStops } from "../../src/CalculateNumberOfRoute/WithMaximumStops/calculate"

test('calculate the number of route with maximum stops', () => {
    let numberOfMethodsWithMaximumStops = calculateNumberOfRouteWithMaximumStops(3, "C", "C", 0)
    expect(numberOfMethodsWithMaximumStops).toEqual(2)

    numberOfMethodsWithMaximumStops = calculateNumberOfRouteWithMaximumStops(3, "A", "D", 0)
    expect(numberOfMethodsWithMaximumStops).toEqual(2)

    // let numberOfMethodsWithMaximumStops = calculateNumberOfRouteWithMaximumStops(3, "A", "E", 0)
    // expect(numberOfMethodsWithMaximumStops).toEqual(3)
})