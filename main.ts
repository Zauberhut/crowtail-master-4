// Logikgatter AND anschliessen:
// P12 + P16 = Eingänge
// P8  = Ausgang
function solveC () {
    if (solvingnow == true) {
        basic.clearScreen()
        basic.pause(100)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(3, 4)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        led.plot(4, 3)
        led.plot(4, 4)
        music.playTone(392, music.beat(BeatFraction.Sixteenth))
        basic.pause(1000)
        if (pins.digitalReadPin(DigitalPin.P8) == 0) {
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P16, 1)
            led.unplot(4, 4)
            music.playTone(349, music.beat(BeatFraction.Sixteenth))
            basic.pause(1000)
            if (pins.digitalReadPin(DigitalPin.P8) == 0) {
                pins.digitalWritePin(DigitalPin.P12, 1)
                pins.digitalWritePin(DigitalPin.P16, 0)
                led.unplot(4, 3)
                led.plot(4, 4)
                music.playTone(330, music.beat(BeatFraction.Sixteenth))
                basic.pause(1000)
                if (pins.digitalReadPin(DigitalPin.P8) == 0) {
                    pins.digitalWritePin(DigitalPin.P12, 1)
                    pins.digitalWritePin(DigitalPin.P16, 1)
                    led.plot(4, 3)
                    led.plot(4, 4)
                    music.playTone(392, music.beat(BeatFraction.Sixteenth))
                }
                if (pins.digitalReadPin(DigitalPin.P8) == 1) {
                    led.plot(4, 2)
                    basic.pause(1000)
                    gotsolution = true
                } else {
                    basic.pause(1000)
                }
            }
        }
    }
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
// NOTFALL Lösungsausgabe für den Lehrer micro:bit
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 12345) {
        for (let index = 0; index < 4; index++) {
            music.playMelody("G C5 G C5 G - - - ", 120)
            basic.showString("hacked! code= XYZ")
        }
    }
})
// Checkt, ob solveX "gotsolution" auf wahr setzt
// - Setzt den entsprechenden Listenwert auf wahr
// - zeigt an ob Aufgabe richtig gelöst oder falsch
// - ruft den Spielstand auf
function checksolution (Aufgabe: number) {
    solve(Aufgabe)
    if (gotsolution == true) {
        list[momentaneAufgabe] = true
        basic.showIcon(IconNames.Yes)
        music.playMelody("C E G C5 C5 C5 - - ", 500)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.No)
            music.playTone(523, music.beat(BeatFraction.Sixteenth))
            basic.clearScreen()
            basic.pause(100)
        }
    }
    AnzeigeSpielstand()
}
function solveJ () {
    gotsolution = true
}
// Alarmanlage mit Magnetschalter
// Magnetschalter muss an P0 angeschlossen und aktiviert sein 
function solveE () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        gotsolution = true
    }
}
input.onButtonPressed(Button.A, function () {
    if (solvingnow == false) {
        if (momentaneAufgabe < AnzahlAufgaben) {
            if (momentaneAufgabe == AnzahlAufgaben - 1) {
                momentaneAufgabe = 0
                basic.showString("A")
            } else if (momentaneAufgabe == 0) {
                momentaneAufgabe = 1
                basic.showString("B")
            } else if (momentaneAufgabe == 1) {
                momentaneAufgabe += 1
                basic.showString("C")
            } else if (momentaneAufgabe == 2) {
                momentaneAufgabe += 1
                basic.showString("D")
            } else if (momentaneAufgabe == 3) {
                momentaneAufgabe += 1
                basic.showString("E")
            } else if (momentaneAufgabe == 4) {
                momentaneAufgabe += 1
                basic.showString("F")
            } else if (momentaneAufgabe == 5) {
                momentaneAufgabe += 1
                basic.showString("G")
            } else if (momentaneAufgabe == 6) {
                momentaneAufgabe += 1
                basic.showString("H")
            } else if (momentaneAufgabe == 7) {
                momentaneAufgabe += 1
                basic.showString("I")
            } else if (momentaneAufgabe == 8) {
                momentaneAufgabe += 1
                basic.showString("J")
            }
        } else {
            momentaneAufgabe = AnzahlAufgaben
        }
    }
})
function solveH () {
    gotsolution = true
}
function solveI () {
    gotsolution = true
}
// Lautstärkeanzeiger mit Servo:
// Lautstärkesensor an P0. Pegel > 30
function solveD () {
    pins.analogWritePin(AnalogPin.P0, 0)
    basic.pause(100)
    if (pins.analogReadPin(AnalogPin.P0) > 50) {
        gotsolution = true
    }
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    solvingnow = false
}
function solveG () {
    gotsolution = true
}
function hacked () {
    ZahleingabeCounter = 0
    for (let momentaneAufgabe = 0; momentaneAufgabe <= list.length; momentaneAufgabe++) {
        if (list[momentaneAufgabe] == true) {
            ZahleingabeCounter += 1
        }
    }
    if (ZahleingabeCounter == AnzahlAufgaben) {
        radio.sendNumber(12345)
        for (let index = 0; index < 20; index++) {
            basic.showString("HACKED! code= XYZ")
        }
    }
}
// ruft den überprüfungsprozess allgemein auf
function solve (aufgabennummer: number) {
    gotsolution = false
    if (aufgabennummer == 0) {
        solveA()
    }
    if (aufgabennummer == 1) {
        solveB()
    }
    if (aufgabennummer == 2) {
        solveC()
    }
    if (aufgabennummer == 3) {
        solveD()
    }
    if (aufgabennummer == 4) {
        solveE()
    }
    if (aufgabennummer == 5) {
        solveF()
    }
    if (aufgabennummer == 6) {
        solveG()
    }
    if (aufgabennummer == 7) {
        solveH()
    }
    if (aufgabennummer == 8) {
        solveI()
    }
    if (aufgabennummer == 9) {
        solveJ()
    }
    solvingnow = false
}
// Distanzmessung mit Ultraschall: Distanzsensor an P13/P15, Gemessener Abstand zwischen 11 und 4 cm
function solveF () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    // Distanzsensor:
    // Wenn der Distanzsensor oben links angeschlossen ist und die Distanz weniger als 1 cm misst.
    ZahleingabeCounter = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
    if (ZahleingabeCounter > 11) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (ZahleingabeCounter < 4) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
        gotsolution = true
    }
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Darkweb") {
        gotmessage = true
        basic.showLeds(`
            # . # . #
            # . # . .
            # . . # #
            . # . . .
            . . # # #
            `)
        basic.pause(10000)
        gotmessage = false
    }
})
input.onButtonPressed(Button.B, function () {
    if (solvingnow == false) {
        music.playTone(659, music.beat(BeatFraction.Sixteenth))
        solvingnow = true
        checksolution(momentaneAufgabe)
    }
})
// Schrittzähler:
// Microbit acht mal schütteln 
function solveA () {
    if (solvingnow == true) {
        ZahleingabeCounter = 0
        basic.showNumber(ZahleingabeCounter)
        led.plot(4, 4)
        while (!(input.buttonIsPressed(Button.A))) {
            if (input.isGesture(Gesture.Shake)) {
                ZahleingabeCounter += 1
                music.playTone(988, music.beat(BeatFraction.Sixteenth))
                basic.showNumber(ZahleingabeCounter)
            }
        }
        if (ZahleingabeCounter == 8) {
            gotsolution = true
        } else {
            solvingnow = false
        }
    }
    ZahleingabeCounter = 0
}
function AnzeigeSpielstand () {
    AnzeigeSpielstandAktiv = true
    basic.clearScreen()
    // Mittellinie passt sich der Anzahl Aufgaben an.
    // 
    for (let Index = 0; Index <= AnzahlAufgaben / 2 - 1; Index++) {
        led.plot(2, Index)
    }
    if (list[0] == true) {
        music.playTone(262, music.beat(BeatFraction.Eighth))
        for (let index = 0; index < 4; index++) {
            led.unplot(0, 0)
            led.unplot(1, 0)
            basic.pause(100)
            led.plot(0, 0)
            led.plot(1, 0)
            basic.pause(100)
        }
    }
    if (list[1] == true) {
        music.playTone(294, music.beat(BeatFraction.Eighth))
        for (let index = 0; index < 4; index++) {
            led.unplot(3, 0)
            led.unplot(4, 0)
            basic.pause(100)
            led.plot(3, 0)
            led.plot(4, 0)
            basic.pause(100)
        }
    }
    if (list[2] == true) {
        music.playTone(330, music.beat(BeatFraction.Eighth))
        for (let index = 0; index < 4; index++) {
            led.unplot(0, 1)
            led.unplot(1, 1)
            basic.pause(100)
            led.plot(0, 1)
            led.plot(1, 1)
            basic.pause(100)
        }
    }
    if (list[3] == true) {
        music.playTone(349, music.beat(BeatFraction.Eighth))
        for (let index = 0; index < 4; index++) {
            led.unplot(3, 1)
            led.unplot(4, 1)
            basic.pause(100)
            led.plot(3, 1)
            led.plot(4, 1)
            basic.pause(100)
        }
    }
    if (list[4] == true) {
        music.playTone(392, music.beat(BeatFraction.Eighth))
        for (let index = 0; index < 4; index++) {
            led.unplot(0, 2)
            led.unplot(1, 2)
            basic.pause(100)
            led.plot(0, 2)
            led.plot(1, 2)
            basic.pause(100)
        }
    }
    if (list[5] == true) {
        music.playTone(440, music.beat(BeatFraction.Eighth))
        for (let index = 0; index < 4; index++) {
            led.unplot(3, 2)
            led.unplot(4, 2)
            basic.pause(100)
            led.plot(3, 2)
            led.plot(4, 2)
            basic.pause(100)
        }
    }
    if (list[6] == true) {
        music.playTone(494, music.beat(BeatFraction.Eighth))
        for (let index = 0; index < 4; index++) {
            led.unplot(0, 3)
            led.unplot(1, 3)
            basic.pause(100)
            led.plot(0, 3)
            led.plot(1, 3)
            basic.pause(100)
        }
    }
    if (list[7] == true) {
        music.playTone(523, music.beat(BeatFraction.Eighth))
        for (let index = 0; index < 4; index++) {
            led.unplot(3, 3)
            led.unplot(4, 3)
            basic.pause(100)
            led.plot(3, 3)
            led.plot(4, 3)
            basic.pause(100)
        }
    }
    if (list[8] == true) {
        music.playTone(587, music.beat(BeatFraction.Eighth))
        for (let index = 0; index < 4; index++) {
            led.unplot(0, 4)
            led.unplot(1, 4)
            basic.pause(100)
            led.plot(0, 4)
            led.plot(1, 4)
            basic.pause(100)
        }
    }
    if (list[9] == true) {
        music.playTone(659, music.beat(BeatFraction.Eighth))
        for (let index = 0; index < 4; index++) {
            led.unplot(3, 4)
            led.unplot(4, 4)
            basic.pause(100)
            led.plot(3, 4)
            led.plot(4, 4)
            basic.pause(100)
        }
    }
    solvingnow = false
    AnzeigeSpielstandAktiv = false
    hacked()
}
// Micro-Chat:
// Funksignal empfangen auf Kanal 123: "Darkweb"
function solveB () {
    if (gotmessage == true) {
        gotsolution = true
    }
}
let ZahleingabeCounter = 0
let gotsolution = false
let gotmessage = false
let AnzeigeSpielstandAktiv = false
let momentaneAufgabe = 0
let solvingnow = false
let list: boolean[] = []
let AnzahlAufgaben = 0
AnzahlAufgaben = 6
basic.showIcon(IconNames.Angry)
for (let momentaneAufgabe = 0; momentaneAufgabe <= AnzahlAufgaben - 1; momentaneAufgabe++) {
    list.push(false)
}
solvingnow = false
let gewonnen = false
momentaneAufgabe = AnzahlAufgaben - 1
AnzeigeSpielstandAktiv = false
radio.setGroup(123)
gotmessage = false
