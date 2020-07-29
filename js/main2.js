let timer = setInterval(() => {
    let date = new Date()
    let hour = ("0" + date.getHours()).slice(-2)
    let minute = ("0" + date.getMinutes()).slice(-2)
    let second = ("0" + date.getSeconds()).slice(-2)
    console.log(`${hour}:${minute}:${second}`)
}, 1000)