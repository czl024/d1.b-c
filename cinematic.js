const WIDTH = 1080;
const HEIGHT = 720;
const DEBUG_WAIT = 2500;

class Intro0 extends Phaser.Scene{
    constructor(){super('i0');}

    create(){
        let t = this.add.text(WIDTH / 2, HEIGHT / 2, "Click to start", {
            fontSize: 60,
        });

        t.setOrigin(0.5);

        this.input.on('pointerdown', () => this.scene.start('i1'));
    }
}

class Intro1 extends Phaser.Scene{
    constructor(){super('i1');}

    create(){
        let t = this.add.text(WIDTH / 2, HEIGHT / 2, "What if your hero...", {
            fontFamily: 'bahn',
            fontSize: 60,
        });

        t.setOrigin(0.5);

        this.add.tween({
            targets: t,
            scale: {from: .9, to: 1.1, ease: 'quad.out'},
            alpha: {from: 1, to: 0, ease: 'quart.in'},
            duration: DEBUG_WAIT
        })
        

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
        let t = new Array(4);
        t[0] = this.add.text(WIDTH / 2, (HEIGHT / 2) - 35, "Was a", {
            fontFamily: 'bahn',
            fontSize: 60,
        });
        t[1] = this.add.text(-WIDTH, (HEIGHT / 2) - 35, "Was everyone's", {
            fontFamily: 'bahn',
            fontSize: 60,
            color: '#F05050',
            alpha: 0
        });
        t[2] = this.add.text(WIDTH / 2, (HEIGHT / 2) + 35, "villain?", {
            fontFamily: 'bahn',
            fontSize: 60,
        });
        t[3] = this.add.text(-WIDTH, (HEIGHT / 2) + 35, "victim?", {
            fontFamily: 'bahn',
            fontSize: 60,
            color: '#F05050',
            alpha: 0
        });
        t.forEach(t =>{t.setOrigin(0.5);});

        this.add.tween({
            targets: [t[0], t[2]],
            scale: {from : .9, to: 1.1, ease: 'quad.inout'},
            alpha: {from: .4, to: 1, ease: 'quad.out'},
            duration: 2000
        });

        setTimeout(() =>{
            t[1].x = WIDTH/2;
            this.add.tween({
                targets: t[1],
                alpha: {from: 0, to: 1, ease: 'linear'},
                duration: 2000
            });
            this.add.tween({
                targets: t[0],
                alpha: {from: 1, to: 0, ease: 'linear'},
                duration: 2000
            });
            setTimeout(() =>{
                t[3].x = WIDTH/2;
                this.add.tween({
                    targets: t[3],
                    alpha: {from: 0, to: 1, ease: 'linear'},
                    duration: 2000
                });
                this.add.tween({
                    targets: t[2],
                    alpha: {from: 1, to: 0, ease: 'linear'},
                    duration: 2000
                });
            }, 750)
        }, 2000)
        
        setTimeout(() =>{
            this.scene.start('i4');
        }, 5000);
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
    scene: [Intro0, Intro1, Intro2, Intro3, Intro4, Intro5, Title]
})