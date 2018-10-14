<template>
    <div class="pagination-item" :class="{active: isActive}" @click="scrollTo"></div>
</template>

<script>
    export default {
        name: "Item",

        props: [
            'item'
        ],

        data() {
            return {
                el: document.getElementById(this.item.id),

                isActive: false,
            }
        },

        mounted() {
            this.onScroll();
            window.addEventListener("scroll", () => this.onScroll());
        },

        computed: {
            getRect() {
                return this.el.getBoundingClientRect()
            },
            wTop() {
                return this.getRect.top
            },
            wBottom() {
                return this.getRect.bottom
            }
        },

        methods: {
            onScroll() {
                if (window.innerHeight / 2 + pageYOffset > this.wTop && window.innerHeight / 2 + pageYOffset < this.wBottom) {
                    this.isActive = true;
                    this.$emit('theme', this.item.theme)
                } else {
                    this.isActive = false;
                }
            },
            scrollTo() {
                this.$store.dispatch('scrollTo', this.item.id)
            }
        }
    }
</script>

<style lang="scss">
    .pagination {;

        &-item {
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
                top:calc(50% - 1px);
                left:0;

                width:100%;
                height:1px;
            }

            &.active {
                width: 48px;

                opacity: 1;
            }
        }
    }
</style>