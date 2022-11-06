jest.mock("./mock4")

const displayStar = require("./mock4")

describe("Test Additional",() => {
    test('should first', () => { 
        displayStar(3)
        displayStar(5)
        
        expect(displayStar).toHaveBeenCalledTimes(2)
        
        const myMockFn1 = jest.fn((num) => {
            return num > 5 ? "num > 5" : "num < 5"
            
        })
        const myMockFn2 = jest.fn().mockReturnValue('default 2')
        
        myMockFn1(10)
        myMockFn1(3)
        myMockFn1(4)
        myMockFn2(1,2,3,4)

        expect(myMockFn1.mock.calls.length).toBeGreaterThan(0);
        expect(myMockFn1).toHaveBeenCalled()
        expect(myMockFn2).toHaveBeenCalledWith(1,2,3,4);
        expect(myMockFn2).toHaveBeenLastCalledWith(1,2,3,4);
    })
})