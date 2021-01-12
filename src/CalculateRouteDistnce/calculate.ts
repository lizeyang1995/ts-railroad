import parsedGraphs from "../graph"

function calculateDistance(route: string): number | string {
    const splitedRoute = route.split("-")
    const numberOfStops = splitedRoute.length - 1
    let distanceBetweenTwoPoints = 0
    for (let index = 0; index < numberOfStops; index++) {
        let findRoute = false
        parsedGraphs.some((graph) => {
            if (graph.startPoint === splitedRoute[index] && 
                graph.endPoint === splitedRoute[index + 1]) {
                    distanceBetweenTwoPoints += graph.distance
                    findRoute = true
                    return true
                }
        })
        if (!findRoute) {
            return "no such route";
        }
    }
    return distanceBetweenTwoPoints
}

export default calculateDistance