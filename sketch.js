// select html element using its ID:

// let text2 = document.getElementById("text2");
let displaytext = true

let timecount = 0
let music
let musicplay = 0
let sticksound
let stream

let mainwindow = true
let washwindow = false
let homewindow = false
let chiliwindow = false

let fullvision
let washclothes
let home

let introduction
let washclothesstep = 0
let waterstep = 0
let hanginglines
let water1
let water2
let water3
let waterfull
let scoop
let scoop1
let scoop2
let scoop3
let scoop4
let scoopx = 700 / 2.3
let scoopy = 1450 / 2.3

let clothes
let clothes1
let clothes1after
let clothes2
let clothes2after
let clothes3
let clothes3after
let strikeclothes2
let strikeclothes3
let clothesstep = 0
let tshirt
let pants
let skirt
let disx = 0
let disy = 0

let hangclothes
let hangclothesstep = 0
let chooseposition = [0, 0, 0]
let hangp1
let hangp1g2
let hangp1g2y3
let hangp1g3
let hangp1g3y2
let hangp2
let hangp2g1
let hangp2g1y3
let hangp2g3
let hangp2g3y1
let hangp3
let hangp3g1
let hangp3g1y2
let hangp3g2
let hangp3g2y1
let finish

let stick
let astick

let garden
let chili = []
let chilinum = 22
let chilix = []
let chiliy = []
let chilisize = []
let onechili
let chili1
let chili2
let checkdrag = true
let bell
let chilifinish = true
let tinkle
let chiliending
// chnge a css attriute of this element


function preload() {
    fullvision = loadImage("assets/全景.png")
    washclothes = loadImage("assets/洗衣.png")
    home = loadImage("assets/home.png")
    introduction = loadImage("assets/简介.png")
    finish = loadImage("assets/结束语.png")
    water1 = loadImage("assets/水1:3.png")
    water2 = loadImage("assets/水2:3.png")
    water3 = loadImage("assets/水1.png")
    clothes1 = loadImage("assets/衣服2:3.png")
    clothes1after = loadImage("assets/衣服2:3放置后.png")
    clothes2 = loadImage("assets/衣服1:3.png")
    clothes2after = loadImage("assets/衣服1:3放置后.png")
    clothes3 = loadImage("assets/衣服0.png")
    clothes3after = loadImage("assets/衣服0放置后.png")
    strikeclothes2 = loadImage("assets/打衣服2.png")
    strikeclothes3 = loadImage("assets/打衣服3.png")
    stick = loadImage("assets/棒.png")
    scoop1 = loadImage("assets/平勺.png")
    scoop2 = loadImage("assets/半水勺.png")
    scoop3 = loadImage("assets/全水勺.png")
    scoop4 = loadImage("assets/无水侧勺.png")
    tshirt = loadImage("assets/衣服.png")
    pants = loadImage("assets/裤子.png")
    skirt = loadImage("assets/裙子.png")
    hanginglines = loadImage("assets/舀水介绍.png")
    hangclothes = loadImage("assets/晾衣服.png")
    hangno = loadImage("assets/晾未选.png")
    hangp1 = loadImage("assets/晾粉左.png")
    hangp1no = loadImage("assets/晾粉左未选.png")
    hangp1g2 = loadImage("assets/晾粉左绿中.png")
    hangp1g2no = loadImage("assets/晾粉左绿中未选.png")
    hangp1g2y3 = loadImage("assets/晾粉左绿中黄右.png")
    hangp1g3 = loadImage("assets/晾粉左绿右.png")
    hangp1g3no = loadImage("assets/晾粉左绿右未选.png")
    hangp1g3y2 = loadImage("assets/晾粉左绿右黄中.png")
    hangp2 = loadImage("assets/晾粉中.png")
    hangp2no = loadImage("assets/晾粉中未选.png")
    hangp2g1 = loadImage("assets/晾粉中绿左.png")
    hangp2g1no = loadImage("assets/晾粉中绿左未选.png")
    hangp2g1y3 = loadImage("assets/晾粉中绿左黄右.png")
    hangp2g3 = loadImage("assets/晾粉中绿右.png")
    hangp2g3no = loadImage("assets/晾粉中绿右未选.png")
    hangp2g3y1 = loadImage("assets/晾粉中绿右黄左.png")
    hangp3 = loadImage("assets/晾粉右.png")
    hangp3no = loadImage("assets/晾粉右未选.png")
    hangp3g1 = loadImage("assets/晾粉右绿左.png")
    hangp3g1no = loadImage("assets/晾粉右绿左未选.png")
    hangp3g1y2 = loadImage("assets/晾粉右绿左黄中.png")
    hangp3g2 = loadImage("assets/晾粉右绿中.png")
    hangp3g2no = loadImage("assets/晾粉右绿中未选.png")
    hangp3g2y1 = loadImage("assets/晾粉右绿中黄左.png")
    garden = loadImage("assets/花园.png")
    chili1 = loadImage("assets/辣椒1.png")
    chili2 = loadImage("assets/辣椒2.png")
    tinkle = loadImage("assets/tinkle.png")
    chiliinstru = loadImage("assets/chiliinstru.png")
    chiliending = loadImage("assets/辣椒结束语.png")

    music = loadSound("music/music.mp3")
    sticksound = loadSound("music/stick.mp3")
    stream = loadSound("music/stream.mp3")
    bell = loadSound("music/bell.mp3")
    

}


