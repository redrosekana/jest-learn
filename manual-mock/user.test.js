jest.mock("./user")
const readUser = require("./user")

test('should first',async () => {
    expect(readUser()).toEqual(([
        {
            id:3,
            fname: "Aloha"
        },
        {
            id:4,
            fname: "Rose"
        },
    ]))
})