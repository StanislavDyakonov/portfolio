<template>
    <div id="App" class="app">
        <layout></layout>
    </div>
</template>

<script>
    import Layout from './components/Layout/Layout.vue'

    export default {
        name: 'App',

        components: {
            Layout
        },

        created() {
            window.addEventListener('resize', () => {
                let vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px`);
            });

            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
    }
</script>

<style lang="scss">
    #app {
    }
</style>
