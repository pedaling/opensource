import { getCurrentWindow } from '@electron/remote';

export class BrowserTesting {
  static async resize(viewportWidth: number, viewportHeight: number) {
    getCurrentWindow().setContentSize(viewportWidth, viewportHeight, false);

    return new Promise(resolve => (window.onresize = resolve));
  }

  static show() {
    getCurrentWindow().show();
  }
}