function setup() {
    let cnv = createCanvas(1187.8, 890.4);
    cnv.parent("canvas-parent")
    scoop = new Scoop(scoopx, scoopy, scoop1, scoop2, scoop3, scoop4)
    clothes = new Clothes(300 / 2.3, 1200 / 2.3, tshirt, pants, skirt)
    astick = new Stick(100 / 2.3, 1700 / 2.3, stick)
    for (let i = 0; i < chilinum; i++) {
        if (i <= 4) {
            chilix[i] = random(270, 470)
            chiliy[i] = random(100, 250)
            chilisize[i] = random(0.8, 1.2)
        } else if (i <= 10) {
            chilix[i] = random(750, 950)
            chiliy[i] = random(100, 250)
            chilisize[i] = random(0.8, 1.2)
        } else if (i <= 15) {
            chilix[i] = random(130, 410)
            chiliy[i] = random(450, 530)
            chilisize[i] = random(1, 1.4)
        }
        else {
            chilix[i] = random(850, 1100)
            chiliy[i] = random(500, 680)
            chilisize[i] = random(1, 1.4)
        }
        if (i % 2 == 1) {
            onechili = chili1
        } else {
            onechili = chili2
        }
        chili[i] = new Chili(chilix[i], chiliy[i], chilisize[i], onechili)
    }

}

function draw() {

    music.setVolume(0.4)
    stream.setVolume(0.5)
    bell.setVolume(0.3)
    background(210, 230, 200)
    if (mainwindow == true) {
        mainWindow()
    }
    if (washwindow == true) {
        washWindow()
    }
    if (homewindow == true) {
        homeWindow()
    }
    if (chiliwindow == true) {
        chiliWindow()
    }
    // time()
    // timeDisplay()
    returnButton()
}


function mainWindow() {
    image(fullvision, 0, 0, 1187.8, 890.4);



}

