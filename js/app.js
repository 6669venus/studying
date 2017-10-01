var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.image('runman', 'assets/run.png');
    };
    SimpleGame.prototype.create = function () {
        var runman = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'runman');
        runman.anchor.setTo(0.5, 0.5);
    };
    return SimpleGame;
}());
window.onload = function () {
    var game = new SimpleGame();
};
