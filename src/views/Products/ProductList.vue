<template>
  <div class="mb-4">
    <div v-for="product in products" :key="product.ProductID">
      <ProductCard :product="product" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import ProductList from "./productList.json";
import ProductCard from "./ProductCard.vue";

export default defineComponent({
  components: {
    ProductCard,
  },
  props: {
    id: {
      type: Number,
    },
  },
  setup() {
    const products = ref(ProductList);

    return { products };
  },
});
</script>
<style scoped>
/* .user {
  min-height: 45vh;
}
@media screen and (min-width: 768px) {
  .info-user {
    max-width: 40rem;
  }
} */
</style>
