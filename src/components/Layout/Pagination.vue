<template>
    <div class="pagination" v-if="init" :class="theme">
        <item v-for="(item, key) in blocks" :item.sync="item" :key="'pkey' + key" @theme="onTheme"></item>
    </div>
</template>

<script>
    import Item from './Pagination/Item'

    export default {
        name: "Pagination",

        components: {
            Item,
        },

        props: {
            init: {
                default: false,
            }
        },

        data() {
            return {
                theme: '',
            }
        },
        computed: {
            blocks() {
                return this.$store.getters.menu.list
            }
        },
        methods: {
            onTheme(theme) {
                this.theme = theme
            }
        }
    }
</script>

<style lang="scss">
    .pagination {
        position: fixed;
        top: 50%;
        right: 0;
        z-index: 666;

        display: flex;
        flex-direction: column;
        align-items: flex-end;

        transform: translateY(-50%);

        transition: background-color 0.4s ease-in-out;

        @include ad($tablet) {
            display:none;
        }

        &.black &-item::after {
            background-color: #333333;
        }

        &.white &-item::after {
            background-color: rgb(255, 255, 255);
        }
    }
</style>