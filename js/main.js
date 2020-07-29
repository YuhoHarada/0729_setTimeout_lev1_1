function myfunc(elt) {
    console.log(`Start Warten für ${elt/1000} Sekunden...`)
    setTimeout(() => {
        console.log(`Erledigt. Du hast ${elt/1000} Sekunden verschwendet.`)
    }, elt)
}

myfunc(3000)

