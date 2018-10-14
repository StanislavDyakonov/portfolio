<template>
    <div class="header-menu">
        <div class="header-menu-item" v-for="(item, key) in menu" @click="scrollTo(item.id)" v-if="key !== 0">
            <div class="header-menu-item-name">
                {{item.name}}
            </div>
        </div>

        <div class="header-menu-burger" @click="onOpen">
            <svg viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H24M0 25H24M1.67852e-07 13L16.5 13" stroke-width="2"/>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu",

        computed: {
            menu() {
                return this.$store.getters.menu.list
            }
        },

        methods: {
            scrollTo(id) {
                this.$store.dispatch('scrollTo', id)
            },

            onOpen() {
                this.$store.commit('toggleMenu')
            }
        }
    }
</script>

<style lang="scss">
    .header {
        &-menu {
            height: 50%;

            display: flex;
            align-items: center;

            &-item {
                height: 100%;

                margin-left: 64px;

                display: flex;
                align-items: center;

                cursor: pointer;

                @include hover;
                @include ad($tablet) {
                    display: none;
                }
                &-name {

                }

            }

            &-burger {
                display: none;

                width: 24px;
                height: 24px;

                margin: 50px auto;

                position: relative;

                transform: rotate(0deg);
                transition: .5s ease-in-out;

                cursor: pointer;

                svg {
                    width: 24px;
                    height: 24px;
                }

                @include ad($tablet) {
                    width: 16px;
                    height: 16px;

                    svg {
                        width: 16px;
                        height: 16px;
                    }

                    display: block;
                }
            }
        }
    }
</style>