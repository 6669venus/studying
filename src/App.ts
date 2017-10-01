class SimpleGame {

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }

    game: Phaser.Game;

    preload() {
        this.game.load.image('runman', 'assets/run.png');
    }

    create() {
        var runman = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'runman');
        runman.anchor.setTo(0.5, 0.5);
    }

}

window.onload = () => {

    var game = new SimpleGame();

};