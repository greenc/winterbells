'use strict';

var Rabbit = require('../prefabs/rabbit');
var Bell = require('../prefabs/bell');

function Play() {}

Play.prototype = {
    create: function() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 600;

        // Create rabbit
        this.rabbit = new Rabbit(this.game, 100, this.game.height/2);
        this.rabbit.body.collideWorldBounds = true;
        this.game.add.existing(this.rabbit);

        // Create bells
        // this.bellGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 2, this.generateBell, this);
        // this.bellGenerator.timer.start();

        // Handle input
        this.input.onDown.add(this.rabbit.jump, this.rabbit);
    },

    update: function() {

    },

    generateBell: function() {
        console.log('generate!');
        var posX = this.game.rnd.integerInRange(50, 700);
        var bell = new Bell(this.game, posX, 100);
    },

    clickListener: function() {
        this.game.state.start('gameover');
    }
};

module.exports = Play;