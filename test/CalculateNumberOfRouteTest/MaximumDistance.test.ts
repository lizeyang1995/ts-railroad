import { calculateNumberOfRouteWithMaximumDistance } from "../../src/CalculateNumberOfRoute/WithMaximumDistance/calculate"

test('calculate the number of route with maximum distance', () => {
    const numberOfMethodsWithMaximumDistance = calculateNumberOfRouteWithMaximumDistance(20, "C", "C", 0)
    expect(numberOfMethodsWithMaximumDistance).toEqual(3)
})