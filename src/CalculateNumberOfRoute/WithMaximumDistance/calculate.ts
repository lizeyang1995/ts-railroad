import parsedGraphs, { IGraph } from "../../graph";

let lengthOfOneRoute: number = 0
function calculateNumberOfRouteWithMaximumDistance(maximumDistance: number, startPoint: string, endPoint: string, numberOfMethodsWithMaximumDistance: number): number {
    parsedGraphs.some((graph) => {
        if (isEqual(graph.startPoint, startPoint) && isDistanceRemaining(maximumDistance, graph)) {
            lengthOfOneRoute += graph.distance
            if (isEqual(graph.endPoint, endPoint)) {
                numberOfMethodsWithMaximumDistance++
                numberOfMethodsWithMaximumDistance += calculateNumberOfRouteWithMaximumDistance(maximumDistance, graph.endPoint, endPoint, numberOfMethodsWithMaximumDistance)
            } else {
                numberOfMethodsWithMaximumDistance += calculateNumberOfRouteWithMaximumDistance(maximumDistance, graph.endPoint, endPoint, numberOfMethodsWithMaximumDistance)
            }
        }
    })
    return numberOfMethodsWithMaximumDistance
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

export { calculateNumberOfRouteWithMaximumDistance }