<template>
    <div class="home" id="home">
        <main-block></main-block>
        <skills-block></skills-block>
        <portfolio-block></portfolio-block>
        <contacts-block></contacts-block>

        <pagination :init.sync="init"></pagination>
    </div>
</template>

<script>
    import Vue from 'vue'

    import MainBlock from './Home/Main'
    import SkillsBlock from './Home/Skills'
    import PortfolioBlock from './Home/Portfolio'
    import ContactsBlock from './Home/Contacts'
    import Pagination from '../Layout/Pagination'

    import 'fullpage.js/dist/fullpage.extensions.min.js'
    import fullpage from 'fullpage.js'
    // import VueFullPage from 'vue-fullpage.js'
    // Vue.use(VueFullPage);

    export default {
        name: "Home",

        components: {
            MainBlock,
            SkillsBlock,
            PortfolioBlock,
            ContactsBlock,
            Pagination
        },

        data() {
            return {
                init: false,
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.init = true

                this.initScripts()
            })
        },

        methods: {
            initScripts() {
                new fullpage('#home', {
                    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                    css3: true,
                    scrollingSpeed: 700,
                    autoScrolling: true,
                    fitToSection: true,

                    navigation: true,
                    navigationPosition: 'right',
                });
            }
        }
    }
</script>

<style lang="scss">
    .home {

    }

    .fp-viewing-0 #fp-nav li span::after, .fp-viewing-2 #fp-nav li span::after {
        background-color: rgb(255, 255, 255);
    }

    .fp-viewing-1 #fp-nav li span::after, .fp-viewing-3 #fp-nav li span::after {
        background-color: #333333;
    }

    #fp-nav {
        position: fixed;
        top: 50%;
        right: 0;
        z-index: 666;

        display: flex;
        flex-direction: column;
        align-items: flex-end;

        transition: background-color 0.4s ease-in-out;

        @include ad($tablet) {
            display: none;
        }

        ul {
            list-style: none;
        }

        .fp-sr-only {
            display: none;
        }
        li {
            display: flex;
            justify-content: flex-end;
        }

        li .active span {
            width: 48px;

            opacity: 1;
        }

        li span {
            display: block;

            content: '';

            width: 32px;

            margin: 0 64px 0 0;
            padding: 12px 0;

            opacity: .5;

            position: relative;

            transition: 0.4s ease-in-out;

            cursor: pointer;

            &::after {
                content: '';

                position: absolute;
                top: calc(50% - 1px);
                left: 0;

                width: 100%;
                height: 1px;
            }
        }
    }
</style>