<template>
  <div class="parallax-container">
    <img src="/assets/avatar.png" alt="Avatar" class="avatar-image" />
  </div>
</template>

<script>
export default {
  name: 'Avatar'
}
</script>

<style scoped>
.parallax-container {
  position: relative;
  width: 200px;
  height: 200px;
  max-width: 200px;
  max-height: 200px;
  margin: 10px auto;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.5);
  animation: fadeIn 1s ease-out;
  transition: transform 0.3s ease;
}

.parallax-container:hover {
  transform: scale(1.05);
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style> 