class Keyboard {
  constructor() {
    this.keysPressed = {};
    this.map = {
      KeyQ: 1,
      KeyW: 2,
      KeyE: 3,
      KeyF: 4,
      KeyC: 5,
      KeyN: 6,
      KeyH: 7,
      KeyU: 8,
      KeyI: 9,
      KeyO: 10,
    };
  }

  get pressed() {
    return this.keysPressed;
  }

  get count() {
    return Object.keys(this.keysPressed).length;
  }

  init() {
    document.addEventListener(
      'keydown',
      (e) => {
        if (e.repeat || this.keysPressed[e.code]) return;
        const key = this.map[e.code];
        if (key) {
          this.keysPressed[e.code] = 1;
        }
      },
      false
    );
    document.addEventListener(
      'keyup',
      (e) => {
        const key = this.map[e.code];
        if (key && this.keysPressed[e.code]) {
          delete this.keysPressed[e.code];
        }
      },
      false
    );
  }
}
