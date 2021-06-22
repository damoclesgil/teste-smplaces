<template>
  <transition name="fade">
    <div v-show="showNotification" class="notification">
      Product added successfully!
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    showNotification: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
<style scoped>
.notification {
  background-color: rgba(166, 221, 133, 0.9);
  color: #fff;
  display: block;
  padding: 1rem;
  position: absolute;
  margin: 0 auto;
  text-align: center;
  top: 0;
  width: 100%;
  max-width: 800px;
  z-index: 10;
  font-size: 1.3rem;
  font-weight: bold;
}
@media screen and (min-width: 1200px) {
  .notification {
    transform: translateX(25%);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
