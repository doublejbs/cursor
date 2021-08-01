import Cursor from './Cursor.js';

class App {
  static RADIUS = 7.5;

  static new() {
    return new App();
  }

  _cursor;

  constructor() {
    const cursorElement = document.createElement('div');
    cursorElement.id = 'cursor';
    document.body.appendChild(cursorElement);
    this._cursor = Cursor.from(cursorElement);
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
  }

  onMouseMove(event) {
    const { clientX, clientY } = event;
    this.cursor.updatePosition(clientX - App.RADIUS, clientY - App.RADIUS);
  }

  get cursor() {
    return this._cursor;
  }

  set cursor(value) {
    this._cursor = value;
  }
}

window.onload = () => {
  App.new();
};
