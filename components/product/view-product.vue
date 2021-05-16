<template>
  <div class="row-no-gutters" :class="$style['product-row']">
    <product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import Product from '~/components/product/product'
export default {
  name: 'ViewProduct',
  components: { Product },
  props: {
    products: {
      type: Array,
      require: true,
    },
  },
}
</script>

<style lang="scss" module>
@import 'assets/scss/mixins/media';
.product-row {
  width: 100%;
  @include lg-block() {
    width: 75%;
  }
}
</style>
