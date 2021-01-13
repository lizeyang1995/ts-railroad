import parsedGraphs from "../../graph";

let resultRoute: Array<string> = []
function calculateNumberOfRouteWithMaximumStops(maximumStops: number, startPoint: string, endPoint: string, numberOfMethods: number): number {
    if (resultRoute.length > 4) {
        resultRoute.pop()
        return numberOfMethods
    }
    parsedGraphs.some((graph) => {
        if (graph.startPoint === startPoint) {
            resultRoute.push(graph.startPoint)
            if (graph.endPoint === endPoint) {
                resultRoute.push(graph.endPoint)
                if (resultRoute.length <= maximumStops + 1) {
                    numberOfMethods++
                }
                resultRoute = resultRoute.slice(0, resultRoute.length - 2)
                if (resultRoute.length != 0) {
                    return true
                }
            } else {
                numberOfMethods = calculateNumberOfRouteWithMaximumStops(maximumStops, graph.endPoint, endPoint, numberOfMethods)
            }
        }
    })
    if (resultRoute.length > 0) {
        resultRoute.pop()
    }
    return numberOfMethods
}

export { calculateNumberOfRouteWithMaximumStops } 