class App {
  constructor({ element }) {
    this.element = element;
  }

  startLoop() {
    const step = () => {
      requestAnimationFrame(() => {
        console.log(this.keyboard.count);
        step();
      });
    };

    step();
  }

  init() {
    this.keyboard = new Keyboard();
    this.keyboard.init();

    this.startLoop();
  }
}
