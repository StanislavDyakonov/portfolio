<template>
    <div class="header" :class="theme">
        <div class="container header-container">
            <logo></logo>
            <menus></menus>
        </div>
    </div>
</template>

<script>
    import Logo from './Header/Logo'
    import Menus from './Header/Menu'

    export default {
        name: "Header",

        props: [
            'theme'
        ],

        components: {
            Menus,
            Logo
        },
    }
</script>

<style lang="scss">
    .header {
        width: 100%;
        height: $header-height;

        position: sticky;
        top: 0;
        left: 0;
        z-index: 666;

        color: #F2F2F2;
        font-family: $font2;

        @include ad($mobile) {
            height: $header-height-mobile;
        }

        svg {
            stroke: #fff;
            fill: #fff;
        }

        &.black {
            color: #333333;

            svg {
                stroke: #333;
                fill: #333333;
            }
        }

        &-container {
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>