function washWindow() {
    if (washclothesstep == 0) {
        if (waterstep <= 1) {
            image(washclothes, 0, 0, 1187.8, 890.4);
            image(hanginglines, 0, 0, 1187.8, 890.4)
        } else if (1 < waterstep && waterstep <= 4) {
            image(water1, 0, 0, 1187.8, 890.4)
            image(hanginglines, 0, 0, 1187.8, 890.4)
        } else if (4 < waterstep && waterstep <= 7) {
            image(water2, 0, 0, 1187.8, 890.4)
            image(hanginglines, 0, 0, 1187.8, 890.4)
        } else if (7 < waterstep && waterstep < 9) {
            image(water3, 0, 0, 1187.8, 890.4)
        } else if (9 <= waterstep) { washclothesstep = 1 }

        //get water
        scoop.display()
        scoop.update()
        // rect(730/2, 1560/2, 160/2, 100/2)
        // rect(445, 735, 200, 125)

        image(stick, 100 / 2.3, 1700 / 2.3, 840 / 2.3, 218 / 2.3)
        if (timecount == 0) {
            timecount = frameCount
        }
        if (frameCount - timecount <= 500) {
            image(introduction, 0, 0, 1187.8, 890.4)
        }
    } //drag clothes
    else if (washclothesstep == 1) {
        if (clothesstep == 0) {
            image(water3, 0, 0, 1187.8, 890.4)
        } else if (clothesstep == 1) {
            image(clothes1, 0, 0, 1187.8, 890.4)
        } else if (clothesstep == 2) {
            clothes.x = 150 * 2 / 2.3
            clothes.y = 600 * 2 / 2.3
            image(clothes1after, 0, 0, 1187.8, 890.4)
        } else if (clothesstep == 3) {
            image(clothes2, 0, 0, 1187.8, 890.4)
        } else if (clothesstep == 4) {
            clothes.x = 150 * 2 / 2.3
            clothes.y = 600 * 2 / 2.3
            image(clothes2after, 0, 0, 1187.8, 890.4)
        } else if (clothesstep == 5) {
            image(clothes3, 0, 0, 1187.8, 890.4)
        } else if (clothesstep == 6) {
            image(clothes3after, 0, 0, 1187.8, 890.4)
            washclothesstep = 2
            clothesstep = 0
        }
        image(stick, 100 / 2.3, 850 * 2 / 2.3, 420 * 2 / 2.3, 109 * 2 / 2.3)
        image(scoop1, scoopx, scoopy, 290 * 2 / 2.3, 140 * 2 / 2.3)
        clothes.display()
        clothes.update()
    } //hit clothes
    else if (washclothesstep == 2) {
        image(clothes3after, 0, 0, 1187.8, 890.4)
        if (astick.time >= 5) {
            washclothesstep = 3
            astick.time = 0

        }
        image(scoop1, scoopx, scoopy, 290 * 2 / 2.3, 140 * 2 / 2.3)
        astick.display()
        astick.update()

    }//hanging clothes
    else if (washclothesstep == 3) {
        image(hangclothes, 0, 0, 1187.8, 890.4)
        image(stick, 100 / 2.3, 850 * 2 / 2.3, 420 * 2 / 2.3, 109 * 2 / 2.3)
        image(scoop1, scoopx, scoopy, 290 * 2 / 2.3, 140 * 2 / 2.3)
        if (hangclothesstep == 1) {
            image(hangno, 0, 0, 1187.8, 890.4)
            image(stick, 100 / 2.3, 850 * 2 / 2.3, 420 * 2 / 2.3, 109 * 2 / 2.3)
            image(scoop1, scoopx, scoopy, 290 * 2 / 2.3, 140 * 2 / 2.3)
            clothes.display()
            clothes.update()

        } else if (hangclothesstep == 2) {
            if (chooseposition[0] == 1) {
                image(hangp1, 0, 0, 1187.8, 890.4)
            } else if (chooseposition[0] == 2) {
                image(hangp2, 0, 0, 1187.8, 890.4)
            }
            else if (chooseposition[0] == 3) {
                image(hangp3, 0, 0, 1187.8, 890.4)
            }
            image(stick, 100 / 2.3, 850 * 2 / 2.3, 420 * 2 / 2.3, 109 * 2 / 2.3)
            image(scoop1, scoopx, scoopy, 290 * 2 / 2.3, 140 * 2 / 2.3)
        } else if (hangclothesstep == 3) {
            if (chooseposition[0] == 1) {
                image(hangp1no, 0, 0, 1187.8, 890.4)

            } else if (chooseposition[0] == 2) {
                image(hangp2no, 0, 0, 1187.8, 890.4)

            }
            else if (chooseposition[0] == 3) {
                image(hangp3no, 0, 0, 1187.8, 890.4)

            }
            image(stick, 100 / 2.3, 850 * 2 / 2.3, 420 * 2 / 2.3, 109 * 2 / 2.3)
            image(scoop1, scoopx, scoopy, 290 * 2 / 2.3, 140 * 2 / 2.3)
            clothes.display()
            clothes.update()

        } else if (hangclothesstep == 4) {
            if (chooseposition[0] == 1) {

                if (chooseposition[1] == 2) {
                    image(hangp1g2, 0, 0, 1187.8, 890.4)
                } else if (chooseposition[1] == 3) {
                    image(hangp1g3, 0, 0, 1187.8, 890.4)
                }

            } else if (chooseposition[0] == 2) {
                if (chooseposition[1] == 1) {
                    image(hangp2g1, 0, 0, 1187.8, 890.4)
                } else if (chooseposition[1] == 3) {
                    image(hangp2g3, 0, 0, 1187.8, 890.4)
                }

            }
            else if (chooseposition[0] == 3) {
                if (chooseposition[1] == 1) {
                    image(hangp3g1, 0, 0, 1187.8, 890.4)
                } else if (chooseposition[1] == 2) {
                    image(hangp3g2, 0, 0, 1187.8, 890.4)
                }

            }
            image(stick, 100 / 2.3, 850 * 2 / 2.3, 420 * 2 / 2.3, 109 * 2 / 2.3)
            image(scoop1, scoopx, scoopy, 290 * 2 / 2.3, 140 * 2 / 2.3)

        } else if (hangclothesstep == 5) {
            if (chooseposition[0] == 1) {
                if (chooseposition[1] == 2) {
                    image(hangp1g2no, 0, 0, 1187.8, 890.4)
                } else if (chooseposition[1] == 3) {
                    image(hangp1g3no, 0, 0, 1187.8, 890.4)
                }

            } else if (chooseposition[0] == 2) {
                if (chooseposition[1] == 1) {
                    image(hangp2g1no, 0, 0, 1187.8, 890.4)
                } else if (chooseposition[1] == 3) {
                    image(hangp2g3no, 0, 0, 1187.8, 890.4)
                }

            }
            else if (chooseposition[0] == 3) {
                if (chooseposition[1] == 1) {
                    image(hangp3g1no, 0, 0, 1187.8, 890.4)
                } else if (chooseposition[1] == 2) {
                    image(hangp3g2no, 0, 0, 1187.8, 890.4)
                }
            }
            image(stick, 100 / 2.3, 850 * 2 / 2.3, 420 * 2 / 2.3, 109 * 2 / 2.3)
            image(scoop1, scoopx, scoopy, 290 * 2 / 2.3, 140 * 2 / 2.3)
            clothes.display()
            clothes.update()
        } else if (hangclothesstep == 6) {
            if (chooseposition[0] == 1) {

                if (chooseposition[1] == 2) {
                    image(hangp1g2y3, 0, 0, 1187.8, 890.4)
                    image(finish, 0, 0, 1187.8, 890.4)
                } else if (chooseposition[1] == 3) {
                    image(hangp1g3y2, 0, 0, 1187.8, 890.4)
                    image(finish, 0, 0, 1187.8, 890.4)
                }

            } else if (chooseposition[0] == 2) {
                if (chooseposition[1] == 1) {
                    image(hangp2g1y3, 0, 0, 1187.8, 890.4)
                    image(finish, 0, 0, 1187.8, 890.4)
                } else if (chooseposition[1] == 3) {
                    image(hangp2g3y1, 0, 0, 1187.8, 890.4)
                    image(finish, 0, 0, 1187.8, 890.4)
                }

            }
            else if (chooseposition[0] == 3) {
                if (chooseposition[1] == 1) {
                    image(hangp3g1y2, 0, 0, 1187.8, 890.4)
                    image(finish, 0, 0, 1187.8, 890.4)
                } else if (chooseposition[1] == 2) {
                    image(hangp3g2y1, 0, 0, 1187.8, 890.4)
                    image(finish, 0, 0, 1187.8, 890.4)
                }

            }
            image(stick, 100 / 2.3, 850 * 2 / 2.3, 420 * 2 / 2.3, 109 * 2 / 2.3)
            image(scoop1, scoopx, scoopy, 290 * 2 / 2.3, 140 * 2 / 2.3)

        }


    }
}


