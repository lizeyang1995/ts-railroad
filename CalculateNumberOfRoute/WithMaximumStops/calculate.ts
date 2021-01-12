import parsedGraphs from "../../graph";

let numberOfMethodsWithMaximumStops: number = 0
let resultRoute: Array<string> = []
function calculateNumberOfRouteWithMaximumStops(startPoint: string, endPoint: string): void {
    parsedGraphs.some((graph) => {
        if (graph.startPoint === startPoint) {
            resultRoute.push(graph.startPoint)
            if (graph.endPoint === endPoint) {
                resultRoute.push(graph.endPoint)
                if (resultRoute.length <= 4) {
                    numberOfMethodsWithMaximumStops++
                }
                resultRoute = resultRoute.slice(0, resultRoute.length - 2)
                return true
            }
            calculateNumberOfRouteWithMaximumStops(graph.endPoint, endPoint)
        }
    })
    if (resultRoute.length > 0) {
        resultRoute.pop()
    }
}

export { calculateNumberOfRouteWithMaximumStops, numberOfMethodsWithMaximumStops } 