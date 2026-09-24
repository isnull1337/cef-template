import { reactive } from 'vue';

export const interfaceState = reactive({
    visible: {
        hud: true
    }
});

export const interfaceManager = {
    show(...interfaces) {
        interfaces.forEach(name => {
            if (name in interfaceState.visible) {
                interfaceState.visible[name] = true;
            }
        });
    },

    hide(...interfaces) {
        interfaces.forEach(name => {
            if (name in interfaceState.visible) {
                interfaceState.visible[name] = false;
            }
        });
    },

    toggle(...interfaces) {
        interfaces.forEach(name => {
            if (name in interfaceState.visible) {
                interfaceState.visible[name] = !interfaceState.visible[name];
            }
        });
    },

    isVisible(name) {
        return interfaceState.visible[name] || false;
    }
};
