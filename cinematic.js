const WIDTH = 1080;
const W2 = WIDTH / 2;
const HEIGHT = 720;
const H2 = HEIGHT/2
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
        this.input.on('pointerdown', () => this.scene.start('i2'));

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

    preload(){
        this.load.image('bg', '/assets/bg1.png');
        this.load.image('helm', '/assets/helmet.png');
        this.load.image('hair', '/assets/hair side.png');
    }

    create(){
        this.input.on('pointerdown', () => this.scene.start('i3'));
        const BW = 50;
        const ANIM_LEN = 2500;

        this.add.image(WIDTH / 2, HEIGHT / 2, 'bg');
        
        let neck = this.add.rectangle(W2 + 175, H2 + 150, BW, 200, '#000000');
        neck.angle = 315;
        neck.setOrigin(1);
        let body = this.add.rectangle(W2 + 150, H2 + 300, BW, 300, '#000000');

        let rArm1 = this.add.rectangle(W2 - 10, H2 + 240, BW, 300, '#000000');
        rArm1.angle = 150;
        rArm1.setOrigin(0);

        let lArm2 = this.add.rectangle(W2 + 125, H2 + 160, BW, 200, '#000000');
        lArm2.angle = 20;
        lArm2.setOrigin(0);
        let rArm2 = this.add.rectangle(W2 + 125, H2 + 160, BW, 200, '#000000');
        rArm2.angle = 75;
        rArm2.setOrigin(0);

        let head = this.add.circle(W2 - 100, H2 - 50, 200, '#000000');
        let hair = this.add.image(W2 - 100, H2 - 50, 'hair');
        hair.angle = 330;
        let helm = this.add.image(W2 - 100, H2 - 50, 'helm');
        let lArm1 = this.add.rectangle(W2 + 100, H2 + 375, BW, 400, '#000000');
        lArm1.angle = 150;
        lArm1.setOrigin(0);

        
        
        this.add.tween({
            targets: hair,
            x:W2 - 60,
            y:H2,
            angle: {from: 330, to: 320, ease: 'linear'},
            alpha: {from: 0, to: 1, ease: 'quart.out'},
            duration: ANIM_LEN
        })
        this.add.tween({
            targets: head,
            x: W2 - 150,
            y: H2 + 50,
            duration: ANIM_LEN
        })
        this.add.tween({
            targets: neck,
            angle: {from: 330, to: 320, ease: 'linear'},
            duration: ANIM_LEN
        })
        this.add.tween({
            targets: helm,
            x: W2 - 240,
            y: H2 - 25,
            angle: {from: 330, to: 310, ease: 'linear'},
            duration: ANIM_LEN
        })
        this.add.tween({
            targets: lArm2,
            angle: {from: 20, to: 40, ease: 'linear'},
            duration: ANIM_LEN
        })
        this.add.tween({
            targets: lArm1,
            x: W2 + 55,
            y: H2 + 300,
            angle: {from: 160, to: 145, ease: 'linear'},
            duration: ANIM_LEN
        })
        this.add.tween({
            targets: rArm1,
            x: W2 - 20,
            y: H2 + 200,
            angle: {from: 160, to: 145, ease: 'linear'},
            duration: ANIM_LEN
        })
        this.add.tween({
            targets: rArm2,
            angle: {from: 75, to: 85, ease: 'linear'},
            duration: ANIM_LEN
        })
        
        setTimeout(() =>{
            this.scene.start('i3');
        }, ANIM_LEN);
    }
}

class Intro3 extends Phaser.Scene{
    constructor(){super('i3');}

    create(){
        this.input.on('pointerdown', () => this.scene.start('i4'));

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
            }, 1500)
        }, 2000)
        
        setTimeout(() =>{
            this.scene.start('i4');
        }, 6000);
    }
}

class Intro4 extends Phaser.Scene{
    constructor(){super('i4');}

    preload(){
        
    }

    create(){
        this.input.on('pointerdown', () => this.scene.start('i5'));

        this.add.text(15, 15, "4");

        setTimeout(() =>{
            this.scene.start('i5');
        }, DEBUG_WAIT);
    }
}

class Intro5 extends Phaser.Scene{
    constructor(){super('i5');}

    create(){
        this.input.on('pointerdown', () => this.scene.start('title'));

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