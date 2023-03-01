pressure_sensor = 0

def on_forever():
    global pressure_sensor
    pressure_sensor = pins.digital_read_pin(DigitalPin.P1)
    if pressure_sensor == 1:
        basic.show_icon(IconNames.YES)
    else:
        basic.show_icon(IconNames.NO)
basic.forever(on_forever)
