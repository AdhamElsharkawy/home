<template>
    <div ref="menu" class="menu" role="menu" data-scroll-sticky>
        <div class="menu__back-item" aria-hidden="true"></div>
        <div
            v-for="(link, key) in navigationalLinks"
            :key="key"
            class="menu__back-item"
            role="menuitem"
        >
            <div
                role="button"
                :class="{
                    'menu__back-item__content': true,
                    'menu__back-item__content--active': key === currentSection
                }"
                tabindex="0"
                :aria-label="`scroll to ${link.label}`"
                @click="link.action(), $nuxt.$emit('toggle-menu')"
            >
                <p class="menu__back-item__content__title">
                    <span>{{ link.label }}</span>
                </p>
            </div>
            <span class="menu__back-item__line" />
        </div>
        <div class="menu__back-item">
            <div
                class="menu__back-item__content menu__back-item__content--no-anim"
            >
                <ul class="menu__back-item__content__links">
                    <li
                        v-for="(link, key) in socialLinks"
                        :key="key"
                        class="menu__back-item__content__links__item"
                    >
                        <a
                            :href="link.href"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {{ link.label }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: { currentSection: { type: Number, required: true, default: 0 } },
    data() {
        return {
            prefersReducedMotion: false,
            isShowingMenu: false,
            prevAnimation: null,
            navigationalLinks: [
                { label: 'Home', action: () => this.$scrollTo(0) },
                { label: 'Works', action: () => this.$scrollTo('.works') },
                { label: 'About', action: () => this.$scrollTo('.about') },
                { label: 'Contact', action: () => this.$scrollTo('.contact') }
            ],
            socialLinks: [
                {
                    label: 'linktree',
                    href: 'https://linktr.ee/fxrysh'
                },
                {
                    label: 'github',
                    href: 'https://github.com/fxrysh'
                },
                {
                    label: 'twitter',
                    href: 'https://twitter.com/fxrysh'
                },
                {
                    label: 'email',
                    href: 'mailto:hello@farish.is-a.dev'
                }
            ]
        };
    },
    mounted() {
        this.prefersReducedMotion = this.$prefersReducedMotion();
        this.$nuxt.$on('toggle-menu', (bool) => {
            if (typeof bool === 'boolean' && this.isShowingMenu === bool)
                return;

            if (this.isShowingMenu) {
                this.$enableScrollY();
                this.hideMenu();
            } else {
                this.$disableScrollY();
                this.showMenu();
            }

            this.isShowingMenu = !this.isShowingMenu;
        });
    },
    methods: {
        showMenu() {
            if (this.prevAnimation) this.prevAnimation.kill();

            if (this.prefersReducedMotion) {
                return (this.prevAnimation = this.$gsap.fromTo(
                    this.$refs.menu,
                    { autoAlpha: 0 },
                    { autoAlpha: 1 }
                ));
            }

            const tl = this.$gsap.timeline();
            this.prevAnimation = tl;
            tl.set(this.$refs.menu, {
                autoAlpha: 1
            });

            tl.fromTo(
                '.menu__back-item',
                {
                    yPercent: 100,
                    rotateX: -90,
                    opacity: 0,
                    transformOrigin: 'center top',
                    transformStyle: 'preserve-3d'
                },
                {
                    yPercent: 0,
                    rotateX: 0,
                    opacity: 1,
                    stagger: 0.05
                }
            );

            tl.fromTo(
                this.$refs.menu,
                { backgroundColor: 'transparent' },
                { backgroundColor: '#030303' }
            );

            tl.fromTo(
                '.menu__back-item__line',
                { transform: 'scaleX(0)', transformOrigin: 'left bottom' },
                {
                    transform: 'scaleX(1)',
                    stagger: 0.05
                },
                '<'
            );

            tl.fromTo(
                '.menu__back-item__content__title, .menu__back-item__content__links__item',
                { opacity: 0, yPercent: 100 },
                {
                    opacity: 1,
                    yPercent: 0,
                    duration: 1,
                    ease: 'power4.out',
                    stagger: 0.075
                },
                '<-0.125'
            );
        },
        hideMenu() {
            if (this.prevAnimation) {
                this.prevAnimation.kill();
            }

            if (this.prefersReducedMotion) {
                return (this.prevAnimation = this.$gsap.to(this.$refs.menu, {
                    autoAlpha: 0
                }));
            }

            this.prevAnimation = this.$gsap.to(this.$refs.menu, {
                autoAlpha: 0
            });
        }
    }
};
</script>

<style lang="scss">
.menu {
    --100vh: calc(100 * var(--vh, 1vh));

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    width: 100%;
    height: 100%;
    height: var(--100vh);

    opacity: 0;
    visibility: hidden;
    pointer-events: all;

    &__back-item {
        $ITEMS_COUNT: 6;
        --x-padding: calc(clamp(1rem, 4vw, 5rem) + var(--step-0));

        position: absolute;
        left: 0;
        right: 0;
        height: calc(var(--100vh) / #{$ITEMS_COUNT});

        padding: 1rem var(--x-padding);
        background-color: var(--black-color);

        @for $i from 0 to $ITEMS_COUNT {
            &:nth-child(#{$i + 1}) {
                top: calc(#{$i} * calc(var(--100vh) / #{$ITEMS_COUNT}));
            }
        }

        &__content {
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;

            height: 100%;

            cursor: pointer;

            &__title {
                position: relative;

                color: darken($color: #fff, $amount: 50);
                font-size: var(--step-3);
                line-height: 1;

                width: 100%;
                margin: 0;

                span {
                    display: inline-block;
                    transform-origin: left center;
                    transition: color 200ms, transform 200ms var(--ease-back);
                }

                &::after {
                    --size: var(--step--1);

                    content: '';
                    position: absolute;
                    top: 50%;
                    right: 0;

                    width: var(--size);
                    height: var(--size);
                    border-radius: 50%;
                    background-color: #ffe6ed;
                    opacity: 0;

                    transform: translate(-50%, -50%);
                    transition: opacity 200ms ease;
                }
            }

            &__links {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: var(--step-1);

                list-style-type: none;
                padding-inline-start: 0;

                &__item a {
                    font-size: calc(var(--step--2) - 0.075rem);
                    color: darken($color: #fff, $amount: 50);
                    text-transform: uppercase;
                    text-decoration: none;

                    transition: color 100ms;

                    &:is(:hover, :focus) {
                        color: #ffe6ed;
                    }
                }
            }

            &:is(:focus, :hover) .menu__back-item__content__title {
                color: #ffe6ed;

                span {
                    transform: scale(0.96);
                }
            }

            &--active {
                .menu__back-item__content__title {
                    color: #ffe6ed;

                    &::after {
                        opacity: 1;
                    }
                }
            }

            &--no-anim {
                &:is(:hover, :focus) {
                    transform: none;
                }
            }
        }

        &__line {
            display: inline-block;

            position: absolute;
            bottom: 1%;
            left: var(--x-padding);
            right: var(--x-padding);

            height: 1px;
            background-color: darken($color: #fff, $amount: 75);
        }
    }
}
</style>