class Sugar {
  constructor (x,y,food) {
    this.x = x;
    this.y = y;
    this.show = true;
    this.food = food;
  }
  changeHealth(h) {
    this.food+=h;
  }
  drawSelf() {
    if (this.show) {
      fill(255,255,255);
      rect(this.x * gridSize, this.y * gridSize, gridSize, gridSize);
    }
  }
}
