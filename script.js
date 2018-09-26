function random(numb) {
    var tamp;
    tamp = Math.floor((Math.random() * numb) + 1);
    return tamp.toString();
}
function createNum() {
    var CRindex;
    var num;
    var CRtarget = "#square";
    CRcheck = false;
    while (CRcheck == false) {
        CRindex = random(16);
        num = random(2);
        num = num * 2;
        CRtarget += CRindex;
        if ($(CRtarget).text() == "") {
            $(CRtarget).text(num);
            CRcheck = true;
        }
        CRtarget = "#square";
    }
}
function colorChange() {
    var CCtarget = "#square";
    for (var i = 1; i < 17; i++) {
        CCtarget += i.toString();
        if ($(CCtarget).text() == "") {
            $(CCtarget).css("background-color", "blanchedalmond");
        }
        if ($(CCtarget).text() == "2") {
            $(CCtarget).css("background-color", "grey");
            $(CCtarget).css("font-size", "100px");
            $(CCtarget).css("padding-top", "0px");
        }
        if ($(CCtarget).text() == "4") {
            $(CCtarget).css("background-color", "#ffdd99");
            $(CCtarget).css("font-size", "100px");
            $(CCtarget).css("padding-top", "0px");
        }
        if ($(CCtarget).text() == "8") {
            $(CCtarget).css("background-color", "#ffad33");
            $(CCtarget).css("font-size", "100px");
            $(CCtarget).css("padding-top", "0px");
        }
        if ($(CCtarget).text() == "16") {
            $(CCtarget).css("background-color", "#ff471a");
            $(CCtarget).css("font-size", "100px");
            $(CCtarget).css("padding-top", "0px");
        }
        if ($(CCtarget).text() == "32") {
            $(CCtarget).css("background-color", "#99ff33");
            $(CCtarget).css("font-size", "100px");
            $(CCtarget).css("padding-top", "0px");
        }
        if ($(CCtarget).text() == "64") {
            $(CCtarget).css("background-color", "#4d79ff");
            $(CCtarget).css("font-size", "100px");
            $(CCtarget).css("padding-top", "0px");
        }
        if ($(CCtarget).text() == "128") {
            $(CCtarget).css("background-color", "#ff66b3");
            $(CCtarget).css("font-size", "70px");
            $(CCtarget).css("padding-top", "15px");
        }
        if ($(CCtarget).text() == "256") {
            $(CCtarget).css("background-color", "#996633");
            $(CCtarget).css("font-size", "70px");
            $(CCtarget).css("padding-top", "15px");
        }
        if ($(CCtarget).text() == "512") {
            $(CCtarget).css("background-color", "#00ffff");
            $(CCtarget).css("font-size", "70px");
            $(CCtarget).css("padding-top", "15px");
        }
        if ($(CCtarget).text() == "1024") {
            $(CCtarget).css("background-color", "#000066");
            $(CCtarget).css("font-size", "50px");
            $(CCtarget).css("padding-top", "30px");
        }
        if ($(CCtarget).text() == "2048") {
            $(CCtarget).css("background-color", "#ffff00");
            $(CCtarget).css("font-size", "50px");
            $(CCtarget).css("padding-top", "30px");
            alert("Bravo tu a atteint le maximum")
        }
        CCtarget = "#square";
    }
}
function startGame() {
    var STtarget = "#square";
    for (var i = 0; i < 17; i++) {
        STtarget += i.toString();
        $(STtarget).text("");
        STtarget = "#square";
    }
    createNum()
    createNum()
}
function moveRight() {
    var move = false
    var target = "#square"
    var targetd = "#square"
    var tamp = ""
    for (var j = 0; j < 4; j++) {
        for (var i = 3; i > 0; i--) {
            target += i.toString();
            if ($(target).text() != "") {
                targetd += (i + 1).toString()
                if ($(targetd).text() == "") {
                    tamp = $(target).text();
                    $(targetd).text(tamp);
                    $(target).text("");
                    move = true;
                }
                else if ($(targetd).text() == $(target).text()) {
                    var double
                    var doubleSTR
                    doubleSTR = $(targetd).text()
                    double = parseInt(doubleSTR)
                    double = double * 2
                    doubleSTR = double.toString()
                    $(targetd).text(doubleSTR)
                    $(target).text("")
                    move = true;
                }
            }
            targetd = "#square"
            target = "#square";
        }
        for (var i = 7; i > 4; i--) {
            target += i.toString();
            if ($(target).text() != "") {
                targetd += (i + 1).toString()
                if ($(targetd).text() == "") {
                    tamp = $(target).text();
                    $(targetd).text(tamp);
                    $(target).text("");
                    move = true;
                }
                else if ($(targetd).text() == $(target).text()) {
                    var double
                    var doubleSTR
                    doubleSTR = $(targetd).text()
                    double = parseInt(doubleSTR)
                    double = double * 2
                    doubleSTR = double.toString()
                    $(targetd).text(doubleSTR)
                    $(target).text("")
                    move = true;
                }
            }
            targetd = "#square"
            target = "#square";
        }
        for (var i = 11; i > 8; i--) {
            target += i.toString();
            if ($(target).text() != "") {
                targetd += (i + 1).toString()
                if ($(targetd).text() == "") {
                    tamp = $(target).text();
                    $(targetd).text(tamp);
                    $(target).text("");
                    move = true;
                }
                else if ($(targetd).text() == $(target).text()) {
                    var double
                    var doubleSTR
                    doubleSTR = $(targetd).text()
                    double = parseInt(doubleSTR)
                    double = double * 2
                    doubleSTR = double.toString()
                    $(targetd).text(doubleSTR)
                    $(target).text("")
                    move = true;
                }
            }
            targetd = "#square"
            target = "#square";
        }
        for (var i = 15; i > 12; i--) {
            target += i.toString();
            if ($(target).text() != "") {
                targetd += (i + 1).toString()
                if ($(targetd).text() == "") {
                    tamp = $(target).text();
                    $(targetd).text(tamp);
                    $(target).text("");
                    move = true;
                }
                else if ($(targetd).text() == $(target).text()) {
                    var double
                    var doubleSTR
                    doubleSTR = $(targetd).text()
                    double = parseInt(doubleSTR)
                    double = double * 2
                    doubleSTR = double.toString()
                    $(targetd).text(doubleSTR)
                    $(target).text("")
                    move = true;
                }
            }
            targetd = "#square"
            target = "#square";
        }
    }
    return move
}
function moveLeft() {
    var move = false
    var target = "#square"
    var targetg = "#square"
    var tamp = ""
    for (var j = 0; j < 3; j++) {
        for (var i = 2; i < 5; i++) {
            target += i.toString();
            if ($(target).text() != "") {
                targetg += (i - 1).toString()
                if ($(targetg).text() == "") {
                    tamp = $(target).text();
                    $(targetg).text(tamp);
                    $(target).text("");
                    move = true;
                }
                else if ($(targetg).text() == $(target).text()) {
                    var double
                    var doubleSTR
                    doubleSTR = $(targetg).text()
                    double = parseInt(doubleSTR)
                    double = double * 2
                    doubleSTR = double.toString()
                    $(targetg).text(doubleSTR)
                    $(target).text("")
                    move = true;
                }
            }
            targetg = "#square"
            target = "#square";
        }
        for (var i = 6; i < 9; i++) {
            target += i.toString();
            if ($(target).text() != "") {
                targetg += (i - 1).toString()
                if ($(targetg).text() == "") {
                    tamp = $(target).text();
                    $(targetg).text(tamp);
                    $(target).text("");
                    move = true;
                }
                else if ($(targetg).text() == $(target).text()) {
                    var double
                    var doubleSTR
                    doubleSTR = $(targetg).text()
                    double = parseInt(doubleSTR)
                    double = double * 2
                    doubleSTR = double.toString()
                    $(targetg).text(doubleSTR)
                    $(target).text("")
                    move = true;
                }
            }
            targetg = "#square"
            target = "#square";
        }
        for (var i = 10; i < 13; i++) {
            target += i.toString();
            if ($(target).text() != "") {
                targetg += (i - 1).toString()
                if ($(targetg).text() == "") {
                    tamp = $(target).text();
                    $(targetg).text(tamp);
                    $(target).text("");
                    move = true;
                }
                else if ($(targetg).text() == $(target).text()) {
                    var double
                    var doubleSTR
                    doubleSTR = $(targetg).text()
                    double = parseInt(doubleSTR)
                    double = double * 2
                    doubleSTR = double.toString()
                    $(targetg).text(doubleSTR)
                    $(target).text("")
                    move = true;
                }
            }
            targetg = "#square"
            target = "#square";
        }
        for (var i = 14; i < 17; i++) {
            target += i.toString();
            if ($(target).text() != "") {
                targetg += (i - 1).toString()
                if ($(targetg).text() == "") {
                    tamp = $(target).text();
                    $(targetg).text(tamp);
                    $(target).text("");
                    move = true;
                }
                else if ($(targetg).text() == $(target).text()) {
                    var double
                    var doubleSTR
                    doubleSTR = $(targetg).text()
                    double = parseInt(doubleSTR)
                    double = double * 2
                    doubleSTR = double.toString()
                    $(targetg).text(doubleSTR)
                    $(target).text("")
                    move = true;
                }
            }
            targetg = "#square"
            target = "#square";
        }
    }
    return move
}
function moveTop() {
    var move = false
    var target = "#square"
    var targetd = "#square"
    var tamp = ""
    for (var j = 0; j < 4; j++) {
        for (var i = 5; i < 17; i++) {
            target += i.toString();
            if ($(target).text() != "") {
                targetd += (i - 4).toString()
                if ($(targetd).text() == "") {
                    tamp = $(target).text();
                    $(targetd).text(tamp);
                    $(target).text("");
                    move = true;
                }
                else if ($(targetd).text() == $(target).text()) {
                    var double
                    var doubleSTR
                    doubleSTR = $(targetd).text()
                    double = parseInt(doubleSTR)
                    double = double * 2
                    doubleSTR = double.toString()
                    $(targetd).text(doubleSTR)
                    $(target).text("")
                    move = true;
                }
            }
            targetd = "#square"
            target = "#square";
        }
    }
    return move
}
function moveDown() {
    var move = false
    var target = "#square"
    var targetd = "#square"
    var tamp = ""
    for (var j = 0; j < 4; j++) {
        for (var i = 12; i > 0; i--) {
            target += i.toString();
            if ($(target).text() != "") {
                targetd += (i + 4).toString()
                if ($(targetd).text() == "") {
                    tamp = $(target).text();
                    $(targetd).text(tamp);
                    $(target).text("");
                    move = true;
                }
                else if ($(targetd).text() == $(target).text()) {
                    var double
                    var doubleSTR
                    doubleSTR = $(targetd).text()
                    double = parseInt(doubleSTR)
                    double = double * 2
                    doubleSTR = double.toString()
                    $(targetd).text(doubleSTR)
                    $(target).text("")
                    move = true;
                }
            }
            targetd = "#square"
            target = "#square";
        }
    }
    return move
}
function checkEndGame() {
    var count = 0;
    var CGtarget = "#square";
    var CGtargetT = "#square";
    var CGtargetD = "#square";
    var CGtargetR = "#square";
    var CGtargetL = "#square";
    for (var i = 1; i < 17; i++) {
        CGtarget += i.toString();
        if ($(CGtarget).text() != "") {
            count += 1;
        }
        CGtarget = "#square";
    }
    if (count == 16) {
        count = 0;
        for (var i = 0; i < 17; i++) {
            CGtarget += i.toString();
            CGtargetT += (i - 4).toString();
            CGtargetD += (i + 4).toString();
            CGtargetR += (i + 1).toString();
            CGtargetL += (i - 1).toString();
            if (CGtarget == "#square4" || CGtarget == "#square8" || CGtarget == "#square12") {
                if ($(CGtarget).text() != $(CGtargetT).text() &&
                    $(CGtarget).text() != $(CGtargetD).text() &&
                    $(CGtarget).text() != $(CGtargetL).text()) {
                    count++;
                }
            }
            else if (CGtarget == "#square5" || CGtarget == "#square9" || CGtarget == "#square13") {
                if ($(CGtarget).text() != $(CGtargetT).text() &&
                    $(CGtarget).text() != $(CGtargetD).text() &&
                    $(CGtarget).text() != $(CGtargetR).text()) {
                    count++;
                }
            }
            else {
                if ($(CGtarget).text() != $(CGtargetT).text() &&
                    $(CGtarget).text() != $(CGtargetD).text() &&
                    $(CGtarget).text() != $(CGtargetR).text() &&
                    $(CGtarget).text() != $(CGtargetL).text()) {
                    count++;
                }
            }
            CGtarget = "#square";
            CGtargetT = "#square";
            CGtargetD = "#square";
            CGtargetR = "#square";
            CGtargetL = "#square";
            console.log(count)
        }
        if (count == 16) {
            alert("Game Over !")
        }
    }
}

$(document).ready(function () {
    startGame();
    colorChange();
    $(document).keypress(function (e) {
        if (e.key == "ArrowRight") {
            if (moveRight()) {
                createNum()
                colorChange()
            }
            else {
                checkEndGame()
            }
        }
        if (e.key == "ArrowLeft") {
            if (moveLeft()) {
                createNum()
                colorChange()
            }
            else {
                checkEndGame()
            }
        }
        if (e.key == "ArrowUp") {
            if (moveTop()) {
                createNum()
                colorChange()
            }
            else {
                checkEndGame()
            }
        }
        if (e.key == "ArrowDown") {
            if (moveDown()) {
                createNum()
                colorChange()
            }
            else {
                checkEndGame()
            }
        }
    })
});
