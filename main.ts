function solveC () {
    gotsolution = true
}
// Checkt, ob solveX "gotsolution" auf wahr setzt
// Setzt den entsprechenden Listenwert auf wahr
// zeigt an ob Aufgabe richtig gelöst oder falsch
// ruft den Spielstand auf
function checksolution (Aufgabe: number) {
    solve(Aufgabe)
    if (gotsolution == true) {
        list[momentaneAufgabe] = true
        basic.showIcon(IconNames.Yes)
        music.playMelody("C E G C5 C5 C5 - - ", 500)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.No)
            basic.pause(20)
            basic.clearScreen()
            music.playTone(523, music.beat(BeatFraction.Sixteenth))
        }
    }
    AnzeigeSpielstand()
}
function solveJ () {
    gotsolution = true
}
function solveE () {
    gotsolution = true
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
            } else {
            	
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
function solveD () {
    gotsolution = true
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
        radio.setGroup(1)
        radio.sendNumber(0)
        basic.showIcon(IconNames.Heart)
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
function solveF () {
    gotsolution = true
}
input.onButtonPressed(Button.B, function () {
    if (solvingnow == false) {
        music.playTone(659, music.beat(BeatFraction.Sixteenth))
        solvingnow = true
        checksolution(momentaneAufgabe)
    } else {
    	
    }
})
function solveA () {
    if (solvingnow == true) {
        ZahleingabeCounter = 0
        basic.showNumber(ZahleingabeCounter)
        led.plot(4, 4)
        while (!(input.logoIsPressed())) {
            if (input.buttonIsPressed(Button.A)) {
                ZahleingabeCounter += 1
                music.playTone(988, music.beat(BeatFraction.Sixteenth))
                basic.showNumber(ZahleingabeCounter)
            }
        }
        if (ZahleingabeCounter == 3) {
            gotsolution = true
        }
    }
}
function AnzeigeSpielstand () {
    AnzeigeSpielstandAktiv = true
    basic.clearScreen()
    for (let Index = 0; Index <= 4; Index++) {
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
function solveB () {
    gotsolution = true
}
function SOS () {
    basic.clearScreen()
    music.setBuiltInSpeakerEnabled(true)
    for (let index = 0; index < 3; index++) {
        led.plot(2, 2)
        music.playTone(262, music.beat(BeatFraction.Half))
        led.unplot(2, 2)
        music.rest(music.beat(BeatFraction.Half))
    }
    music.rest(music.beat(BeatFraction.Double))
    for (let index = 0; index < 3; index++) {
        led.plot(2, 2)
        music.playTone(262, music.beat(BeatFraction.Double))
        led.unplot(2, 2)
        music.rest(music.beat(BeatFraction.Half))
    }
    music.rest(music.beat(BeatFraction.Double))
    for (let index = 0; index < 3; index++) {
        led.plot(2, 2)
        music.playTone(262, music.beat(BeatFraction.Half))
        led.unplot(2, 2)
        music.rest(music.beat(BeatFraction.Half))
    }
    music.setBuiltInSpeakerEnabled(false)
}
function HaenschenKlein () {
    music.setBuiltInSpeakerEnabled(true)
    music.setVolume(255)
    music.playMelody("G E E - F D D - ", 120)
    music.playMelody("C D E F G G G - ", 120)
    music.playMelody("G E E - F D D - ", 120)
    music.playMelody("C E G G C C C - ", 120)
    music.setBuiltInSpeakerEnabled(false)
}
let ZahleingabeCounter = 0
let gotsolution = false
let AnzeigeSpielstandAktiv = false
let momentaneAufgabe = 0
let solvingnow = false
let list: boolean[] = []
let AnzahlAufgaben = 0
AnzahlAufgaben = 10
basic.showIcon(IconNames.Angry)
for (let momentaneAufgabe = 0; momentaneAufgabe <= AnzahlAufgaben - 1; momentaneAufgabe++) {
    list.push(false)
}
solvingnow = false
let gewonnen = false
momentaneAufgabe = AnzahlAufgaben - 1
AnzeigeSpielstandAktiv = false