function homeWindow() {
    image(home, 0, 0, 1187.8, 890.4)
}

function chiliWindow() {
    image(garden, 0, 0, 1187.8, 890.4)
    chilifinish = true
    tinkleappear = false
    for (let i = 0; i < chilinum; i++) {
        chili[i].display()
        chili[i].update()
        if (chili[i].notStop == true) {
            chilifinish = false
        } else{tinkleappear = true}
    }
    if (tinkleappear == true){image(tinkle,0,0,1187.8, 890.4)}
    else{image(chiliinstru,0,0,1187.8, 890.4)}
    if (chilifinish == true){image(chiliending,0,0,1187.8, 890.4)}

}
class Chili {
    constructor(x, y, size, image) {
        this.x = x
        this.y = y
        this.size = size
        this.img = image
        this.isDragged = false
        this.notStop = true
    }
    update() {
        if (this.notStop == true) {
            if (this.isDragged == true) {
                this.x = mouseX + disx
                this.y = mouseY + disy
            }
        }
    }
    display() {
        push()
        translate(this.x, this.y)
        image(this.img, 0, 0, 32, 64)
        pop()
    }

    checkIsPressed() {
        if (this.x + 5 <= mouseX &&
            mouseX <= this.x + 27 &&
            this.y <= mouseY &&
            mouseY + 1 <= this.y + 63) {
            this.isDragged = true
            checkdrag = false
            if (disx == 0 && disy == 0) {
                disx = this.x - mouseX
                disy = this.y - mouseY

            }
        }
    }

}
class Stick {
    constructor(x, y, img) {
        this.img = img
        this.x = x
        this.y = y
        this.x2 = x
        this.y2 = y
        this.isDragged = false
        this.isStriking = false
        this.angel = 0
        this.change = -0.03
        this.step = 0
        this.time = 0
    }
    update() {
        if (this.isDragged == true) {
            this.x = mouseX + disx
            this.y = mouseY + disy
        }
    }
    display() {
        push()
        translate(this.x, this.y)
        if (this.isStriking == true) {
            rotate(this.angel)
            this.angel += this.change
            this.step += 0.03
            if (this.angel <= -0.9) {
                this.change = -this.change
            }
            else if (this.angel >= 0.3) {
                this.change = -this.change
            }
            if (this.step >= 2.4) {
                this.isStriking = false
                this.step = 0
                //control the strike time to be 3 when trigger next step
                this.time += 1
            }
        }
        image(this.img, 0, 0, 420 * 2 / 2.3, 105 * 2 / 2.3)
        pop()
    }

