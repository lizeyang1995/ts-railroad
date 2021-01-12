import parsedGraphs from "../../graph";

let numberOfMethods: number = 0
function calculateNumberOfRouteWithMaximumStops(startPoint: string, endPoint: string): void {
    let resultMethods: Array<string> = []
    parsedGraphs.some((graph) => {
        if (graph.startPoint === startPoint) {
            resultMethods.push(graph.startPoint)
            if (graph.endPoint === endPoint) {
                resultMethods.push(graph.endPoint)
                if (resultMethods.length <= 4) {
                    numberOfMethods++
                }
                resultMethods = resultMethods.slice(0, resultMethods.length - 2)
                return true
            }
            calculateNumberOfRouteWithMaximumStops(graph.endPoint, endPoint)
        }
    })
    if (resultMethods.length > 0) {
        resultMethods.pop()
    }
}

export { calculateNumberOfRouteWithMaximumStops, numberOfMethods } 