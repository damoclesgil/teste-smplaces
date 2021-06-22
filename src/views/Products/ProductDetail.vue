<template>
  <Notification :showNotification="showNotification" />
  <div class="product-detail">
    <div>
      <div class="relative mb-4">
        <img
          :src="product.PictureURL"
          :alt="product.Name"
          :title="product.Name"
        />
        <div class="flex buttons-img">
          <button>Clearence</button>
          <button>Free Shiping</button>
        </div>
      </div>
      <p class="mb-1"><strong>Brand:</strong> {{ product.Brand }}</p>
      <p><strong>Color:</strong> {{ product.Color }}</p>
    </div>
    <div>
      <h3 class="product-name">{{ product.Name }}</h3>
      <div>
        <span
          v-for="star in 5"
          :key="star"
          class="fa fa-star"
          :class="star <= toInteger(product.RatingAvg) ? 'checked' : ''"
        >
        </span>
      </div>
      <p class="mt-5 description">{{ product.Description }}</p>
    </div>
    <div class="flex flex-col items-center">
      <div class="flex mt-8">
        <p class="product_price">${{ product.Price }}</p>
        <span class="price_line_through">${{ product["Retail Price"] }}</span>
      </div>
      <div class="add-to_cart">
        <p v-if="product.Stock === 0" class="text-center mb-2 text-danger">
          Out of Stock
        </p>
        <Button @click="addToCart(product)">Add To Cart</Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "@/components/Button/Button.vue";
import { computed, defineComponent, ref } from "vue";
import ProductList from "./productList.json";
import Notification from "@/components/Notification/Notification.vue";

export default defineComponent({
  components: { Button, Notification },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const showNotification = ref(false);
    const product = computed(
      () => ProductList.filter((prod) => prod.ProductID === Number(props.id))[0]
    );

    function addToCart(prod) {
      console.log("addToCart", prod.Name);
      showNotification.value = !showNotification.value;
    }
    function toInteger(num) {
      return Number(parseInt(num));
    }

    return { product, addToCart, toInteger, showNotification };
  },
});
</script>
<style scoped>
.product-detail {
  padding-top: 2.2rem;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
}
.product_price {
  font-size: 2rem;
}
.price_line_through {
  text-decoration: line-through;
  font-size: 1.3rem;
  margin-left: 0.5rem;
}
.buttons-img {
  position: absolute;
  margin-top: -2.8rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.buttons-img button {
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 0 0.8rem;
  background-color: #ff460f;
  color: #fff;
  border: 0.1rem solid #707070;
}
.product-name {
  margin-top: 0.3rem;
  font-size: 1.9rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
.description {
  line-height: 1.3rem;
  text-align: justify;
}
.add-to_cart {
  margin-top: 5rem;
}
@media screen and (min-width: 1200px) {
  .product-detail {
    grid-template-columns: 300px auto 250px;
  }
  .product-detail img {
    width: 300px;
    height: 300px;
  }
}
.fa-star {
  color: #000;
  margin-right: 0.3rem;
}
.checked {
  color: orange;
}
</style>
