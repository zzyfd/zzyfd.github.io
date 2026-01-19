<template>
  <div
    :style="{
      transform: `rotateX(${rotate}deg) scale(${scale})`,
      boxShadow:
        '0 0 #0000004d, 0 5px 5px #0000004a, 0 12px 12px #00000042',
    }"
    class="mx-auto -mt-12 h-[30rem] w-full max-w-5xl rounded-[30px] bg-[#222222] shadow-2xl md:h-[40rem]"
  >
    <div
      class="size-full overflow-hidden rounded-2xl bg-white md:rounded-2xl md:p-4 dark:bg-zinc-900"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  rotate: Number,
  scale: Number,
});
</script>
