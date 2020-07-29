let count = 10
let timer = setInterval(() => {
    if (count == 0) {
        console.log("Endlich Feierabend!")
        clearInterval(timer)
        return
    }
    console.log(count)
    count--
}, 1000)
