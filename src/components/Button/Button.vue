<template>
  <button>
    <slot />
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
});
</script>
<style scoped>
button {
  cursor: pointer;
  border: 0.1rem solid #707070;
  border-radius: 0.45rem;
  background-color: #91d568;
  color: #fff;
  padding: 0.6em 1.4rem;
  font-size: 1rem;
  font-weight: 500;
  transition: ;
}
button:hover {
  background-color: #79d142;
}
</style>
