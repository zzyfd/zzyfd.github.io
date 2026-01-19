<template>
    <div class="g-card" v-bind:class="{ 'g-card-popup': popup, 'g-hoverable g-shadow-dynamic': hoverable }"
        :style="backgroundImageUrl ? 'background-image: url(' + backgroundImageUrl + '); background-size: cover; margin: 10px;' : 'margin: 10px;'">
        <div class="g-card-cover" :class="{ 'g-background-cover': backgroundCover, 'g-white': backgroundCover }">
            <div style="padding: 10px">
                <slot></slot>
            </div>
            <slot name="action"></slot>
        </div>
        <div class="g-card-expand-cover" :class="{ 'g-bg-blur-large': backgroundBlur }" style="position: relative">
            <slot name="expand"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "GCard",
    props: {
        hoverable: {
            value: false,
            type: Boolean
        },
        popup: {
            value: false,
            type: Boolean
        },
        backgroundCover: {
            value: false,
            type: Boolean
        },
        backgroundImageUrl: {
            value: null,
            type: String
        },
        backgroundBlur: {
            value: false,
            type: Boolean
        }
    }
}
</script>

<style scoped></style>