    checkIsPressed() {
        if (this.x + 40 * 2 / 2.3 <= mouseX &&
            mouseX <= this.x + 1000 / 2.3 &&
            this.y + 80 / 2.3 <= mouseY &&
            mouseY <= this.y + 300 / 2.3) {
            this.isDragged = true
            if (disx == 0 && disy == 0) {
                disx = this.x - mouseX
                disy = this.y - mouseY

            }
        }
    }
}

class Clothes {
    constructor(x, y, image1, image2, image3) {
        this.x = x
        this.y = y
        this.img1 = image1
        this.img2 = image2
        this.img3 = image3
    }
    update() {
        if (this.isDragged == true) {
            this.x = mouseX - 120 * 2 / 2.3
            this.y = mouseY - 150 * 2 / 2.3
        }
    }
    display() {
        push()
        translate(this.x, this.y)
        if (clothesstep == 1) {
            image(this.img1, 0, 0, 265 * 2 / 2.3, 340 * 2 / 2.3)
        } else if (clothesstep == 3) {
            image(this.img2, 0, 0, 230 * 2 / 2.3, 230 * 2 / 2.3)
        } else if (clothesstep == 5) {
            image(this.img3, 0, 0, 265 * 2 / 2.3, 360 * 2 / 2.3)
        }
        pop()
    }

