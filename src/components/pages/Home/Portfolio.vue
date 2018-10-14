<template>
    <div class="home-portfolio" id="home-portfolio">
        <under-block title="Портфолио"></under-block>
        <header-block></header-block>

        <div class="home-portfolio-container">
            <swiper class="home-portfolio-slider" :options="sliderOptions" ref="portfolioSlider">
                <swiper-slide class="home-portfolio-slide home-portfolio-slide-1">
                    <div class="container">
                        <h1 class="home-portfolio-slide-title">
                            Posm 24
                        </h1>
                        <h3 class="home-portfolio-slide-subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br> do eiusmod tempor incididunt ut labore.
                        </h3>

                        <div class="home-portfolio-slide-adv">
                            <div class="home-portfolio-slide-adv-item-wrap">
                                <div class="home-portfolio-slide-adv-item">
                                    <div class="home-portfolio-slide-adv-item-ico">
                                        <svg width="78" height="96" viewBox="0 0 78 96" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M69.875 0H8.125C3.64 0.0052 0.00528125 3.584 0 8V51.2C0.00528125 55.616 3.64 59.1948 8.125 59.2H30.3452L28.0248 67.2H22.75V70.4H55.25V67.2H49.9753L47.6548 59.2H69.875C74.36 59.1948 77.9947 55.616 78 51.2V8C77.9947 3.584 74.36 0.0052 69.875 0ZM31.4047 67.2L33.7253 59.2H44.2747L46.5952 67.2H31.4047ZM74.75 51.2C74.75 53.851 72.5674 56 69.875 56H8.125C5.43258 56 3.25 53.851 3.25 51.2V48H74.75V51.2ZM74.75 44.8H3.25V8C3.25 5.349 5.43258 3.2 8.125 3.2H69.875C72.5674 3.2 74.75 5.349 74.75 8V44.8Z"
                                                  fill="#F2F2F2"/>
                                            <path d="M52 73.6H6.49998C5.60257 73.6 4.87498 74.3164 4.87498 75.2V94.4C4.87498 95.2836 5.60257 96 6.49998 96H52C52.8974 96 53.625 95.2836 53.625 94.4V75.2C53.625 74.3164 52.8974 73.6 52 73.6ZM50.375 92.8H8.12498V76.8H50.375V92.8Z"
                                                  fill="#F2F2F2"/>
                                            <path d="M14.625 86.4H11.375V89.6H14.625V86.4Z" fill="#F2F2F2"/>
                                            <path d="M14.625 79.9999H11.375V83.1999H14.625V79.9999Z" fill="#F2F2F2"/>
                                            <path d="M21.125 79.9999H17.875V83.1999H21.125V79.9999Z" fill="#F2F2F2"/>
                                            <path d="M27.625 79.9999H24.375V83.1999H27.625V79.9999Z" fill="#F2F2F2"/>
                                            <path d="M40.625 79.9999H37.375V83.1999H40.625V79.9999Z" fill="#F2F2F2"/>
                                            <path d="M34.125 79.9999H30.875V83.1999H34.125V79.9999Z" fill="#F2F2F2"/>
                                            <path d="M47.125 86.4H43.875V89.6H47.125V86.4Z" fill="#F2F2F2"/>
                                            <path d="M47.125 79.9999H43.875V83.1999H47.125V79.9999Z" fill="#F2F2F2"/>
                                            <path d="M40.625 86.4H17.875V89.6H40.625V86.4Z" fill="#F2F2F2"/>
                                            <path d="M65 73.6C60.5128 73.6 56.875 77.1818 56.875 81.6V88C56.875 92.4182 60.5128 96 65 96C69.4873 96 73.125 92.4182 73.125 88V81.6C73.125 77.1818 69.4873 73.6 65 73.6ZM69.875 88C69.875 90.651 67.6925 92.8 65 92.8C62.3076 92.8 60.125 90.651 60.125 88V81.6C60.125 78.949 62.3076 76.8 65 76.8C67.6925 76.8 69.875 78.949 69.875 81.6V88Z"
                                                  fill="#F2F2F2"/>
                                            <path d="M66.625 79.9999H63.375V83.1999H66.625V79.9999Z" fill="#F2F2F2"/>
                                            <path d="M40.6804 13.9937L34.1744 36.3808L37.2976 37.2608L43.8036 14.8736L40.6804 13.9937Z"
                                                  fill="#F2F2F2"/>
                                            <path d="M30.29 18.8287L28.21 16.3711L18.46 24.3711C17.7708 24.9371 17.678 25.9459 18.2528 26.6247C18.3156 26.6987 18.3849 26.7671 18.46 26.8287L28.21 34.8287L30.29 32.3711L22.0383 25.5999L30.29 18.8287Z"
                                                  fill="#F2F2F2"/>
                                            <path d="M59.7472 24.5751C59.6844 24.5011 59.6151 24.4327 59.54 24.3711L49.79 16.3711L47.71 18.8287L55.9617 25.5999L47.71 32.3711L49.79 34.8287L59.54 26.8287C60.2292 26.2627 60.322 25.2539 59.7472 24.5751Z"
                                                  fill="#F2F2F2"/>
                                        </svg>

                                    </div>
                                    <div class="home-portfolio-slide-adv-item-info">
                                        <h3 class="home-portfolio-slide-adv-item-title">
                                            21 день разработки
                                        </h3>
                                        <p class="home-portfolio-slide-adv-item-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="home-portfolio-slide-adv-item-wrap">
                                <div class="home-portfolio-slide-adv-item">
                                    <div class="home-portfolio-slide-adv-item-ico">
                                        <svg width="86" height="96" viewBox="0 0 86 96" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M85.7292 58.7708C84.3916 52.7766 78.4741 49.0076 72.512 50.3524C72.2094 50.4206 71.9098 50.5016 71.6142 50.5952V48C71.6142 47.1164 70.9017 46.4 70.0228 46.4H6.36571C5.48684 46.4 4.77428 47.1164 4.77428 48V52.8C4.79537 64.7024 10.2918 75.9256 19.6621 83.2H1.59143C0.712562 83.2 0 83.9164 0 84.8C0.00795714 90.9822 4.99092 95.992 11.14 96H65.2485C71.3976 95.992 76.3806 90.9822 76.3885 84.8C76.3885 83.9164 75.676 83.2 74.7971 83.2H56.7264C59.705 80.88 62.3263 78.1302 64.5053 75.04L77.3561 72.0592C83.318 70.7144 87.067 64.765 85.7292 58.7708ZM70.7883 60.6768V60.672L74.4327 59.9392C75.3145 59.75 76.182 60.3156 76.3702 61.2022C76.5508 62.0532 76.0394 62.8982 75.2045 63.128L69.7029 64.7088C70.1378 63.3858 70.5 62.0398 70.7883 60.6768ZM73.0465 86.4C72.2856 90.1226 69.0286 92.7958 65.2485 92.8H11.14C7.35995 92.7958 4.1029 90.1226 3.342 86.4H73.0465ZM51.0609 83.2H25.3276C14.587 76.8788 7.97802 65.3126 7.95714 52.8V49.6H68.4314V52.8C68.4103 65.3126 61.8015 76.8788 51.0609 83.2ZM81.2642 65.852C80.1465 67.4108 78.5037 68.5084 76.6416 68.9408L66.8988 71.2C67.388 70.3018 67.841 69.3856 68.2579 68.4512L76.0798 66.2032C78.6384 65.4734 80.124 62.7962 79.3981 60.2238C78.7112 57.7902 76.2767 56.2982 73.8104 56.8L71.3325 57.2976C71.4646 56.1952 71.541 55.0816 71.5744 53.96L72.3702 53.6928C74.7758 52.8738 77.4273 53.282 79.4791 54.7872V54.7824C83.0124 57.3436 83.8117 62.2996 81.2642 65.852Z"
                                                  fill="#F2F2F2"/>
                                            <path d="M47.7428 9.6C45.106 9.6 42.9685 7.451 42.9685 4.8V0H39.7856V4.8C39.7908 9.216 43.3504 12.7948 47.7428 12.8C50.3796 12.8 52.5171 14.949 52.5171 17.6C52.5171 20.251 50.3796 22.4 47.7428 22.4H30.2371C18.8166 22.4132 9.56165 31.718 9.54852 43.2H12.7314C12.7427 33.4846 20.5737 25.6114 30.2371 25.6H47.7428C52.1373 25.6 55.6999 22.0182 55.6999 17.6C55.6999 13.1818 52.1373 9.6 47.7428 9.6Z"
                                                  fill="#F2F2F2"/>
                                            <path d="M58.8829 30.4H66.0443C72.6362 30.4 77.98 25.0274 77.98 18.4C77.98 11.7726 72.6362 6.4 66.0443 6.4H65.2486C62.6118 6.4 60.4743 4.251 60.4743 1.6V0H57.2915V1.6C57.2915 6.0182 60.8541 9.6 65.2486 9.6H66.0443C70.8785 9.6 74.7972 13.5398 74.7972 18.4C74.7972 23.2602 70.8785 27.2 66.0443 27.2H58.8829C55.8067 27.2 53.3129 29.7072 53.3129 32.8C53.3129 35.8928 55.8067 38.4 58.8829 38.4C61.5197 38.4 63.6572 40.549 63.6572 43.2H66.84C66.8349 38.784 63.2752 35.2052 58.8829 35.2C57.5646 35.2 56.4958 34.1254 56.4958 32.8C56.4958 31.4746 57.5644 30.4 58.8829 30.4Z"
                                                  fill="#F2F2F2"/>
                                            <path d="M15.0899 58.8497L11.985 59.5505C12.9128 63.7105 15.0087 69.4705 19.6939 73.2497L21.6832 70.7505C17.7142 67.5585 15.9143 62.5169 15.0899 58.8497Z"
                                                  fill="#F2F2F2"/>
                                            <path d="M14.3228 52.8001H11.14C11.1609 53.9385 11.2474 55.0749 11.3994 56.2033L14.5568 55.7969C14.4229 54.8031 14.3447 53.8027 14.3228 52.8001Z"
                                                  fill="#F2F2F2"/>
                                        </svg>
                                    </div>
                                    <div class="home-portfolio-slide-adv-item-info">
                                        <h3 class="home-portfolio-slide-adv-item-title">
                                            Платформа E7+Vue JS
                                        </h3>
                                        <p class="home-portfolio-slide-adv-item-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <div class="swiper-button-prev home-portfolio-prev" slot="button-prev">
                    <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M36.5003 -3.19093e-06C56.6593 -1.42858e-06 73.0002 16.341 73.0002 36.5C73.0002 56.659 56.6592 73 36.5002 73C16.3412 73 0.000245569 56.659 0.000247332 36.5C0.000249094 16.341 16.3413 -4.95329e-06 36.5003 -3.19093e-06ZM11.3982 61.602C17.8232 68.028 26.6952 71.999 36.5002 72C46.3052 71.999 55.1772 68.028 61.6022 61.602C68.0272 55.177 72.0002 46.304 72.0002 36.5C72.0002 26.696 68.0272 17.823 61.6022 11.398C55.1773 4.972 46.3053 0.999998 36.5003 0.999997C26.6953 0.999996 17.8232 4.972 11.3982 11.398C4.97325 17.823 1.00025 26.696 1.00025 36.5C1.00025 46.304 4.97325 55.177 11.3982 61.602ZM38.8822 24.918L40.2732 23.5L50.5092 34.032L50.6092 33.93L52.0002 35.348L40.0752 47.5L38.6832 46.083L47.9262 36.665L20.0002 36.665L20.0002 34.639L48.4222 34.639L38.8822 24.918Z"
                              fill="#F2F2F2"></path>
                    </svg>
                </div>
                <div class="swiper-button-next home-portfolio-next" slot="button-next">
                    <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M36.5003 -3.19093e-06C56.6593 -1.42858e-06 73.0002 16.341 73.0002 36.5C73.0002 56.659 56.6592 73 36.5002 73C16.3412 73 0.000245569 56.659 0.000247332 36.5C0.000249094 16.341 16.3413 -4.95329e-06 36.5003 -3.19093e-06ZM11.3982 61.602C17.8232 68.028 26.6952 71.999 36.5002 72C46.3052 71.999 55.1772 68.028 61.6022 61.602C68.0272 55.177 72.0002 46.304 72.0002 36.5C72.0002 26.696 68.0272 17.823 61.6022 11.398C55.1773 4.972 46.3053 0.999998 36.5003 0.999997C26.6953 0.999996 17.8232 4.972 11.3982 11.398C4.97325 17.823 1.00025 26.696 1.00025 36.5C1.00025 46.304 4.97325 55.177 11.3982 61.602ZM38.8822 24.918L40.2732 23.5L50.5092 34.032L50.6092 33.93L52.0002 35.348L40.0752 47.5L38.6832 46.083L47.9262 36.665L20.0002 36.665L20.0002 34.639L48.4222 34.639L38.8822 24.918Z"
                              fill="#F2F2F2"></path>
                    </svg>
                </div>
            </swiper>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'

    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import HeaderBlock from '../../Layout/Header'
    import UnderBlock from '../../Layout/UnderBlock'

    export default {
        name: "Portfolio",

        components: {
            swiper,
            swiperSlide,
            HeaderBlock,
            UnderBlock
        },

        data() {
            return {
                sliderOptions: {}
            }
        }
    }
