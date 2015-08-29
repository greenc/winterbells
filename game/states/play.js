'use strict';

var Rabbit = require('../prefabs/rabbit');
var Bell = require('../prefabs/bell');

var max = 0;
var emitter;
var updateInterval = 4 * 60;
var i = 0;


function Play() {}

Play.prototype = {
    create: function() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        // Create snow
        this.createSnow();

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
        this.updateSnow();
    },

    generateBell: function() {
        var posX = this.game.rnd.integerInRange(50, 700);
        var bell = new Bell(this.game, posX, 100);
    },

    createSnow: function() {
        emitter = this.game.add.emitter(this.game.world.centerX, -32, 600);
        emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
        emitter.maxParticleScale = 0.5;
        emitter.minParticleScale = 0.2;
        emitter.setYSpeed(50, 100);
        emitter.gravity = 0;
        emitter.width = this.game.world.width * 1.5;
        emitter.minRotation = 0;
        emitter.maxRotation = 40;
        this.changeWindDirection();
        emitter.start(false, 12000, 100);
    },

    updateSnow: function() {
        i++;
        if(i === updateInterval) {
            this.changeWindDirection();
            updateInterval = Math.floor(Math.random() * 20) * 60; // 0 - 20sec @ 60fps
            i = 0;
        }
    },

    changeWindDirection: function() {
        var multi = Math.floor((max + 200) / 4);
        var frag = (Math.floor(Math.random() * 100) - multi);
        max = max + frag;

        if(max > 200) {
            max = 150;
        } else if(max < -200) {
            max = -150;
        }

        this.setXSpeed(emitter, max);
    },

    setXSpeed: function(em, max) {
        em.setXSpeed(max - 20, max);
        em.forEachAlive(this.setParticleXSpeed, this, max);
    },

    setParticleXSpeed: function(particle, max) {
        particle.body.velocity.x = max - Math.floor(Math.random() * 30);
    },

    clickListener: function() {
        this.game.state.start('gameover');
    }
};

module.exports = Play;