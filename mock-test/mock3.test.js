jest.mock("./mock3-2")
jest.mock("./mock3-3",() => {
    return {
        PrintText: jest.fn(text => {
            return text
        }) ,

        PrintValue: jest.fn(value => {
            return value
        })
    }
})

const power = require("./mock3-2").power
const add = require("./mock3-2").add
const fetchData = require("./mock3-2").fetchData
const result = require("./mock3-1")
const PrintText = require("./mock3-3").PrintText
const PrintValue = require("./mock3-3").PrintValue

//console.log(require("./mock3-3"))

describe("Test mock several function nested function",() => {
    beforeEach(() => {
        //? วิธี 1 
        // power.mockReturnValue(4)
        // add.mockReturnValue(16)
        
        //? วิธี 2
        power.mockImplementation((a) => {
            console.log(a)
            return a*a
        })

        add.mockImplementation((a,b) => {
            console.log(a+b)
            return a+b
        })
    })
    
    test("Test One",() => {
        expect(result(3,3)).toEqual(18)
    })

    test("Test Two",async () => {
        fetchData.mockResolvedValue("Ok")
        await expect(fetchData()).resolves.toEqual("Ok")
    })

    test("Test Three",async () => {
        expect(PrintText("GTA")).toEqual("GTA")
    })

    test("Test four",async () => {
        expect(PrintValue("GOD OF WARS")).toEqual("GOD OF WARS")
    })
})