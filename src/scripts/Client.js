import { interfaceManager, playerStatsManager } from '@/scripts/store.js';

class Client {
    constructor() {
        if(window.cef) {
            window.cef.emit("game:hud:setComponentVisible", "interface", false);
            window.cef.emit("game:hud:setComponentVisible", "radar", true);
            window.cef.emit("game:data:pollPlayerStats", true, 50);
        }
        this.setupEventListeners();
    }

    setupEventListeners() {
        if (window.cef) {
            window.cef.on('showInterface', (...interfaces) => {
                interfaceManager.show(...interfaces);
            });

            window.cef.on('hideInterface', (...interfaces) => {
                interfaceManager.hide(...interfaces);
            });

            window.cef.on('toggleInterface', (...interfaces) => {
                interfaceManager.toggle(...interfaces);
            });

            window.cef.on("game:data:playerStats", (hp, max_hp, arm, breath, wanted, weapon, ammo, max_ammo, money, speed) => {
                playerStatsManager.update(hp, max_hp, arm, breath, wanted, weapon, ammo, max_ammo, money, speed);
            });
        }
    }

    sendEvent(event, ...args) {
        if (window.cef) {
            return window.cef.emit(event, ...args);
        }
        else console.log(`Event: ${event} | Args: ${args}`);
    }

    enableCursor() {
        if (window.cef) {
            return window.cef.set_focus(true);
        }
        else console.log(`Cursor enabled`);
    }

    disableCursor() {
        if (window.cef) {
            return window.cef.set_focus(false);
        }
        else console.log(`Cursor disabled`);
    }

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
