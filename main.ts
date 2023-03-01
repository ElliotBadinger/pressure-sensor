let pressure_sensor = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(pressure_sensor)
})
basic.forever(function () {
    pressure_sensor = pins.digitalReadPin(DigitalPin.P1)
    if (pressure_sensor == 1) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