</script>

<style lang="scss">
    .home {
        &-portfolio {
            min-height: 100vh;

            color: #F2F2F2;
            text-align: center;

            position: relative;

            background: #232323;

            &-container {
                height: calc(100% + 128px);

                margin-top: -128px;
            }

            &-next {
                width: 73px;
                height: 73px;

                background: none;

                top: auto;
                bottom: 128px;
                left: calc(50% + 64px);
                right: auto;

                /*transform: rotate(180deg);*/

                @include hover;
            }

            &-prev {
                width: 73px;
                height: 73px;

                background: none;

                top: auto;
                bottom: 128px;
                right: calc(50% + 64px);
                left: auto;

                transform: rotate(180deg);

                @include hover;
            }

            &-slider {

            }

            &-slide {
                height: 100vh;

                display: flex;
                align-items: center;
                justify-content: center;

                &-1 {
                    background: transparent url('../../../assets/images/portfolio/slide-1-bg.jpg') no-repeat center/cover;
                }

                &-title {
                    text-transform: uppercase;
                }

                &-subtitle {
                    margin-top: 32px;
                }

                &-adv {
                    display: flex;

                    margin-top: 64px;

                    &-item {
                        display: flex;
                        justify-content: center;

                        &-wrap {
                            width: 50%;
                            max-width:574px;

                            padding: 21px;
                        }

                        &-ico {

                        }

                        &-info {
                            margin-left: 36px;

                            text-align: left;
                        }

                        &-title {

                        }

                        &-text {
                            margin-top: 16px;

                            display: block;

                            font-family: $font2-light;
                            opacity: .8;
                        }
                    }
                }
            }
        }
    }
</style>