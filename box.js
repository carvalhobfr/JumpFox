class Box {
  constructor(game) {
    this.game = game;
    this.height = GRID_SIZE;
    this.width = GRID_SIZE;
    this.positionX = GRID_SIZE;
    this.positionY = GRID_SIZE * 10;
    this.boxes = [];
  }

  drawBox() {
    for (let box of this.boxes) {
      this.game.context.drawImage(boxImage, box.positionX, box.positionY, this.width, this.height);
    }
  };


  createaBox() {
    if (this.boxes.length < 11) {
      this.boxes.push({
        positionX: 50,
        positionY: 550 - GRID_SIZE * (this.boxes.length)
      })
      this.game.score += 1
    };
    //console.log(this.boxs)
  };

  deleteBox() {
    let k = 0;
    for (let obstacle in this.game.obstacles) {
      for (let box in this.boxes) {
        let boxY = this.boxes[box].positionY;
        let boxX = this.boxes[box].positionX;
        let boxW = 50;
        let boxH = 50;
        let obsX = this.game.obstacles[obstacle].positionX;
        let obsY = this.game.obstacles[obstacle].positionY;
        let obsH = this.game.obstacles[obstacle].height;
        let obsW = this.game.obstacles[obstacle].width;


        if (boxX + boxW > obsX && boxX < obsX + obsW && boxY + boxH > obsY && boxY < obsY + obsH) {
          k += 1;
        };
      }
    }

    if (k != 0) {
      this.boxes.splice(-2, 2);
      this.game.obstacles.splice(0, 1);
      // this.game.fox.drawFox();
      this.game.fox.positionY = this.game.fox.positionY + 2 * GRID_SIZE;
    }
  }
}


///box.positionX game.game.fox.positionX + 10
const boxImage = new Image()
// console.log("draw box now!!!")
boxImage.src = './Images/big-crate.png';