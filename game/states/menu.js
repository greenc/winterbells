'use strict';

function Menu() {}

Menu.prototype = {
    preload: function () {

    },
    create: function () {
        var style = {
            font: '48px Georgia serif',
            fill: '#ffffff',
            align: 'center'
        };
        this.sprite = this.game.add.sprite(this.game.world.centerX, 100, 'logo');
        this.sprite.anchor.setTo(0.5, 0.25);
        this.sprite.angle = -5;
        this.game.add.tween(this.sprite).to({
            angle: 5
        }, 1200, Phaser.Easing.Sinusoidal.InOut, true, 0, 1000, true);

        this.titleText = this.game.add.text(this.game.world.centerX, 230, 'Winter Bells', style);
        this.titleText.anchor.setTo(0.5, 0.5);

        this.instructionsTitle = this.game.add.text(this.game.world.centerX, 350, 'How to Play', {
            font: 'bold 24px Georgia serif',
            fill: '#ffffff',
            align: 'center'
        });
        this.instructionsTitle.anchor.setTo(0.5, 0.5);

        var str = "Use your mouse to move\nClick mouse button to jump\nTouch the bells to score";
        this.instructionsText = this.game.add.text(this.game.world.centerX, 405, str, {
            font: '16px Georgia serif',
            fill: '#ffffff',
            align: 'center'
        });
        this.instructionsText.anchor.setTo(0.5, 0.5);
    },
    update: function () {
        if (this.game.input.activePointer.justPressed()) {
            this.game.state.start('play');
        }
    }
};

module.exports = Menu;