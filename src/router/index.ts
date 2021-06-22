import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ProductList from "../views/Products/ProductList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "product-list",
    component: ProductList,
  },
  {
    path: "/product/:id",
    name: "product-detail",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "ProductDetail" */ "../views/Products/ProductDetail.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
