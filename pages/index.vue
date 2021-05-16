<template>
  <div class="container">
    <div class="row">
      <aside-catalog />
      <view-product :products="products" />
      <aside-cart v-if="getAsideCart" />
    </div>
  </div>
</template>

<script>
import AsideCatalog from '~/components/aside-catalog'
import ViewProduct from '~/components/product/view-product'
export default {
  components: {
    AsideCart: () => import('~/components/cart/aside-cart/aside-cart'),
    ViewProduct,
    AsideCatalog,
  },
  async fetch({ store, query }) {
    await Promise.all([
      store.dispatch('categories/axiosCategories'),
      store.dispatch('product/axiosProduct', query.categories),
    ])
  },
  computed: {
    products() {
      return this.$store.getters['product/getProduct']
    },
    getAsideCart() {
      return this.$store.getters.getAsideCart
    },
  },
  watch: {
    async $route() {
      await this.$store.dispatch(
        'product/axiosProduct',
        this.$route.query.categories
      )
    },
  },
}
</script>
