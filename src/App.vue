<template>
    <hud />
</template>

<script>
import hud from './components/hud.vue'

export default {
    name: 'App',
    components: {
        hud
    }
}
</script>

<style lang="sass">
@use '@/assets/styles/app.scss';
</style>
