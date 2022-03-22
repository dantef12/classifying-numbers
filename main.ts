input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    if (number > 0) {
        basic.showString("P")
    } else if (number < 0) {
        basic.showString("N")
    } else {
        basic.showString("Z")
    }
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (number % 2 == 2 % 2) {
        basic.showString("even")
    } else {
        basic.showString("odd")
    }
})
let number = 0
number = 0
basic.showNumber(number)
