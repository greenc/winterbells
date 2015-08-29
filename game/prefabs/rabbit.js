'use strict';

var Rabbit = function(game, x, y, frame) {
    Phaser.Sprite.call(this, game, x, y, 'rabbit', frame);
    this.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enableBody(this);
    this.body.gravity.y = 600;
};

Rabbit.prototype = Object.create(Phaser.Sprite.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.update = function() {
    var pointerX = this.game.input.activePointer.x;
    var deadZone = this.body.halfWidth / 2;
    if(pointerX > this.x + deadZone) {
        this.body.velocity.x = 400;
    } else if(pointerX < this.x - deadZone) {
        this.body.velocity.x = -400;
    } else {
        this.body.velocity.x = 0;
    }
};

Rabbit.prototype.jump = function() {
    if(this.body.onFloor()) {
        this.body.velocity.y = -500;
    }
};

module.exports = Rabbit;
