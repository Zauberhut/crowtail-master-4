def solveC():
    list2[Index2] = True
def checksolution(num: number):
    global gotsolution
    solve(num)
    if gotsolution == True:
        music.set_built_in_speaker_enabled(True)
        music.play_melody("C E G C5 C5 C5 - - ", 500)
        basic.show_icon(IconNames.YES)
        gotsolution = True
    else:
        music.play_tone(131, music.beat(BeatFraction.WHOLE))
        basic.show_icon(IconNames.SKULL)
        gotsolution = False
    AnzeigeSpielstand()
def solveJ():
    pass
def solveE():
    list2[4] = True

def on_button_pressed_a():
    global Index2
    if solvingnow == False:
        if Index2 > 7:
            Index2 = 0
            basic.show_string("A")
        elif Index2 == 0:
            Index2 += 1
            basic.show_string("B")
        elif Index2 == 1:
            Index2 += 1
            basic.show_string("C")
        elif Index2 == 2:
            Index2 += 1
            basic.show_string("D")
        elif Index2 == 3:
            Index2 += 1
            basic.show_string("E")
        elif Index2 == 4:
            Index2 += 1
            basic.show_string("F")
        elif Index2 == 5:
            Index2 += 1
            basic.show_string("G")
        elif Index2 == 6:
            Index2 += 1
            basic.show_string("H")
        else:
            Index2 += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def solveH():
    list2[7] = True
def solveI():
    pass
def solveD():
    list2[3] = True
def solveG():
    list2[6] = True
def hacked():
    global gewonnen
    Index = 0
    while Index <= len(list2):
        if list2[Index] == True or gewonnen == True:
            gewonnen = True
        else:
            gewonnen = False
        Index += 1
    if gewonnen:
        basic.show_icon(IconNames.HEART)
# ruft den überprüfungsprozess allgemein auf
def solve(num: number):
    global solvingnow
    solvingnow = True
    if num == 0:
        solveA()
    if num == 1:
        solveB()
    if num == 2:
        solveC()
    if num == 3:
        solveD()
    if num == 4:
        solveE()
    if num == 5:
        solveF()
    if num == 6:
        solveG()
    if num == 7:
        solveH()
    if num == 8:
        solveI()
    if num == 9:
        solveJ()
    solvingnow = False
    AnzeigeSpielstand()
def solveF():
    list2[5] = True

def on_button_pressed_b():
    if solvingnow == False:
        solve(Index2)
input.on_button_pressed(Button.B, on_button_pressed_b)

def solveA():
    global ZahleingabeCounter, gotsolution, solvingnow
    if solvingnow == True:
        ZahleingabeCounter = 0
        basic.show_number(ZahleingabeCounter)
        while not (input.button_is_pressed(Button.A)):
            if input.button_is_pressed(Button.B):
                ZahleingabeCounter += 1
                basic.show_number(ZahleingabeCounter)
        if ZahleingabeCounter == 3:
            basic.show_icon(IconNames.YES)
            list2[Index2] = True
            gotsolution = True
            solvingnow = False
        else:
            for index in range(4):
                basic.show_icon(IconNames.NO)
                basic.pause(50)
                basic.clear_screen()
                basic.pause(50)
            solvingnow = False
