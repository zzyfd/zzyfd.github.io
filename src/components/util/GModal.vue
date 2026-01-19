<script setup>
import GCard from '../card/GCard.vue';
</script>

<template>
    <div>
        <Transition name="g-fade">
            <div v-if="isShown" @click="isShown=false" class="g-modal-bg-cover g-bg-blur" :key="'g-modal-bg'"></div>
        </Transition>
        <Transition name="g-modal-fade-slide">
            <g-card class="g-modal" v-if="isShown" :key="'g-modal-main'" style="padding: 10px; margin: 0">
                <slot></slot>
                <slot name="action"></slot>
            </g-card>
        </Transition>

    </div>
</template>

<script>
    export default {
        name: "GModal",
        components: {GCard},
        props: {
            show: {
                type: Boolean,
                value: false
            }
        },
        computed: {
            isShown: {
                get() {
                    return this.show
                },
                set(val) {
                    this.$emit('update:show', val)
                }
            }
        }
    }
</script>

<style scoped>
</style>