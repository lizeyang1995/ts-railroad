export interface IGraph {
    startPoint: string,
    endPoint: string,
    distance: number
}

const graphsList = ["AB5", "BC4", "CD8", "DC8", "DE6", "AD5", "CE2", "EB3", "AE7"]

const parsedGraphs: IGraph[] = graphsList.map((graph) => {
    return {
        startPoint: graph[0],
        endPoint: graph[1],
        distance: Number(graph[2])
    }
})

export default parsedGraphs