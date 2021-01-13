import { calculateTheShortestRoute,  } from "../../src/CalculateTheShortestRoute/calculate"

test("calculate the shortest route", () => {
    let lengthOfEveryRoute = calculateTheShortestRoute("A", "C", [], [], 0)
    expect(Math.min(...lengthOfEveryRoute)).toEqual(9)
    
    lengthOfEveryRoute = calculateTheShortestRoute("A", "D", [], [], 0)
    expect(Math.min(...lengthOfEveryRoute)).toEqual(5)

    lengthOfEveryRoute = calculateTheShortestRoute("B", "B", [], [], 0)
    expect(Math.min(...lengthOfEveryRoute)).toEqual(9)

    lengthOfEveryRoute = calculateTheShortestRoute("C", "B", [], [], 0)
    expect(Math.min(...lengthOfEveryRoute)).toEqual(5)
})