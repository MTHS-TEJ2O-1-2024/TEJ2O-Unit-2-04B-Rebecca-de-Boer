/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Rebecca de Boer
 * Created on: Sep 2024
 * This program Tells tempeture
*/

basic.clearScreen()
basic.pause(1000)


let tempeture = input.temperature()

input.onButtonPressed(Button.A, function () {
    tempeture = input.temperature()
    basic.showNumber(tempeture)
})
