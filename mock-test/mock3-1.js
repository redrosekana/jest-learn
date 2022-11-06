const power = require("./mock3-2").power
const add = require("./mock3-2").add

function result(num1,num2){
    const a = power(num1)
    const b = power(num2)
    const c = add(a,b)
    return c
}

module.exports = result