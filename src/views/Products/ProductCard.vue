<template>
  <div
    class="flex flex-col md-flex-row items-center justify-between card-product"
  >
    <div class="flex items-center">
      <div>
        <img
          :src="product.ThumbnailURL"
          :alt="product.Name"
          :title="product.Name"
          width="120"
        />
      </div>
      <div class="ml-2">
        <h2 class="mb-2">{{ product.Name }}</h2>
        <div class="flex">
          <p>${{ product.Price }}</p>
          <span class="price_line_through">${{ product["Retail Price"] }}</span>
        </div>
      </div>
    </div>
    <div class="mt-mt-0 mt-4">
      <Button @click="goToProductDetail(product)">View Details</Button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button/Button.vue";
export default defineComponent({
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: {
    Button,
  },
  methods: {
    goToProductDetail(prod) {
      this.$router.push({
        name: "product-detail",
        params: { id: prod.ProductID, product: prod },
      });
    },
  },
});
</script>
<style scoped>
.card-product {
  border: 0.1rem solid #707070;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 0.45rem;
}
.price_line_through {
  text-decoration: line-through;
  font-size: 0.7rem;
  margin-left: 0.5rem;
}
</style>
