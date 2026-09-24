<template>
    <hud v-if="interfaceState.visible.hud" />
</template>

<script>
import { interfaceState } from '@/store.js';
import hud from './components/hud.vue'

export default {
    name: 'App',
    components: {
        hud
    },
    setup() {
        return {
            interfaceState
        }
    }
}
</script>

<style lang="sass">
@use '@/assets/styles/app.scss';
</style>
