basic.forever(function () {
    for (let index = 0; index <= 1000; index++) {
        serial.writeValue("current temp", input.temperature())
        basic.pause(1)
    }
})
