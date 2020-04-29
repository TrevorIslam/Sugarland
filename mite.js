class Mite {
  constructor (x,y,food, color, speed, stamina, intel) {
    this.x = x;
    this.y = y;
    this.food = food;
    this.show = true;
    this.color;
    this.speed = speed;
    this.stamina = stamina;
    this.intel = intel;
  }

  changeHealth(h) {
    this.food+=h;
  }

  drawSelf() {
    if (this.show) {
      fill((this.speed-1)*51,(this.stamina-1)*51,(this.stamina-1)*51);
      //console.log(this.stamina)

      rect(this.x*gridSize,this.y*gridSize,gridSize,gridSize);
    }
  }

  move() {
    var r = Math.floor(random(0,100));
    if (this.x < 501-this.speed && this.x > (this.speed - 1) && this.y < 501 - this.speed && this.y > (this.speed - 1)) {
      if (this.x + 1 < 500/gridSize && this.x - 1 >= 0 && this.y - 1 >= 0 && this.y + 1 < 500/gridSize) {
        if (sc[this.y][this.x + 1]) {
          if (r < (this.intel + 1) * 12.5) {
            this.x+=this.speed;
          } else
          if (r >= (this.intel + 1) * 12.5 && r < (this.intel + 1) * 12.5 + ((100 - (this.intel+1)*12.5)/3)) {
            this.x-=this.speed;
          } else
          if (r >= (this.intel + 1) * 12.5 + ((100 - (this.intel+1)*12.5)/3) && r < (this.intel+1)*12.5 + ((100 - ((this.intel+1)*12.5))*(2/3))) {
            this.y+=this.speed;
          } else
          if (r >= (this.intel+1)*12.5 + ((100 - (this.intel+1)*12.5)*(2/3)) && r < 100) {
            this.y-=this.speed;
          }
        } else
        if (sc[this.y][this.x - 1]) {
          if (r < (this.intel + 1) * 12.5) {
            this.x-=this.speed;
          } else
          if (r >= (this.intel + 1) * 12.5 && r < (this.intel + 1) * 12.5 + ((100 - (this.intel+1)*12.5)/3)) {
            this.x+=this.speed;
          } else
          if (r >= (this.intel + 1) * 12.5 + ((100 - (this.intel+1)*12.5)/3) && r < (this.intel+1)*12.5 + ((100 - (this.intel+1)*12.5)*(2/3))) {
            this.y+=this.speed;
          } else
          if (r >= (this.intel+1)*12.5 + ((100 - (this.intel+1)*12.5)*(2/3)) && r < 100) {
            this.y-=this.speed;
          }
        } else
        if (sc[this.y - 1][this.x]) {
          if (r < (this.intel + 1) * 12.5) {
            this.y-=this.speed;
          } else
          if (r >= (this.intel + 1) * 12.5 && r < (this.intel + 1) * 12.5 + ((100 - (this.intel+1)*12.5)/3)) {
            this.x+=this.speed;
          } else
          if (r >= (this.intel + 1) * 12.5 + ((100 - (this.intel+1)*12.5)/3) && r < (this.intel+1)*12.5 + ((100 - (this.intel+1)*12.5)*(2/3))) {
            this.y+=this.speed;
          } else
          if (r >= (this.intel+1)*12.5 + ((100 - (this.intel+1)*12.5)*(2/3)) && r < 100) {
            this.x-=this.speed;
          }
        } else
        if (sc[this.y + 1][this.x]) {
          if (r < (this.intel + 1) * 12.5) {
            this.y+=this.speed;
          }
          if (r >= (this.intel + 1) * 12.5 && r < (this.intel + 1) * 12.5 + ((100 - (this.intel+1)*12.5)/3)) {
            this.x+=this.speed;
          }
          if (r >= (this.intel + 1) * 12.5 + ((100 - (this.intel+1)*12.5)/3) && r < (this.intel+1)*12.5 + ((100 - (this.intel+1)*12.5)*(2/3))) {
            this.x-=this.speed;
          }
          if (r >= (this.intel+1)*12.5 + ((100 - (this.intel+1)*12.5)*(2/3)) && r < 100) {
            this.y-=this.speed;
          }
        } else
        {
          if (r >=  0 && r < 25) {
            if (this.x < 501-this.speed) {
              this.x+=this.speed;

            }
          } else
          if (r >= 25 && r < 50) {
            if (this.x > (this.speed - 1)) {
              this.x-=this.speed;
            }
          } else
          if (r >= 50 && r < 75) {
            if (this.y < 501 - this.speed) {
              this.y+=this.speed;
            }
          } else
          if (r >= 75 && r < 100) {
            if (this.y > (this.speed - 1)) {
              this.y-=this.speed;
            }
          }
        }
      }
    } else
    {
      if (r >=  0 && r < 25) {
        if (this.x < 501-this.speed) {
          this.x+=this.speed;

        }
      } else
      if (r >= 25 && r < 50) {
        if (this.x > (this.speed - 1)) {
          this.x-=this.speed;

        }
      } else
      if (r >= 50 && r < 75) {
        if (this.y < 501 - this.speed) {
          this.y+=this.speed;

        }
      } else
      if (r >= 75 && r < 100) {
        if (this.y > (this.speed - 1)) {
          this.y-=this.speed;

        }
      }
    }
    // if (r > 25 && r < 51) {
    //     console.log('x' + this.x);
    //     console.log('y' + this.y);
    //   if (this.x > (this.speed - 1)) {
    //     if (this.x - 1 >= 0) {
    //       if (sc[this.y][this.x - 1]) {
    //         this.x-=this.speed;
    //         console.log('x' + this.x);
    //       }
    //     }
    //   }
    // }
    // if (r > 50 && r < 76) {
    //     console.log('x' + this.x);
    //     console.log('y' + this.y);
    //   if (this.y < 501 - this.speed) {
    //     if (this.y + 1 < 50) {
    //       if (sc[this.y + 1][this.x]) {
    //         this.y+=this.speed;
    //       }
    //     }
    //   }
    // }
    // if (r > 75 && r < 101) {
    //     console.log('x' + this.x);
    //     console.log('y' + this.y);
    //   if (this.y > (this.speed - 1)) {
    //     if (this.y - 1 >= 0) {
    //       if (sc[this.y - 1][this.x]) {
    //         this.y-=this.speed;
    //       }
    //     }
    //   }
    // }
  }


}
