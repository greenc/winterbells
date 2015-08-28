'use strict';

function Menu() {}

Menu.prototype = {
    preload: function () {

    },
    create: function () {
        var style = {
            font: '52px Georgia serif',
            fill: '#ffffff',
            align: 'center'
        };
        this.sprite = this.game.add.sprite(this.game.world.centerX, 80, 'logo');
        this.sprite.anchor.setTo(0.5, 0.26);
        this.sprite.angle = -5;
        this.game.add.tween(this.sprite).to({
            angle: 5
        }, 1200, Phaser.Easing.Sinusoidal.InOut, true, 0, 1000, true);

        this.titleText = this.game.add.text(this.game.world.centerX, 210, 'Winter Bells', style);
        this.titleText.anchor.setTo(0.5, 0.5);

        this.instructionsTitle = this.game.add.text(this.game.world.centerX, 330, 'How to Play', {
            font: 'bold 24px Georgia serif',
            fill: '#ffffff',
            align: 'center'
        });
        this.instructionsTitle.anchor.setTo(0.5, 0.5);

        var str = "~ Use your mouse to move ~\n~ Click mouse button to jump ~\n~ Touch the bells to score ~";
        this.instructionsText = this.game.add.text(this.game.world.centerX, 380, str, {
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