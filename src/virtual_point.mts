class VirtualPoint {
  x: number;
  y: number;
   
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  logPoint() {
    console.log(`${this.x}, ${this.y}`);
  }
}

interface Point {
  x: number;
  y: number;
}

export default VirtualPoint;           