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

        this.input.on('pointerdown', () => this.scene.start('title'));
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
        
        let neck = this.add.rectangle(W2 + 175, H2 + 150, BW, 200, '0x000000');
        neck.angle = 315;
        neck.setOrigin(1);
        let body = this.add.rectangle(W2 + 150, H2 + 300, BW, 300, '0x000000');

        let rArm1 = this.add.rectangle(W2 - 10, H2 + 240, BW, 300, '0x000000');
        rArm1.angle = 150;
        rArm1.setOrigin(0);

        let lArm2 = this.add.rectangle(W2 + 125, H2 + 160, BW, 200, '0x000000');
        lArm2.angle = 20;
        lArm2.setOrigin(0);
        let rArm2 = this.add.rectangle(W2 + 125, H2 + 160, BW, 200, '0x000000');
        rArm2.angle = 75;
        rArm2.setOrigin(0);

        let head = this.add.circle(W2 - 100, H2 - 50, 200, '0x000000');
        let hair = this.add.image(W2 - 100, H2 - 50, 'hair');
        hair.angle = 330;
        let helm = this.add.image(W2 - 100, H2 - 50, 'helm');
        let lArm1 = this.add.rectangle(W2 + 100, H2 + 375, BW, 400, '0x000000');
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
            alpha: 0
        });
        t[2] = this.add.text(WIDTH / 2, (HEIGHT / 2) + 35, "villain?", {
            fontFamily: 'bahn',
            fontSize: 60,
        });
        t[3] = this.add.text(-WIDTH, (HEIGHT / 2) + 35, "victim?", {
            fontFamily: 'bahn',
            fontSize: 60,
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
        this.load.image('helmtop', '/assets/helmtop.png');
        this.load.image('hf', '/assets/hair front.png');
        this.load.image('hb', '/assets/hair back.png');
    }

    create(){
        this.input.on('pointerdown', () => this.scene.start('i5'));

        let bg = this.add.rectangle(W2, H2, WIDTH, HEIGHT, '0xb3e8ec');
        let hb = this.add.image(W2, H2, 'hb');
        let head = this.add.circle(W2, H2 - 75, 200, '0x000000');
        let hf = this.add.image(W2, H2, 'hf');
        let neck = this.add.rectangle(W2, H2 + 150, 50, 500, '0x000000');

        let lArm1 = this.add.rectangle(W2, H2 + 175, 50, 300, '0x000000');
        lArm1.setOrigin(0);
        lArm1.angle = 130;
        let rArm1 = this.add.rectangle(W2, H2 + 225, 50, 300, '0x000000');
        rArm1.setOrigin(0);
        rArm1.angle = -130;

        let helmtop = this.add.image(W2, 0, 'helmtop');
        
        this.add.tween({
            targets: helmtop,
            y: H2 + 200,
            duration: 3000
        })
        this.add.tween({
            targets: lArm1,
            angle: {from: 170, to: 80, ease: 'linear'},
            height: {from:550, to: 250},
            duration: 3000
        })
        this.add.tween({
            targets: rArm1,
            angle: {from: -170, to: -80, ease: 'linear'},
            height: {from:550, to: 250},
            duration: 3000
        })

        setTimeout(() =>{
            this.scene.start('i5');
        }, 3000);
    }
}

class Intro5 extends Phaser.Scene{
    constructor(){super('i5');}

    preload(){
        this.load.image('hairflow', '/assets/hair flow.png');
        this.load.image('bg2', '/assets/bg2.png');
        this.load.image('helm', '/assets/helmet.png');
        this.load.audio('boo', '/assets/audio/boo.mp3');
    }

    create(){
        this.input.on('pointerdown', () => this.scene.start('title'));

        let bg = this.add.image(W2, H2, 'bg2');
        bg.setScale(1.1);
        
        let boo = this.sound.add('boo');
        boo.play();
        let lArm1 = this.add.rectangle(W2, H2 + 225, 20, 150, '0x000000');
        lArm1.setOrigin(0);
        lArm1.angle = 100;
        let lArm2 = this.add.rectangle(W2 - 135, H2 + 205, 20, 150, '0x000000');
        lArm2.setOrigin(0);
        lArm2.angle = 130;
        let rArm1 = this.add.rectangle(W2, H2 + 245, 20, 150, '0x000000');
        rArm1.setOrigin(0);
        rArm1.angle = -100;

        let helm = this.add.image(W2 - 300, H2 + 155, 'helm');
        helm.setScale(.4);
        helm.angle = -60;
        let head = this.add.circle(W2, H2 + 100, 100, '0x000000');
        let body = this.add.rectangle(W2, H2 + 200, 20, 300, '0x000000');
        let hair = this.add.image(W2 + 100, H2 + 215, 'hairflow');
        hair.setScale(1.1);

        this.add.tween({
            targets: bg,
            y: H2 - 50,
            duration: 3000
        })
        this.add.tween({
            targets: lArm1,
            y: H2 + 275,
            duration: 3000
        })
        this.add.tween({
            targets: lArm2,
            y: H2 + 255,
            duration: 3000
        })
        this.add.tween({
            targets: rArm1,
            y: H2 + 295,
            duration: 3000
        })
        this.add.tween({
            targets: helm,
            y: H2 + 205,
            duration: 3000
        })
        this.add.tween({
            targets: head,
            y: H2 + 150,
            duration: 3000
        })
        this.add.tween({
            targets: body,
            y: H2 + 250,
            duration: 3000
        })
        this.add.tween({
            targets: hair,
            y: H2 + 265,
            duration: 3000
        })

        setTimeout(() =>{
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.add.tween({
                targets: boo,
                volume: {from:1, to:0, ease:'quart.out'},
                duration: 1000
            });
            
        }, 2000);
        

        setTimeout(() =>{
            this.scene.start('title');
        }, 3000);
    }
}

class Title extends Phaser.Scene{
    constructor(){super('title');}

    preload(){
        this.load.image('title1', '/assets/grow some.png');
        this.load.image('title2', '/assets/balls.png');

        this.load.audio('click', '/assets/audio/click.wav');
        this.load.audio('fwip', '/assets/audio/fwip.wav');
        this.load.audio('thud', '/assets/audio/thud.wav');
    }

    create(){
        let click = this.sound.add('click');
        click.loop = false;
        let fwip = this.sound.add('fwip');
        fwip.loop = false;
        let thud = this.sound.add('thud');
        thud.loop = false;
        let subtitle = this.add.text(W2, H2 + 40, "A Gridiron Story", {
            fontFamily: 'bahn',
            fontSize: 20,
            alpha: 0
        });
        subtitle.setOrigin(.5);
        let t1 = this.add.image(W2, -100, 'title1');
        let t2 = this.add.image(W2, HEIGHT * 3, 'title2');

        this.add.tween({
            targets: t1,
            y: H2 / 2 - 50,
            duration : 2000
        })
        this.add.tween({
            targets: t2,
            y: H2 / 2 + 125,
            duration : 2000
        })
        this.add.tween({
            targets: subtitle,
            alpha: {from: 0, to: 1, ease: 'quart.out'},
            duration: 5000
        })

        setTimeout(() =>{
            thud.play();
        }, 2000)
    }
}

new Phaser.Game({
    width: WIDTH,
    height: HEIGHT,
    scene: [Intro0, Intro1, Intro2, Intro3, Intro4, Intro5, Title]
})