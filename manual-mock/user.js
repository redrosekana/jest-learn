function readUser(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve([
                {
                    id:1,
                    fname: "David"
                },
                {
                    id:2,
                    fname: "Jusmin"
                },
            ])
        },2000)
    })
}

module.exports = readUser