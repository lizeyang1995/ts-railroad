import parsedGraphs from "../../graph";

let numberOfMethodsWithExactlyStops: number = 0
let resultRoute: Array<string> = []
function calculateNumberOfRouteWithExactlyStops(numberOfStops: number, startPoint: string, endPoint: string) {
    parsedGraphs.some((graph) => {
        if (graph.startPoint === startPoint && resultRoute.length <= numberOfStops) {
            resultRoute.push(graph.startPoint)
            if (graph.endPoint === endPoint && resultRoute.length === numberOfStops) {
                resultRoute.push(graph.endPoint)
                numberOfMethodsWithExactlyStops++
                resultRoute = resultRoute.slice(0, resultRoute.length - 2)
                return true
            }
            calculateNumberOfRouteWithExactlyStops(numberOfStops, graph.endPoint, endPoint)
        }
    })
    if (resultRoute.length > 0) {
        resultRoute.pop()
    }
}

export {calculateNumberOfRouteWithExactlyStops, numberOfMethodsWithExactlyStops}