    checkIsPressed() {
        if (this.x - 50 * 2 / 2.3 <= mouseX &&
            mouseX <= this.x + 250 * 2 / 2.3 &&
            this.y - 50 * 2 / 2.3 <= mouseY &&
            mouseY <= this.y + 340 * 2 / 2.3) {
            this.isDragged = true
        }
    }

}
class Scoop {
    constructor(x, y, image1, image2, image3, image4) {
        this.img1 = image1
        this.img2 = image2
        this.img3 = image3
        this.img4 = image4
        this.x = x
        this.y = y
        this.x2 = x
        this.y2 = y
        this.isDragged = false
        this.timecount = 0


    }
    update() {
        if (this.isDragged == true) {
            this.x = mouseX + disx
            this.y = mouseY + disy
        }
    }
    display() {
        push()
        translate(this.x, this.y)
        if (waterstep == 0 || waterstep == 3 || waterstep == 6) {
            image(this.img1, 0, 0, 290 * 2 / 2.3, 140 * 2 / 2.3)
        } else if (waterstep == 1 || waterstep == 4 || waterstep == 7) {
            this.timecount += 0.08
            if (this.timecount >= 1) { image(this.img3, 0, 0, 290 * 2 / 2.3, 140 * 2 / 2.3) }
            else { image(this.img2, 0, 0, 260 * 2 / 2.3, 230 * 2 / 2.3) }
        } else if (waterstep == 2 || waterstep == 5 || waterstep == 8) {
            this.timecount += 0.08
            if (2 >= this.timecount >= 1) { image(this.img4, 0, 0, 260 * 2 / 2.3, 230 * 2 / 2.3) }
            else if (this.timecount <= 1) { image(this.img3, 0, 0, 290 * 2 / 2.3, 140 * 2 / 2.3) }
            else if (this.timecount >= 2) { waterstep += 1 }
        }
        pop()
    }
    checkIsPressed() {
        // if (waterstep == 1) {
        if ((this.x + 15 * 2 / 2.3 <= mouseX &&
            mouseX <= this.x + 95 * 2 / 2.3 &&
            this.y + 55 * 2 / 2.3 <= mouseY &&
            mouseY <= this.y + 105 * 2 / 2.3) ||
            (this.x + 95 * 2 / 2.3 <= mouseX &&
                mouseX <= this.x + 295 * 2 / 2.3 &&
                this.y + 10 * 2 / 2.3 <= mouseY &&
                mouseY <= this.y + 135 * 2 / 2.3)) {
            this.isDragged = true
            if (disx == 0 && disy == 0) {
                disx = this.x - mouseX
                disy = this.y - mouseY

            }
        }
        // } else if (waterstep == 2)
    }
}
function mousePressed() {
    if (music.isPlaying() == false) {
        music.loop();
    }
    if (chiliwindow == true) {
        for (let i = chilinum - 1; i >= 0; i--) {
            if (checkdrag == true) {
                chili[i].checkIsPressed()
            }
        }
    }
    if (washwindow == true) {
        if (washclothesstep == 0) {
            scoop.checkIsPressed()
        } else if (washclothesstep == 1) {
            clothes.checkIsPressed()
        } else if (washclothesstep == 2) {
            astick.checkIsPressed()
        } else if (washclothesstep == 3) {
            if (hangclothesstep >= 1) {
                clothes.checkIsPressed()
            }
        }
    }
}
function mouseReleased() {
    if (chiliwindow == true) {
        for (let i = 0; i < chilinum; i++) {
            chili[i].isDragged = false
            disx = 0
            disy = 0
            if (100 <= chili[i].x &&
                chili[i].x <= 700 &&
                600 <= chili[i].y &&
                chili[i].y <= 850
            ) {
                if (chili[i].notStop == true) {
                    bell.play()
                } chili[i].notStop = false
            }
        }
        checkdrag = true
    }
    if (washwindow == true) {
        if (washclothesstep == 0) {
            scoop.isDragged = false
            disx = 0
            disy = 0
        } else if (washclothesstep == 1) {
            clothes.isDragged = false
        } else if (washclothesstep == 2) {
            astick.isDragged = false
            disx = 0
            disy = 0
        } else if (washclothesstep == 3) {
            if (hangclothesstep >= 1) {
                clothes.isDragged = false
            }
        }

    }
}



