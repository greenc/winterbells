'use strict';

var Rabbit = function(game, x, y, frame) {
    Phaser.Sprite.call(this, game, x, y, 'rabbit', frame);
    this.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enableBody(this);
};

Rabbit.prototype = Object.create(Phaser.Sprite.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.update = function() {
};

Rabbit.prototype.jump = function() {
    if(this.body.onFloor()) {
        this.body.velocity.y = -500;
    }
};

module.exports = Rabbit;
