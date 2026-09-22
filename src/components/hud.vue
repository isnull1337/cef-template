<template>
    <div class="hud">

    </div>
</template>

<script>
import { client } from '@/Client.js';

export default {
    methods: {
        enableCursor() {
            client.enableCursor();
        }
    }
};
</script>
