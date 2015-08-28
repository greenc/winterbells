'use strict';

var Bell = function(game, x, y, frame) {
    Phaser.Sprite.call(this, game, x, y, 'bell', frame);
    this.anchor.setTo(0.5, 0.26);
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
};

Bell.prototype = Object.create(Phaser.Sprite.prototype);
Bell.prototype.constructor = Bell;

Bell.prototype.update = function() {

};

module.exports = Bell;
