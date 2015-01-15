module SloubyVolley.State {

  export class Main extends Phaser.State {

    player:Phaser.Sprite;
    ball:Phaser.Sprite;

    create() {
      this.add.text(10, 40, "Slouby volley", {font: "30px Arial"});

      this.physics.startSystem(Phaser.Physics.ARCADE);
      //this.physics.arcade.gravity.y = 2600;

      this.player = this.add.sprite(32, 500, 'red');
      this.physics.enable(this.player, Phaser.Physics.ARCADE);
      this.player.body.gravity.y = 2600;
      this.player.body.bounce.y = 0.2;
      this.player.body.collideWorldBounds = true;
      //this.player.body.setSize(20, 32, 5, 16);

      this.ball = this.add.sprite(50, 100, 'ball');
      this.physics.enable(this.ball, Phaser.Physics.ARCADE);
      this.ball.body.collideWorldBounds = true;
      this.ball.body.gravity.y = 1200;
      this.ball.body.bounce.y = 1;
      this.ball.body.bounce.x = 1;
    }

    canJump:boolean = false;

    update() {
      this.physics.arcade.collide(this.player, this.ball, null, this.reflect, this);

      this.player.body.velocity.x = 0;
      var cursors = this.input.keyboard.createCursorKeys();
      var jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.UP);

      var speed = 250;
      if (cursors.left.isDown) {
        this.player.body.velocity.x = -speed;
      } else if (cursors.right.isDown) {
        this.player.body.velocity.x = speed;
      }

      if (this.player.body.onFloor()) {
        this.canJump = true;
      }

      if (this.canJump && jumpButton.downDuration(250)) {
        this.player.body.velocity.y = -700;
        this.canJump = true;
      } else {
        this.canJump = false;
      }
    }

    reflect(blob:Phaser.Sprite, ball:Phaser.Sprite) {
      //var angle = this.physics.arcade.angleBetween(blob, ball);
      //this.physics.arcade.accelerationFromRotation(angle, 200, ball.body.acceleration);
      //ball.body.velocity.y *= -ball.body.bounce.y;
    }
  }
}
