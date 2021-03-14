const fs = require('fs');
const path = require('path');

class SilhouetteFlooding {
  silhouettes = {
    empty: 'E',
    brick: 'B',
    water: 'W',
  };
  path;
  width;
  height;
  total;
  array;

  constructor() {
    this.path = path.resolve(__dirname, '..', 'silhouettes.txt');
    this.width = 0;
    this.height = 0;
    this.total = 0;
    this.array = [[]];

    this.execute();
  }

  execute() {
    fs.readFile(this.path, "utf8", (error, file) => {
      if (error) return console.error(error);

      file
        .split("\n")
        .filter((string, line) => line && !(line % 2))
        .map((string) => string.split(" ").map((n) => +n))
        .forEach((input) => {
          this.width = input.length;
          this.height = Math.max(...input);
          this.array = input.map((bricks, x) => [...Array(bricks).fill(this.silhouettes.brick), ...Array(this.height - bricks).fill(this.silhouettes.empty)]);
          this.total = 0;

          for (let i = 0; i < this.height; i++) this.update(0, i);
          console.log(this.total);
        });
    });
  }

  get totalFilledSilhouette() {
    return this.filledSilhouette;
  }

  get(x, y) {
    return this.array[x][y];
  }

  set(x, y, value = this.get(x, y)) {
    return this.array[x][y] = value;
  }

  setSolid(x, y) {
    const getValue = this.get(x, y);
    const value = getValue === this.silhouettes.brick ? this.silhouettes.brick : this.silhouettes.water;

    this.set(x, y, value);
  }

  setEmpty(x, y) {
    const getValue = this.get(x, y);
    const value = getValue === this.silhouettes.brick ? this.silhouettes.brick : this.silhouettes.empty;

    this.set(x, y, value);
  }

  isSolid(x, y) {
    const solids = [this.silhouettes.brick, this.silhouettes.water];
    const getValue = this.get(Math.max(x, 0), Math.max(y, 0));

    return solids.includes(getValue)
  }

  isEmpty(x, y) {
    const getValue = this.get(Math.max(x, 0), Math.max(y, 0));
    const value = getValue === this.silhouettes.empty;

    return value;
  }

  update(x, y, left = this.get(x, y)) {
    const self = this.get(x, y);

    if (x === this.width - 1) return;

    this.update(x + 1, y, self === this.silhouettes.brick ? this.silhouettes.brick : left);

    if (x === 0 || self === this.silhouettes.brick) return

    const isLeftEmpty = left === this.silhouettes.empty;
    const isLeftSolid = [this.silhouettes.brick, this.silhouettes.water].includes(left);
    const isDownEmpty = this.isEmpty(x, y - 1);
    const isDownSolid = this.isSolid(x, y - 1);
    const isRightEmpty = this.isEmpty(x + 1, y);
    const isRightSolid = this.isSolid(x + 1, y);

    if (isLeftEmpty || isDownEmpty || isRightEmpty) this.setEmpty(x, y);

    if (isLeftSolid && isDownSolid && isRightSolid) ++this.total && this.setSolid(x, y);
  }
}

module.exports = SilhouetteFlooding;