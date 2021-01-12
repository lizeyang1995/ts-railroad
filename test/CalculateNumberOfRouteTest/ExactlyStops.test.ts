import { calculateNumberOfRouteWithExactlyStops } from "../../src/CalculateNumberOfRoute/WithExactlyStops/calculate"



test('calculate the number of route with exactly stops', () => {
    let numberOfMethodsWithExactlyStops = calculateNumberOfRouteWithExactlyStops(4, "B", "B", 0)
    expect(numberOfMethodsWithExactlyStops).toEqual(1)

    numberOfMethodsWithExactlyStops = calculateNumberOfRouteWithExactlyStops(4, "A", "C", 0)
    expect(numberOfMethodsWithExactlyStops).toEqual(3)

    numberOfMethodsWithExactlyStops = calculateNumberOfRouteWithExactlyStops(3, "A", "D", 0)
    expect(numberOfMethodsWithExactlyStops).toEqual(2)
})