function mouseClicked() {

    if (displaytext == true) {
        document.getElementById("main").style.opacity = 0
        document.getElementById("canvas-parent").style.opacity = 1
        displaytext = false
    }
    //main window buttons
    if (mainwindow == true) {
        //to washwindow
        if (580 <= mouseX &&
            mouseX <= 780 &&
            820 <= mouseY &&
            mouseY <= 850) {
            mainwindow = false
            washwindow = true
            stream.loop()
        }
        if (540 <= mouseX &&
            mouseX <= 680 &&
            430 <= mouseY &&
            mouseY <= 460) {
            mainwindow = false
            homewindow = true
        }
    }
    //return button
    // in wash window
    if (mainwindow == false) {
        if (30 <= mouseX &&
            mouseX <= 30 + (50 * 2 / 2.3) &&
            30 * 2 / 2.3 <= mouseY &&
            mouseY <= 80 * 2 / 2.3) {
            mainwindow = true
            if (washwindow == true) { washwindow = false }
            if (homewindow == true) { homewindow = false }
            if (chiliwindow == true) { chiliwindow = false }
        }
        if (homewindow == true) {
            if (240 <= mouseX &&
                mouseX <= 375 &&
                350 <= mouseY &&
                mouseY <= 380) {
                homewindow = false
                chiliwindow = true
            }
        }

        if (washwindow == true) {
            //getwater1
            if (washclothesstep == 0) {
                if (waterstep == 0 || waterstep == 3 || waterstep == 6) {
                    if (scoop.y <= 280) {
                        if ((scoop.x + 15 * 2 / 2.3 <= mouseX &&
                            mouseX <= scoop.x + 95 * 2 / 2.3 &&
                            scoop.y + 55 * 2 / 2.3 <= mouseY &&
                            mouseY <= scoop.y + 105 * 2 / 2.3) ||
                            (scoop.x + 95 * 2 / 2.3 <= mouseX &&
                                mouseX <= scoop.x + 295 * 2 / 2.3 &&
                                scoop.y + 10 * 2 / 2.3 <= mouseY &&
                                mouseY <= scoop.y + 135 * 2 / 2.3)) {
                            waterstep += 1
                            scoop.timecount = 0
                        }
                    }
                } else if (waterstep == 1 || waterstep == 4 || waterstep == 7) {
                    if (scoop.y >= 370 && scoop.y <= 530 && scoop.x <= 320 && scoop.x >= 30) {
                        if ((scoop.x + 15 * 2 / 2.3 <= mouseX &&
                            mouseX <= scoop.x + 95 * 2 / 2.3 &&
                            scoop.y + 55 * 2 / 2.3 <= mouseY &&
                            mouseY <= scoop.y + 105 * 2 / 2.3) ||
                            (scoop.x + 95 * 2 / 2.3 <= mouseX &&
                                mouseX <= scoop.x + 295 * 2 / 2.3 &&
                                scoop.y + 10 * 2 / 2.3 <= mouseY &&
                                mouseY <= scoop.y + 135 * 2 / 2.3)) {
                            waterstep += 1;
                            scoop.timecount = 0
                        }
                    }
                }

            } // draw the clothes
            else if (washclothesstep == 1) {
                if (clothesstep == 0) {
                    if (mouseX <= 540 * 2 / 2.3 &&
                        mouseX >= 120 * 2 / 2.3 &&
                        mouseY <= 700 * 2 / 2.3 &&
                        mouseY >= 570 * 2 / 2.3) { clothesstep = 1 }

                } else if (clothesstep == 1) {
                    if (mouseX <= 1180 &&
                        mouseX >= 640 * 2 / 2.3 &&
                        mouseY <= 890 &&
                        mouseY >= 500 * 2 / 2.3) { clothesstep = 2 }
                } else if (clothesstep == 2) {
                    if (mouseX <= 1180 &&
                        mouseX >= 120 * 2 / 2.3 &&
                        mouseY <= 700 * 2 / 2.3 &&
                        mouseY >= 570 * 2 / 2.3) { clothesstep = 3 }
                } else if (clothesstep == 3) {
                    if (mouseX <= 1180 &&
                        mouseX >= 640 * 2 / 2.3 &&
                        mouseY <= 890 &&
                        mouseY >= 500 * 2 / 2.3) { clothesstep = 4 }
                } else if (clothesstep == 4) {
                    if (mouseX <= 540 * 2 / 2.3 &&
                        mouseX >= 120 * 2 / 2.3 &&
                        mouseY <= 700 * 2 / 2.3 &&
                        mouseY >= 570 * 2 / 2.3) { clothesstep = 5 }
                } else if (clothesstep == 5) {
                    if (mouseX <= 1180 &&
                        mouseX >= 640 * 2 / 2.3 &&
                        mouseY <= 890 &&
                        mouseY >= 500 * 2 / 2.3) { clothesstep = 6 }
                }
            } //hit the clothes
            else if (washclothesstep == 2) {
                if (mouseX <= 1000 &&
                    mouseX >= 600 &&
                    mouseY <= 1000 &&
                    mouseY >= 550 * 2 / 2.3) {
                    astick.isStriking = true
                    sticksound.play(1)
                }
            } //hang the clothes
            else if (washclothesstep == 3) {
                console.log(mouseX)
                console.log(mouseY)
                if (hangclothesstep == 0) {
                    if (mouseX <= 1000 &&
                        mouseX >= 750 &&
                        mouseY <= 700 &&
                        mouseY >= 500
                    ) {
                        hangclothesstep = 1;
                        clothesstep = 5
                        clothes.x = mouseX - 120 * 2 / 2.3
                        clothes.y = mouseY - 150 * 2 / 2.3
                    }
                } else if (hangclothesstep == 1) {
                    //left hanger
                    if (mouseX <= 380 &&
                        mouseX >= 200 &&
                        mouseY >= 190 &&
                        mouseY <= 250
                    ) {
                        hangclothesstep = 2
                        chooseposition[0] = 1
                    }
                    //middle hanger
                    else if (mouseX <= 600 &&
                        mouseX >= 470 &&
                        mouseY >= 190 &&
                        mouseY <= 250) {
                        hangclothesstep = 2
                        chooseposition[0] = 2
                    }
                    else if (mouseX <= 830 &&
                        mouseX >= 720 &&
                        mouseY >= 190 &&
                        mouseY <= 250) {
                        hangclothesstep = 2
                        chooseposition[0] = 3
                    }
                } else if (hangclothesstep == 2) {
                    if (mouseX <= 980 &&
                        mouseX >= 800 &&
                        mouseY <= 750 &&
                        mouseY >= 640
                    ) {
                        hangclothesstep = 3;
                        clothesstep = 3
                        clothes.x = mouseX - 120 * 2 / 2.3
                        clothes.y = mouseY - 150 * 2 / 2.3
                    }
                } else if (hangclothesstep == 3) {
                    //left hanger
                    if (chooseposition[0] != 1) {
                        if (mouseX <= 380 &&
                            mouseX >= 200 &&
                            mouseY >= 190 &&
                            mouseY <= 250
                        ) {
                            hangclothesstep = 4
                            chooseposition[1] = 1
                        }
                    }
                    //middle hanger
                    if (chooseposition[0] != 2) {
                        if (mouseX <= 600 &&
                            mouseX >= 470 &&
                            mouseY >= 190 &&
                            mouseY <= 250) {
                            hangclothesstep = 4
                            chooseposition[1] = 2
                        }
                    }
                    if (chooseposition[0] != 3) {
                        if (mouseX <= 830 &&
                            mouseX >= 720 &&
                            mouseY >= 190 &&
                            mouseY <= 250) {
                            hangclothesstep = 4
                            chooseposition[1] = 3
                        }
                    }
                } else if (hangclothesstep == 4) {
                    if (mouseX <= 1050 &&
                        mouseX >= 790 &&
                        mouseY <= 850 &&
                        mouseY >= 700
                    ) {
                        hangclothesstep = 5;
                        clothesstep = 1
                        clothes.x = mouseX - 120 * 2 / 2.3
                        clothes.y = mouseY - 150 * 2 / 2.3
                    }
                } else if (hangclothesstep == 5) {
                    let left = 6 - chooseposition[0] - chooseposition[1]
                    //left hanger
                    if (left == 1) {
                        if (mouseX <= 380 &&
                            mouseX >= 200 &&
                            mouseY >= 190 &&
                            mouseY <= 250
                        ) {
                            hangclothesstep = 6
                            chooseposition[3] = 1
                        }
                    }
                    //middle hanger
                    if (left == 2) {
                        if (mouseX <= 600 &&
                            mouseX >= 470 &&
                            mouseY >= 190 &&
                            mouseY <= 250) {
                            hangclothesstep = 6
                            chooseposition[3] = 2
                        }
                    }
                    if (left == 3) {
                        if (mouseX <= 830 &&
                            mouseX >= 720 &&
                            mouseY >= 190 &&
                            mouseY <= 250) {
                            hangclothesstep = 6
                            chooseposition[3] = 3
                        }
                    }
                }


            }
        }
    }
}



