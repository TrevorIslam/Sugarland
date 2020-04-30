console.clear();
var t = 0;
var mites = [];
var sugars = [];
var sc = [];
var seconds = 1;
var gridSize = 5;
var grid = false;
var highest = 0;
var lowest;
var sp;
var times = 1;
var st;
var int;
var l;
var sugx;
var sugy;
var sugx2;
var sugy2;

function setup() {
  createCanvas(500,500);
  for (let k = 0; k <= 500/gridSize; k++) {
    sc.push([]);
    for (let l = 0; l <= 500/gridSize; l++) {
      sc[k].push(false);
    }
  }
  for (let i = 0; i < 100; i++) {
    mites.push(new Mite(Math.floor(random(0,(500/gridSize) + 1)),Math.floor(random(0,(500/gridSize) + 1)), 10, color(0,0,0), 1, 1, 1));
  }
  for (let i = 0; i < 1000; i++) {
    sugars.push(new Sugar(Math.floor(random(0,(500/gridSize) + 1)),Math.floor(random(0,(500/gridSize) + 1)), 2));
    sc[sugars[i].y][sugars[i].x] = true;
  }
  highest = mites.length;
  lowest = mites.length;
};

function draw () {
  noStroke();
  background(150,150,150);
  for (let m of mites) {
    m.drawSelf();
  }
  for (let s of sugars) {
    s.drawSelf();
  }
  if (mites.length > highest) {
    highest = mites.length;
  }
  if (t%10 === 0) {
    //console.log(mites.length);
    repopulate(40);
    newSugar(times);
    for (let m of mites) {
      for (let s of sugars) {
        if (collision(m,s)) {
          if (m.show && s.show) {
            s.changeHealth(-2);
            m.changeHealth(10);
          }
        }
        if (s.food<=0) {
          s.show = false;
          sugars.splice(sugars.indexOf(s), 1);
        }
      }
      if (m.food<=0) {
        m.show = false;
        mites.splice(mites.indexOf(m), 1);
      }
    }
    for (let m of mites) {
      m.move();
      m.changeHealth(-1 * (.8/(m.stamina*m.stamina)));
    }
  }
  if (grid) {
    drawGrid();
  }
  if (mites.length < lowest) {
    lowest = mites.length;
  }
  current = mites.length;
  fill(255);
  textSize(20);
  text("Highest: " + highest, 10, 460);
  text("Lowest:  " + lowest, 10, 480);
  text("Current: " + current, 350, 460)
  t++;
};

var repopulate = function(health) {
  sp = Math.floor(random(0,100));
  st = Math.floor(random(0,100));
  int = Math.floor(random(0,100));
  l = mites.length;
  for (let i = 0; i < l; i++) {
    if (mites[i].food >= health) {
      if (sp < 80) {
          mites.push(new Mite(mites[i].x,mites[i].y, 10, color(0,0,0), mites[i].speed + 0, mites[i].stamina, mites[i].intel));
      } else if (sp >= 80 && sp < 91) {
        if (mites[i].speed < 5) {
          mites.push(new Mite(mites[i].x,mites[i].y, 10, color(0,0,0), mites[i].speed + 1, mites[i].stamina, mites[i].intel));
        }
      } else if (sp >= 91 && sp < 100) {
        if (mites[i].speed > 1) {
          mites.push(new Mite(mites[i].x,mites[i].y, 10, color(0,0,0), mites[i].speed - 1, mites[i].stamina, mites[i].intel));
        }
      }
      if (st < 80) {
          mites.push(new Mite(mites[i].x,mites[i].y, 10, color(0,0,0), mites[i].speed, mites[i].stamina + 0, mites[i].intel));
      } else if (st >= 80 && st < 91) {
        if (mites[i].stamina < 5) {
          mites.push(new Mite(mites[i].x,mites[i].y, 10, color(0,0,0), mites[i].speed, mites[i].stamina + 1, mites[i].intel));
        }
      } else if (st >= 91 && st < 100) {
        if (mites[i].stamina > 1) {
          mites.push(new Mite(mites[i].x,mites[i].y, 10, color(0,0,0), mites[i].speed, mites[i].stamina - 1, mites[i].intel));
        }
      }
      if (int < 80) {
          mites.push(new Mite(mites[i].x,mites[i].y, 10, color(0,0,0), mites[i].speed, mites[i].stamina, mites[i].intel + 0));
      } else if (int >= 80 && int < 91) {
        if (mites[i].intel < 5) {
          mites.push(new Mite(mites[i].x,mites[i].y, 10, color(0,0,0), mites[i].speed, mites[i].stamina, mites[i].intel + 1));
        }
      } else if (int >= 91 && int < 100) {
        if (mites[i].intel > 1) {
          mites.push(new Mite(mites[i].x,mites[i].y, 10, color(0,0,0), mites[i].speed, mites[i].stamina, mites[i].intel - 1));
        }
      }
    }
  }
};

var newSugar = function(times) {
  sugx = Math.floor(random(0,(500/gridSize) + 1));
  sugy = Math.floor(random(0,(500/gridSize) + 1));
  sugx2 = Math.floor(random(0,(500/gridSize) + 1));
  sugy2 = Math.floor(random(0,(500/gridSize) + 1));
  for (let m of mites) {
    while ((m.x == sugx && m.y == sugy) || (m.x == sugx2 && m.y == sugy2)) {
      sugx = Math.floor(random(0,(500/gridSize) + 1));
      sugy = Math.floor(random(0,(500/gridSize) + 1));
      sugx2 = Math.floor(random(0,(500/gridSize) + 1));
      sugy2 = Math.floor(random(0,(500/gridSize) + 1));
    }
  }
  if (times === 1) {
    sugars.push(new Sugar(sugx,sugy, 5));
    sc[sugy][sugx] = true;
  }
  if (times === 2) {
    sugars.push(new Sugar(sugx,sugy, 5));
    sugars.push(new Sugar(sugx2,sugy2, 5));
    sc[sugy][sugx] = true;
    sc[sugy2][sugx2] = true;
  }
};

var drawGrid = function() {
  stroke(100,100,200);
  for (var i = 0; i < 500; i+=gridSize) {
    line(0,i,500,i);
    line(i,0,i,500);

    fill(255);
    //text(i/gridSize, i+gridSize/2, gridSize/2);
    //text(i/gridSize, gridSize/2, i+gridSize/2);
  }
  noStroke();
};

var collision = function(obj1, obj2){
  if (obj1.x == obj2.x && obj1.y == obj2.y) {
    return true;
  } else {
    return false;
  }
};
