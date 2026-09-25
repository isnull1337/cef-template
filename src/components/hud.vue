<template>
    <div class="hud">
        {{ playerStats.hp }} / {{ playerStats.maxHp }}
    </div>
</template>

<script>
import { client } from '@/scripts/Client.js';
import { playerStats } from '@/scripts/store.js';

export default {
    methods: {
        enableCursor() {
            client.enableCursor();
        }
    },
    setup() {
        return { playerStats }
    }
};
</script>