function returnButton() {
    if (mainwindow == false) {
        fill(250)
        strokeWeight(0)
        rect(30, 30 * 2 / 2.3, 50 * 2 / 2.3, 50 * 2 / 2.3)
        fill(0)
        textSize(30 * 2 / 2.3)
        text("🔙", 37, 66 * 2 / 2.3)
    }
}
//show the end of day
// function time() {
//     if (frameCount >= 43200) {
//         fill(255)
//         push()
//         translate(width / 2, height / 2)
//         rect(-300 * 2 / 2.3, -150 * 2 / 2.3, 600 * 2 / 2.3, 300 * 2 / 2.3)
//         fill(0)
//         textSize(30 * 2 / 2.3)
//         text("Congrats! The day is over.", -180 * 2 / 2.3, -20 * 2 / 2.3)
//         text("Refresh to start another day~", -195 * 2 / 2.3, 40 * 2 / 2.3)
//         pop()
//     }

//     //display time in the left up corner
// }
// function timeDisplay() {
//     fill(250)
//     strokeWeight(0)
//     rect(30 * 2 / 2.3, 30 * 2 / 2.3, 120 * 2 / 2.3, 50 * 2 / 2.3)
//     fill(0)
//     textSize(30 * 2 / 2.3)

// }
//controle the light condition
// function lightControl() {
//     fill(30, 30, 50, 80)
//     rect(0, 0, 1187.8, 890.4)
// }
