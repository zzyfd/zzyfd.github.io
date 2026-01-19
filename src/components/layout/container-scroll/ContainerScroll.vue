<template>
  <div
    ref="containerRef"
    class="relative flex h-[40rem] items-center justify-center p-2 md:h-[60rem] md:pl-20 md:pr-20"
  >
    <div
      class="relative w-full py-10 md:py-40"
      style="perspective: 1000px"
    >
      <ContainerScrollTitle :translate="translateY">
        <slot name="title"></slot>
      </ContainerScrollTitle>
      <ContainerScrollCard
        :rotate="rotate"
        :scale="scale"
      >
        <slot name="card" />
      </ContainerScrollCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContainerScrollTitle from './ContainerScrollTitle.vue';
import ContainerScrollCard from './ContainerScrollCard.vue';

import { useWindowSize, useScroll, useElementBounding } from "@vueuse/core";
import { ref, onMounted, onUnmounted, computed } from "vue";

const containerRef = ref(null);
const isMobile = ref(false);

function updateIsMobile() {
  isMobile.value = window.innerWidth <= 768;
}

onMounted(() => {
  updateIsMobile();
  window.addEventListener("resize", updateIsMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateIsMobile);
});

const { height } = useWindowSize();
const { y: scrollY } = useScroll(window);
const { bottom } = useElementBounding(containerRef);

const scrollYProgress = computed(() => {
  if (!bottom.value) return 0;
  return 1 - Math.max(0, bottom.value - scrollY.value / 2) / height.value;
});

const scaleDimensions = computed(() => (isMobile.value ? [0.7, 0.9] : [1.05, 1]));

const rotate = computed(() => 50 * (1 - scrollYProgress.value));
const scale = computed(() => {
  const [start, end] = scaleDimensions.value;
  return start + (end - start) * scrollYProgress.value;
});
const translateY = computed(() => -200 * scrollYProgress.value + 150);
</script>
