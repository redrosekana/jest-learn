function power(a){
    console.log("Power Test")
    return a*a
}

function add(a,b){
    console.log("Add Test")
    return a+b
}

function fetchData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Ok")
        },3000)
    })
}

module.exports = {power , add , fetchData}
