<template>
    <div class="home-main" id="home-main">
        <header-block></header-block>

        <div class="container home-main-container">
            <h1 class="home-main-title">Станислав Дьяконов</h1>
            <h2 class="home-main-subtitle">Full stack developer</h2>
        </div>
    </div>
</template>

<script>
    import HeaderBlock from '../../Layout/Header'

    export default {
        name: "Main",

        components: {
            HeaderBlock
        }
    }
</script>

<style lang="scss">
    .home {
        &-main {
            min-height: 100vh;

            color: #F2F2F2;
            text-align: center;

            background: #232323;
            //background: #232323 url('../../../assets/images/main/bg.png') no-repeat center/contain;

            &-container {
                height: 100vh;

                margin-top: -128px;

                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }

            &-title {
            }

            &-subtitle {
                opacity: .5;
            }
        }
    }
</style>