<template>
    <div class="layout">
        <Home></Home>
        <footer-block></footer-block>
        <menu-mobile></menu-mobile>
    </div>
</template>

<script>
    import Home from '../pages/Home'
    import FooterBlock from './Footer'
    import MenuMobile from './Layout/MenuMobile'

    export default {
        name: "Layout",

        components: {
            Home,
            FooterBlock,
            MenuMobile
        }
    }
</script>

<style lang="scss">

</style>