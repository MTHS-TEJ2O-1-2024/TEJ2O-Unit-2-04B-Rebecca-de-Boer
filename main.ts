/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Rebecca de Boer
 * Created on: Sep 2024
 * This program finds temperature.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

input.onButtonPressed(Button.A, function () {
    let tempeture = input.temperature()
    basic.showString('The temperature is: ')
    basic.showNumber(tempeture)
    basic.showString(' C.')
})
