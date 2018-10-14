<template>
    <div class="underblock" :class="theme">
        <p class="underblock-title">{{title}}</p>
    </div>
</template>

<script>
    export default {
        name: "UnderBlock",

        props: [
            'title',
            'theme'
        ]
    }
</script>

<style lang="scss">
    .underblock {
        width: 272px;
        height: 64px;

        position: absolute;
        top: -64px;
        left: calc(50% - 136px);
        z-index: 666;

        display: flex;
        align-items: flex-start;
        justify-content: center;

        &.black &-title {
            color: #F2F2F2;
        }
        &.black::after {
            background-color: #F2F2F2;
        }

        &-title {
            margin-block-start: 0em;
            margin-block-end: 0em;

            color: #333333;
            font-family: $font2-light;
            opacity: .8;
        }

        &::after {
            content: '';

            width: 2px;
            height: 32px;

            position: absolute;
            bottom: 0;
            left: calc(50% - 1px);

            background-color: #333333;
        }
    }
</style>