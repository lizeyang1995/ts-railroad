import parsedGraphs from "../../graph";

let resultRoute: Array<string> = []
function calculateNumberOfRouteWithExactlyStops(numberOfStops: number, startPoint: string, endPoint: string, numberOfMethods: number): number {
    parsedGraphs.some((graph) => {
        if (graph.startPoint === startPoint && resultRoute.length <= numberOfStops) {
            resultRoute.push(graph.startPoint)
            if (graph.endPoint === endPoint && resultRoute.length === numberOfStops) {
                resultRoute.push(graph.endPoint)
                numberOfMethods++
                resultRoute = resultRoute.slice(0, resultRoute.length - 2)
                return true
            }
            numberOfMethods = calculateNumberOfRouteWithExactlyStops(numberOfStops, graph.endPoint, endPoint, numberOfMethods)
        }
    })
    if (resultRoute.length > 0) {
        resultRoute.pop()
    }
    return numberOfMethods
}

export { calculateNumberOfRouteWithExactlyStops }