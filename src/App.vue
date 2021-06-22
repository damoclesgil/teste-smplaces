<template>
  <div id="nav" class="container relative">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style>
/* @import url("https://fonts.googleapis.com/css?family=Roboto:100,300,300i,400,400i,500,500i,700,700i&display=swap"); */
@import "./assets/reset.css";
@import "./assets/global.css";
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/montserrat-v15-latin-regular.woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
body {
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #707070;
}
</style>
