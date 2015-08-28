'use strict';

var Rabbit = require('../prefabs/rabbit');
var Bell = require('../prefabs/bell');

function Play() {}

Play.prototype = {
    create: function() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 600;

        // Create rabbit
        this.rabbit = new Rabbit(this.game, this.game.width / 2, this.game.height);
        this.rabbit.body.collideWorldBounds = true;
        this.game.add.existing(this.rabbit);

        // Create bells
        // this.bellGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 2, this.generateBell, this);
        // this.bellGenerator.timer.start();

        // Handle input
        this.input.onDown.add(this.rabbit.jump, this.rabbit);
    },

    update: function() {
        if(this.game.input.activePointer.x > this.rabbit.x + (this.rabbit.body.halfWidth / 2)) {
            this.rabbit.body.velocity.x = +400;
        } else if(this.game.input.activePointer.x < this.rabbit.x - (this.rabbit.body.halfWidth / 2)) {
            this.rabbit.body.velocity.x = -400;
        } else {
            this.rabbit.body.velocity.x = 0;
        }
        // this.game.physics.arcade.accelerateToPointer(this.rabbit, Phaser.Input.activePointer, 900, 1000, 500);
        // if(Phaser.Rectangle.contains(this.rabbit.body, this.game.input.x, this.game.input.y)) {
        //     this.rabbit.body.velocity.setTo(0, 0);
        // }
    },

    generateBell: function() {
        var posX = this.game.rnd.integerInRange(50, 700);
        var bell = new Bell(this.game, posX, 100);
    },

    clickListener: function() {
        this.game.state.start('gameover');
    }
};

module.exports = Play;