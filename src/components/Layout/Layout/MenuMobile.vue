<template>
    <div class="menu-mobile-wrap">
        <transition name="fade-fast">
            <div class="menu-mobile-bg" v-if="isOpen"></div>
        </transition>
        <div class="menu-mobile" :class="{open: isOpen}">
            <div class="menu-mobile-close" @click="onClose">
                <svg viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.70711 1.29285L26.7071 25.2928M1.24121 25.2344L25.351 1.34469" stroke="#333333"
                          stroke-width="2"/>
                </svg>
            </div>
            <div class="menu-mobile-list">
                <div class="menu-mobile-item" v-for="item in menu" @click="onClick(item.id)">
                    <h3 class="menu-mobile-item-name">
                        {{item.name}}
                    </h3>
                </div>
            </div>
            <div class="menu-mobile-social">
                <div class="menu-mobile-social-item" v-for="s in socials">
                    <div class="menu-mobile-social-item-ico" :title="s.name" v-html="s.svg"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuMobile",

    computed: {
        isOpen() {
            return this.$store.getters.menu.isOpen
        },
        menu() {
            return this.$store.getters.menu.list
        },
        socials() {
            return this.$store.getters.socials.list
        }
    },

    methods: {
        onClose() {
            this.$store.commit('toggleMenu')
        },
        onClick(id) {
            this.scrollTo(id)
            this.toggleMenu()
        },
        toggleMenu() {
            this.$store.commit('toggleMenu')
        },
        scrollTo(id) {
            this.$store.dispatch('scrollTo', id)
        }
    },
}
</script>

<style lang="scss">
    .menu {
        &-mobile {
            width: 376px;
            height: 100vh;

            position: fixed;
            top: 0;
            right: 0;
            z-index: 668;

            display: flex;
            flex-direction: column;

            margin-right: -100%;

            background-color: #F2F2F2;

            overflow: hidden;
            transition: 0.3s ease;

            @include ad($mobile) {
                width: 232px;
            }

            &.open {
                margin-right: 0;
            }

            &-bg {
                width:100%;
                height:100vh;

                z-index: 667;
                position: fixed;
                top:0;
                left:0;

                background-color: rgba(#232323, .8);
            }

            &-list {
                display: flex;
                flex-direction: column;

                margin: auto auto auto 48px;

                @include ad($mobile) {
                    padding-top: 64px;
                    margin: auto 0 auto 32px;
                }
            }

            &-item {
                margin: 24px 0;

                @include ad($mobile) {
                    margin: 0;
                }
            }

            &-close {
                width: 28px;
                height: 26px;

                position: absolute;
                top: 48px;
                right: 48px;
                z-index: 1;

                svg {
                    width: 28px;
                    height: 26px;

                    @include ad($mobile) {
                        width: 16px;
                        height: 16px;
                    }
                }
            }

            &-social {
                max-width: 736px;

                margin: 64px;

                display: flex;
                align-items: center;
                justify-content: space-between;

                @include ad($mobile) {
                    margin: 24px;
                }

                &-item {
                    cursor: pointer;

                    @include hover;

                    &-ico {
                        svg {
                            fill: #333333;
                        }
                    }
                }
            }
        }
    }
</style>