import { interfaceManager } from './store.js';

class Client {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        if(window.cef) {
            window.cef.on('showInterface', (...interfaces) => {
                interfaceManager.show(...interfaces);
            });
            window.cef.on('hideInterface', (...interfaces) => {
                interfaceManager.hide(...interfaces);
            });
            window.cef.on('toggleInterface', (...interfaces) => {
                interfaceManager.toggle(...interfaces);
            });
        }
    }

    sendEvent(event, ...args) {
        if(window.cef) {
            return window.cef.emit(event, ...args);
        }
        else console.log(`Event: ${event} | Args: ${args}`);
    }

    enableCursor() {
        if(window.cef) {
            return window.cef.set_focus(true);
        }
        else console.log(`Cursor enabled`);
    }

    disableCursor() {
        if(window.cef) {
            return window.cef.set_focus(false);
        }
        else console.log(`Cursor disabled`);
    }

    // Методы-прокси для удобства использования из браузера
    showInterface(...interfaces) {
        interfaceManager.show(...interfaces);
    }

    hideInterface(...interfaces) {
        interfaceManager.hide(...interfaces);
    }

    toggleInterface(...interfaces) {
        interfaceManager.toggle(...interfaces);
    }
}

export const client = new Client();
