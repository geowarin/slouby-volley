module SloubyVolley.State {
  export class Main extends Phaser.State {

    player:Phaser.Sprite;

    create() {
      this.add.text(10, 40, "Slouby volley", {font: "30px Arial"});

      this.physics.startSystem(Phaser.Physics.ARCADE);

      this.physics.arcade.gravity.y = 500;

      this.player = this.add.sprite(32, 500, 'red');
      this.physics.enable(this.player, Phaser.Physics.ARCADE);

      this.player.body.bounce.y = 0.2;
      this.player.body.collideWorldBounds = true;
      //this.player.body.setSize(20, 32, 5, 16);
    }

    update() {
      this.player.body.velocity.x = 0;
      var cursors = this.input.keyboard.createCursorKeys();
      var jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.UP);

      var speed = 250;
      if (cursors.left.isDown) {
        this.player.body.velocity.x = -speed;
      } else if (cursors.right.isDown) {
        this.player.body.velocity.x = speed;
      }

      if (jumpButton.isDown && this.player.body.onFloor()) {
        this.player.body.velocity.y = -450;
      }
    }
  }
}
