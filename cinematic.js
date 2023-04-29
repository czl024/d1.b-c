const WIDTH = 1080;
const HEIGHT = 720;
const DEBUG_WAIT = 2000;

class Intro1 extends Phaser.Scene{
    constructor(){super('i1');}

    create(){
        this.add.text(15, 15, "1", {fontFamily: 'bahn'});

        setTimeout(() =>{
            this.scene.start('i2');
        }, DEBUG_WAIT);
    }
}

class Intro2 extends Phaser.Scene{
    constructor(){super('i2');}

    create(){
        this.add.text(15, 15, "2");

        setTimeout(() =>{
            this.scene.start('i3');
        }, DEBUG_WAIT);
    }
}

class Intro3 extends Phaser.Scene{
    constructor(){super('i3');}

    create(){
        this.add.text(15, 15, "3");

        setTimeout(() =>{
            this.scene.start('i4');
        }, DEBUG_WAIT);
    }
}

class Intro4 extends Phaser.Scene{
    constructor(){super('i4');}

    create(){
        this.add.text(15, 15, "4");

        setTimeout(() =>{
            this.scene.start('i5');
        }, DEBUG_WAIT);
    }
}

class Intro5 extends Phaser.Scene{
    constructor(){super('i5');}

    create(){
        this.add.text(15, 15, "5");

        setTimeout(() =>{
            this.scene.start('title');
        }, DEBUG_WAIT);
    }
}

class Title extends Phaser.Scene{
    constructor(){super('title');}

    create(){
        this.add.text(15, 15, "T");
    }
}

new Phaser.Game({
    width: WIDTH,
    height: HEIGHT,
    scene: [Intro1, Intro2, Intro3, Intro4, Intro5, Title]
})