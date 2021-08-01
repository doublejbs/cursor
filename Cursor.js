import { setTimeoutUsingRequestAnimationFrame } from './util/setTimeoutUsingRequestAnimationFrame.js';

export default class Cursor {
  static from(cursorElement) {
    return new Cursor(cursorElement);
  }

  _cursorElement;

  constructor(cursorElement) {
    this._cursorElement = cursorElement;
  }

  updatePosition(positionX, positionY) {
    setTimeoutUsingRequestAnimationFrame(
      () => this.updateElementPosition(positionX, positionY),
      50,
    );
  }

  updateElementPosition(positionX, positionY) {
    this.cursorElement.style.transform = `translate3d(${positionX}px, ${positionY}px, 0px)`;
  }

  get cursorElement() {
    return this._cursorElement;
  }
}
