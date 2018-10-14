<template>
    <div class="home">
        <main-block></main-block>
        <skills-block></skills-block>
        <portfolio-block></portfolio-block>
        <contacts-block></contacts-block>

        <pagination :init.sync="init"></pagination>
    </div>
</template>

<script>
    import MainBlock from './Home/Main'
    import SkillsBlock from './Home/Skills'
    import PortfolioBlock from './Home/Portfolio'
    import ContactsBlock from './Home/Contacts'
    import Pagination from '../Layout/Pagination'

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
            this.$nextTick(() => this.init = true)
        }
    }
</script>

<style lang="scss">
    .home {

    }
</style>