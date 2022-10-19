let xvalue = 0
input.onButtonPressed(Button.AB, function () {
    while (true) {
        for (let index = 0; index < 5; index++) {
            basic.clearScreen()
            led.plot(xvalue, 0)
            basic.pause(100)
            xvalue += 1
        }
        if (xvalue == 5) {
            for (let index = 0; index < 5; index++) {
                xvalue += -1
                led.toggle(xvalue, 0)
                basic.pause(100)
                basic.clearScreen()
            }
        }
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (true) {
    	
    }
})
