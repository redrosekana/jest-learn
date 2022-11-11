//* Mock Module

jest.mock("./mock1")
const Apple = require("./mock1").Apple
const Banana = require("./mock1").Banana
test('test Mock Module', () => {
    Apple.mockReturnValue("Grape")
    Banana.mockReturnValue("Orange")
    
    expect(Apple()).toEqual("Grape")
    expect(Banana()).toEqual("Orange")
})