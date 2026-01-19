<template>
    <div class="g-button g-hoverable g-pushable g-non-selectable" :class="{ 'g-accent': accent, 'g-relative': !accent }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "GButton",
    props: {
        accent: {
            type: Boolean,
            value: false
        }
    }
}
</script>

<style scoped></style>