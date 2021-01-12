import parsedGraphs from "../graph"

function claculate(route: string): void {
    const splitedRoute = route.split(" ")
    const numberOfStops = splitedRoute.length - 1
    let distanceBetweenTwoPoints = 0
    for (let index = 0; index < numberOfStops; index++) {
        let findRouter = false
        parsedGraphs.some((graph) => {
            if (graph.startPoint === splitedRoute[index] && 
                graph.endPoint === splitedRoute[index + 1]) {
                    distanceBetweenTwoPoints += graph.distance
                    findRouter = true
                    return true
                }
        })
        if (!findRouter) {
            console.log("no such route");
            return;
        }
    }
    console.log(distanceBetweenTwoPoints);
}