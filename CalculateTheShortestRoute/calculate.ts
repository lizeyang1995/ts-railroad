import parsedGraphs from "../graph"

const lengthOfEveryRoute: Array<number> = []
let resultRoute: Array<string> = []
let lengthOfOneRoute: number = 0
function calculateTheShortestRoute(startPoint: string, endPoint: string) {
    if (resultRoute.indexOf(startPoint) >= 0) {
        resultRoute.pop()
        return
    }
    parsedGraphs.some((graph) => {
        if (graph.startPoint === startPoint) {
            resultRoute.push(graph.startPoint)
            lengthOfOneRoute += graph.distance
            if (graph.endPoint === endPoint) {
                resultRoute.push(graph.endPoint)
                lengthOfEveryRoute.push(lengthOfOneRoute)
                resultRoute.slice(0, resultRoute.length - 2)
                lengthOfOneRoute -= graph.distance
                return true
            }
            calculateTheShortestRoute(graph.endPoint, endPoint)
            lengthOfOneRoute -= graph.distance
        }
    })
    if (resultRoute.length > 0) {
        resultRoute.pop()
    }
}

export { calculateTheShortestRoute, lengthOfEveryRoute }