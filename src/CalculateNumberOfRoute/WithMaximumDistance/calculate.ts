import parsedGraphs, { IGraph } from "../../graph";

let lengthOfOneRoute: number = 0
let numberOfMethodsWithMaximumDistance: number = 0
let resultRoute: Array<string> = []
function calculateNumberOfRouteWithMaximumDistance(maximumDistance: number, startPoint: string, endPoint: string) {
    parsedGraphs.some((graph) => {
        if (isEqual(graph.startPoint, startPoint) && isDistanceRemaining(maximumDistance, graph)) {
            resultRoute.push(graph.startPoint)
            lengthOfOneRoute += graph.distance
            if (isEqual(graph.endPoint, endPoint)) {
                resultRoute.push(graph.endPoint)
                console.log(resultRoute);
                numberOfMethodsWithMaximumDistance++
                if (isDistanceRemaining(maximumDistance)) {
                    resultRoute.pop()
                    calculateNumberOfRouteWithMaximumDistance(maximumDistance, graph.endPoint, endPoint)
                }
                resultRoute.pop()
                lengthOfOneRoute -= graph.distance
                return true
            }
            calculateNumberOfRouteWithMaximumDistance(maximumDistance, graph.endPoint, endPoint)
            resultRoute.pop()
            lengthOfOneRoute -= graph.distance
        }
    })
}

function isEqual(presentPoint: string, targetPoint: string): boolean {
    return presentPoint === targetPoint
}

function isDistanceRemaining(maximumDistance: number, graph?: IGraph): boolean {
    if (graph) {
        return lengthOfOneRoute < maximumDistance - graph.distance
    }
    return lengthOfOneRoute < maximumDistance
}

export { calculateNumberOfRouteWithMaximumDistance, numberOfMethodsWithMaximumDistance }