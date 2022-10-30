import { getCurrentWindow } from '@electron/remote';

const HEADER_HEIGHT = 28;

export class BrowserTesting {
  static async resize(viewportWidth: number, viewportHeight: number) {
    window.resizeTo(viewportWidth, viewportHeight + HEADER_HEIGHT);

    return new Promise(resolve => (window.onresize = resolve));
  }

  static show() {
    const window = getCurrentWindow();

    window.show();
  }
}
