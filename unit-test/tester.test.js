const sum = require("./tester").sum
const avg = require("./tester").avg
const pullInfo = require("./tester").pullInfo

//? Matcher && Async
describe("test one",() => {
    test("test funcztion sum",() => {
        expect(sum(1,2)).toBe(3)
    })
    
    test("test function avg",() => {
        expect(avg(10,20,30)).toBe(20)
    })

    //* กรณีเทสทั้ง resolve และ reject
    test("test function pullInfo 1", async () => {
        try{
            const data = await pullInfo()
            expect(data).toBe("Success")
        }catch(err){
            expect(err).toBe("Fail")
        }
    })

    //* กรณีเทสเฉพาะ resolve
    // test("test function pullInfo 2", async () => {
    //     await expect(pullInfo()).resolves.toBe("Success")
    // })
})



