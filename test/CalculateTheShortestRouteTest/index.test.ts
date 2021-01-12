import { calculateTheShortestRoute, lengthOfEveryRoute } from "../../src/CalculateTheShortestRoute/calculate"

test("calculate the shortest route", () => {
    calculateTheShortestRoute("A", "C")
    expect(9).toEqual(Math.min(...lengthOfEveryRoute))

    calculateTheShortestRoute("B", "B")
    expect(9).toEqual(Math.min(...lengthOfEveryRoute))

    calculateTheShortestRoute("C", "B")
    expect(5).toEqual(Math.min(...lengthOfEveryRoute))

    calculateTheShortestRoute("A", "D")
    expect(5).toEqual(Math.min(...lengthOfEveryRoute))
})