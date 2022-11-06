const sumer = (...data) => {
    let sum = 0
    data.forEach(e => {
        sum += e
    })
    return sum
}

//! ลองเล่นกับ method mock ดู
describe("group test Mock Function",() => {
    const mockFunction = jest.fn().mockName("Test Mock 1").mockImplementation(sumer)
    
    beforeEach(() => {
        mockFunction.mockClear()
    })

    afterAll(() => {
        mockFunction.mockReset()
    })
    
    test('test Mock Function 1', () => {
        expect(mockFunction(1,2,3,4,5)).toBe(15)
    })

    test('test Mock Function 2', () => {
        expect(mockFunction.getMockName()).toBe("Test Mock 1")
    })
})

