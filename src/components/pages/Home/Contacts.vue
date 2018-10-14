<template>
    <div class="home-contacts" id="home-contacts">
        <header-block theme="black"></header-block>
        <under-block title="Контакты" theme="black"></under-block>

        <div class="container home-contacts-container">
            <h1 class="home-contacts-title">Контакты</h1>
            <h3 class="home-contacts-subtitle">
                Можете написать мне письмо и я вам отвечу.<br>
                Отвечаю!
            </h3>

            <form class="home-contacts-form">
                <div class="home-contacts-form-row">
                    <input type="text" placeholder="Ваше имя">
                    <input type="text" placeholder="E-mail*">
                </div>
                <div class="home-contacts-form-row">
                    <input type="text" placeholder="Тема сообщения">
                </div>
                <div class="home-contacts-form-row">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Сообщение*" required></textarea>
                </div>
            </form>

            <div class="home-contacts-social">
                <div class="home-contacts-social-item" v-for="s in socials">
                    <div class="home-contacts-social-item-ico"  :title="s.name" v-html="s.svg"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderBlock from '../../Layout/Header'
    import UnderBlock from '../../Layout/UnderBlock'

    export default {
        name: "Contacts",

        components: {
            HeaderBlock,
            UnderBlock
        },

        computed: {
            socials() {
                return this.$store.getters.socials.list
            }
        }
    }
</script>

<style lang="scss">
    .home {
        &-contacts {
            min-height: 100vh;

            background-color: #F2F2F2;

            position: relative;

            &-container {
                height:100%;

                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }

            &-title {
                text-align: center;
            }

            &-subtitle {
                text-align: center;
                opacity: .5
            }

            &-form {
                width:100%;
                max-width: 736px;

                margin-top:32px;

                display: block;

                &-row {
                    margin-top: 32px;

                    display:flex;

                    input:nth-child(2n) {
                        margin-left: 32px;
                    }
                }
            }

            &-social {
                width:100%;
                max-width:736px;

                margin: 64px 0;

                display:flex;
                align-items: center;
                justify-content: space-around;

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