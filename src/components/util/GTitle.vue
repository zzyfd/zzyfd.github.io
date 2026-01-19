<template>
    <div class="g-title-container">
        <div>
            <span class="g-title">{{title}}</span>
            <br/> <span class="g-sub-title"> {{subTitle}} </span>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GTitle",
        props: {
            title: {
                value: '',
                type: String
            },
            subTitle: {
                value: '',
                type: String
            }
        }
    }
</script>

<style scoped>

</style>