def AnzeigeSpielstand():
    global AnzeigeSpielstandAktiv
    AnzeigeSpielstandAktiv = True
    music.set_built_in_speaker_enabled(True)
    music.set_volume(255)
    basic.clear_screen()
    if list2[0] == True:
        music.play_tone(262, music.beat(BeatFraction.EIGHTH))
        for index2 in range(4):
            led.unplot(0, 0)
            led.unplot(1, 0)
            basic.pause(100)
            led.plot(0, 0)
            led.plot(1, 0)
            basic.pause(100)
    if list2[1] == True:
        music.play_tone(294, music.beat(BeatFraction.EIGHTH))
        for index3 in range(4):
            led.unplot(3, 0)
            led.unplot(4, 0)
            basic.pause(100)
            led.plot(3, 0)
            led.plot(4, 0)
            basic.pause(100)
    if list2[2] == True:
        music.play_tone(330, music.beat(BeatFraction.EIGHTH))
        for index4 in range(4):
            led.unplot(0, 1)
            led.unplot(1, 1)
            basic.pause(100)
            led.plot(0, 1)
            led.plot(1, 1)
            basic.pause(100)
    if list2[3] == True:
        music.play_tone(349, music.beat(BeatFraction.EIGHTH))
        for index5 in range(4):
            led.unplot(3, 1)
            led.unplot(4, 1)
            basic.pause(100)
            led.plot(3, 1)
            led.plot(4, 1)
            basic.pause(100)
    if list2[4] == True:
        music.play_tone(392, music.beat(BeatFraction.EIGHTH))
        for index6 in range(4):
            led.unplot(0, 2)
            led.unplot(1, 2)
            basic.pause(100)
            led.plot(0, 2)
            led.plot(1, 2)
            basic.pause(100)
    if list2[5] == True:
        music.play_tone(440, music.beat(BeatFraction.EIGHTH))
        for index7 in range(4):
            led.unplot(3, 2)
            led.unplot(4, 2)
            basic.pause(100)
            led.plot(3, 2)
            led.plot(4, 2)
            basic.pause(100)
    if list2[6] == True:
        music.play_tone(494, music.beat(BeatFraction.EIGHTH))
        for index8 in range(4):
            led.unplot(0, 3)
            led.unplot(1, 3)
            basic.pause(100)
            led.plot(0, 3)
            led.plot(1, 3)
            basic.pause(100)
    if list2[7] == True:
        music.play_tone(523, music.beat(BeatFraction.EIGHTH))
        for index9 in range(4):
            led.unplot(3, 3)
            led.unplot(4, 3)
            basic.pause(100)
            led.plot(3, 3)
            led.plot(4, 3)
            basic.pause(100)
    if list2[8] == True:
        music.play_tone(587, music.beat(BeatFraction.EIGHTH))
        for index10 in range(4):
            led.unplot(0, 4)
            led.unplot(1, 4)
            basic.pause(100)
            led.plot(0, 4)
            led.plot(1, 4)
            basic.pause(100)
    if list2[9] == True:
        music.play_tone(659, music.beat(BeatFraction.EIGHTH))
        for index11 in range(4):
            led.unplot(3, 4)
            led.unplot(4, 4)
            basic.pause(100)
            led.plot(3, 4)
            led.plot(4, 4)
            basic.pause(100)
    soundExpression.spring.play_until_done()
    AnzeigeSpielstandAktiv = False
    music.set_built_in_speaker_enabled(False)
    hacked()
    if gewonnen == True:
        pass
def solveB():
    list2[Index2] = True
def SOS():
    basic.clear_screen()
    music.set_built_in_speaker_enabled(True)
    for index12 in range(3):
        led.plot(2, 2)
        music.play_tone(262, music.beat(BeatFraction.HALF))
        led.unplot(2, 2)
        music.rest(music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.DOUBLE))
    for index13 in range(3):
        led.plot(2, 2)
        music.play_tone(262, music.beat(BeatFraction.DOUBLE))
        led.unplot(2, 2)
        music.rest(music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.DOUBLE))
    for index14 in range(3):
        led.plot(2, 2)
        music.play_tone(262, music.beat(BeatFraction.HALF))
        led.unplot(2, 2)
        music.rest(music.beat(BeatFraction.HALF))
    music.set_built_in_speaker_enabled(False)
def HaenschenKlein():
    music.set_built_in_speaker_enabled(True)
    music.set_volume(255)
    music.play_melody("G E E - F D D - ", 120)
    music.play_melody("C D E F G G G - ", 120)
    music.play_melody("G E E - F D D - ", 120)
    music.play_melody("C E G G C C C - ", 120)
    music.set_built_in_speaker_enabled(False)
ZahleingabeCounter = 0
AnzeigeSpielstandAktiv = False
Index2 = 0
gewonnen = False
gotsolution = False
solvingnow = False
list2: List[bool] = []
AnzahlAufgaben = 2
basic.show_icon(IconNames.SKULL)
basic.show_string("MASTER:BIT")
basic.show_icon(IconNames.ANGRY)
Index3 = 0
while Index3 <= AnzahlAufgaben:
    list2.append(False)
    Index3 += 1
solvingnow = False
gotsolution = False
gewonnen = False
# unklar für was die Variable Index steht.
Index2 = AnzahlAufgaben
AnzeigeSpielstandAktiv = False
