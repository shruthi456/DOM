let digitalClock = () => {
    let dt = new Date()
    let ct = dt.toLocaleTimeString()
    console.log(ct)
    document.getElementById('abc').innerHTML = ct
}

setInterval(digitalClock,1000)
    

