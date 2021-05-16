<template>
  <div class="">
    <cart-product
      v-for="(elem, index) in cart"
      :key="index"
      :product="elem"
      :index="index"
    />
  </div>
</template>

<script>
import CartProduct from '~/components/cart/cart-product/cart-product'
export default {
  name: 'ViewCartProduct',
  components: { CartProduct },
  props: {
    cart: {
      type: Array,
    },
  },
}
</script>

<!--<style lang="scss" module>-->
<!--.view-cart-product {}-->
<!--</style>-->
