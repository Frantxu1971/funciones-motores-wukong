function giro_izquierda2 () {
    wuKong.setAllMotor(0, 100)
    basic.pause(500)
    wuKong.stopAllMotor()
}
function hacia_delante () {
    wuKong.setAllMotor(100, 100)
    basic.pause(500)
    wuKong.stopAllMotor()
}
input.onButtonPressed(Button.A, function () {
    hacia_delante()
})
function giro_izquierda () {
    wuKong.setAllMotor(0, 100)
    basic.pause(500)
    wuKong.stopAllMotor()
}
function giro_derecha2 () {
    wuKong.setAllMotor(100, 0)
    basic.pause(500)
    wuKong.stopAllMotor()
}
input.onButtonPressed(Button.AB, function () {
	
})
function HAcia_atrás () {
    wuKong.setAllMotor(-100, -100)
    basic.pause(500)
    wuKong.stopAllMotor()
}
input.onButtonPressed(Button.B, function () {
    HAcia_atrás()
})
function giro_derecha () {
    wuKong.setAllMotor(100, 0)
    basic.pause(500)
    wuKong.stopAllMotor()
}
