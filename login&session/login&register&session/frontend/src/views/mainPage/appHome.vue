<template>
    <div>
        <app-banner></app-banner>
        <info-page></info-page>
    </div>
</template>

<script>
    import appBanner from './appBanner'
    import infoPage from './infoPage'
    export default {
        name: "appHome",
        components: {
            'infoPage': infoPage,
            'appBanner': appBanner,
        },
        mounted() {
            this.$store.state.isHome = true;
        }
    }
</script>

<style scoped>

</style>
