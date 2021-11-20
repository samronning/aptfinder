import parallax from "./parallax";
(function () {
  // Init
  var container = document.documentElement;

  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      var e = event || window.event;
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

  // Track the mouse position relative to the center of the container.
  mouse.setOrigin(container);

  var counter = 0;
  var updateRate = 5;
  var isTimeToUpdate = function () {
    return counter++ % updateRate === 0;
  };

  var onMouseMoveHandler = function (event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  var update = function (event) {
    mouse.updatePosition(event);
    parallax(mouse.x);
  };

  setTimeout(() => (container.onmousemove = onMouseMoveHandler), 6000);
})();
