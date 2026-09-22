class Client {
    sendEvent(event, ...args) {
        if(window.cef) {
            return window.cef.emit(event, ...args);
        }
        else console.log(`Event: ${event} | Args: ${args}`);
    }

    enableCursor() {
        if(window.cef) {
            return window.cef.set_cursor(true);
        }
        else console.log(`Cursor enabled`);
    }

    disableCursor() {
        if(window.cef) {
            return window.cef.set_cursor(false);
        }
        else console.log(`Cursor disabled`);
    }
}

export const client = new Client();
