import calculateDistance from "../../src/CalculateRouteDistnce/calculate"

test('calculate route distance', () => {
    let distanceBetweenTwoPoints = calculateDistance("A-B-C")
    expect(distanceBetweenTwoPoints).toEqual(9)

    distanceBetweenTwoPoints = calculateDistance("A-D")
    expect(distanceBetweenTwoPoints).toEqual(5)

    distanceBetweenTwoPoints = calculateDistance("A-D-C")
    expect(distanceBetweenTwoPoints).toEqual(13)

    distanceBetweenTwoPoints = calculateDistance("A-E-B-C-D")
    expect(distanceBetweenTwoPoints).toEqual(22)

    distanceBetweenTwoPoints = calculateDistance("A-E-D")
    expect(distanceBetweenTwoPoints).toEqual("no such route")
})