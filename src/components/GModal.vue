<script setup>
import GCard from "../card/GCard"
</script >

<template>
    <div>
        <transition name="g-modal-fade-slide">
            <g-card class="g-modal" v-if="isShown" :key="'g-modal-main'">
                <slot></slot>
                <div slot="action">
                    <slot name="action"></slot>
                </div>
            </g-card>
        </transition>

        <transition name="g-fade">
            <div v-if="isShown" @click="$emit('closeModal')" class="g-modal-bg-cover g-bg-blur" :key="'g-modal-bg'"></div>
        </transition>
    </div>
</template >

<script>
export default {
    name: "GModal",
    components: { GCard },
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

<style scoped></style>