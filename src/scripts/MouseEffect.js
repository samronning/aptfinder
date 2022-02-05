export class MouseEffect {
  // Mouse
  mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      const e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function (e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function () {
      return "(" + this.x + ", " + this.y + ")";
    },
  };
  container = document.documentElement;
  counter = 0;
  updateRate = 5;
  isTimeToUpdate = () => {
    return this.counter++ % this.updateRate === 0;
  };
  update = (event) => {
    this.mouse.updatePosition(event);
    this.effect(this.mouse.x, this.mouse.y);
  };
  onMouseMoveHandler = (event) => {
    if (this.isTimeToUpdate()) {
      this.update(event);
    }
  };
  constructor(effect) {
    // Init
    this.effect = effect;

    // Track the mouse position relative to the center of the container.
    this.mouse.setOrigin(this.container);

    this.container.onmousemove = this.onMouseMoveHandler;
  }
  start() {
    this.container.onmousemove = this.onMouseMoveHandler;
  }
  stop() {
    this.container.onmousemove = null;
  }
  manual(x, y, opts) {
    this.effect(x, y, opts);
  }
}
export default MouseEffect;
