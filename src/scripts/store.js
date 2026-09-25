import { reactive } from 'vue';

export const interfaceState = reactive({
    visible: {
        hud: false
    }
});

export const playerStats = reactive({
    hp: 0,
    maxHp: 0,
    armor: 0,
    breath: 0,
    wanted: 0,
    weapon: 0,
    ammo: 0,
    maxAmmo: 0,
    money: 0,
    speed: 0
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

export const playerStatsManager = {
    update(hp, maxHp, armor, breath, wanted, weapon, ammo, maxAmmo, money, speed) {
        playerStats.hp = hp;
        playerStats.maxHp = maxHp;
        playerStats.armor = armor;
        playerStats.breath = breath;
        playerStats.wanted = wanted;
        playerStats.weapon = weapon;
        playerStats.ammo = ammo;
        playerStats.maxAmmo = maxAmmo;
        playerStats.money = money;
        playerStats.speed = speed;
    }
};
