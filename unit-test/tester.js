function sum(num1,num2){
    return num1+num2
}

function avg(...num){
    let sum = 0
    num.forEach((e) => {
        sum += e
    })
    
    return (sum / num.length)
}

function pullInfo(){
    return new Promise((resolve,reject) => {
        const math = Math.floor(Math.random()*10)
        return math > 5 ? resolve("Success") : reject("Fail")
    })
}

module.exports = {sum , avg , pullInfo}
