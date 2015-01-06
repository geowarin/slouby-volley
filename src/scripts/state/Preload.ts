module SloubyVolley.State {
  export class Preload extends Phaser.State {
    private preloadBar:Phaser.Sprite;

    preload() {
      this.preloadBar = this.add.sprite(290, 290, 'preload-bar');

      this.load.image('red', 'assets/images/red.png');
      this.load.image('blue', 'assets/images/blue.png');
    }

    create() {
      this.game.state.start('main');
    }
  }
}
