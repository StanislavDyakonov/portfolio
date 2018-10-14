<template>
    <div class="home-skills" id="home-skills">
        <header-block theme="black"></header-block>
        <under-block title="Навыки" theme="black"></under-block>

        <div class="container home-skills-container">
            <h1 class="home-skills-title">Мои навыки</h1>
            <h3 class="home-skills-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </h3>

            <div class="home-skills-list">
                <div class="home-skills-item-wrap" v-for="(item, key) in skills" :key="'skill'+key">
                    <div class="home-skills-item">
                        <div class="home-skills-item-ico" :class="'home-skills-item-ico--'+key" :alt="item.name"
                             :title="item.name"></div>
                        <div class="home-skills-item-info">
                            <h3 class="home-skills-item-name">
                                {{item.name}}
                            </h3>
                            <p class="home-skills-item-text">
                                {{item.text}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderBlock from '../../Layout/Header'
    import UnderBlock from '../../Layout/UnderBlock'

    export default {
        name: "Skills",

        components: {
            HeaderBlock,
            UnderBlock
        },

        data() {
            return {
                skills: [
                    {
                        name: 'Vue JS',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    },
                    {
                        name: 'Sass',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    },
                    {
                        name: 'JavaScript',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    },
                    {
                        name: 'PHP',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    },
                    {
                        name: 'Vuex',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    },
                    {
                        name: 'MySQL',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .home {

        &-skills {
            min-height: 100vh;

            background-color: #F2F2F2;

            position: relative;

            &-container {
                height: 100%;

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

            &-list {
                margin: 64px -32px;

                flex-wrap: wrap;
                display: flex;
            }

            &-item {
                display: flex;

                &-wrap {
                    width: 33.33%;

                    padding: 32px;

                    @include ad($tablet) {
                        width:50%;
                    }

                    @include ad($mobile) {
                        width:100%;
                    }
                }

                &-ico {
                    min-width: 96px;
                    height: 96px;
                    margin-right: 32px;

                    border-radius: 50%;

                    &--0 {
                        background: transparent url(../../../assets/images/skills/icon-1.png) no-repeat center/ cover;
                    }
                    &--1 {
                        background: transparent url(../../../assets/images/skills/icon-2.png) no-repeat center/ cover;
                    }
                    &--2 {
                        background: transparent url(../../../assets/images/skills/icon-3.png) no-repeat center/ cover;
                    }
                    &--3 {
                        background: transparent url(../../../assets/images/skills/icon-4.png) no-repeat center/ cover;
                    }
                    &--4 {
                        background: transparent url(../../../assets/images/skills/icon-5.png) no-repeat center/ cover;
                    }
                    &--5 {
                        background: transparent url(../../../assets/images/skills/icon-6.png) no-repeat center/ cover;
                    }
                }

                &-info {
                    display: flex;
                    flex-direction: column;
                }

                &-name {

                }

                &-text {
                    font-size: 16px;
                }
            }

        }
    }
</style>