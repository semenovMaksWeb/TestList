<template>
  <div :class="$style['aside__cart']">
    <aside-cart-close />
    <h2 class="h1">Корзина</h2>
    <cart-null v-if="cart.length === 0 && !getOrderTrue" />
    <div v-else-if="!getOrderTrue">
      <p :class="$style['aside__cart-text']">Товары в корзине</p>
      <view-cart-product :cart="cart" />
      <order-form />
    </div>
    <AsideCartOrderTrue v-if="getOrderTrue" />
  </div>
</template>

<script>
import CartNull from '~/components/cart/cart-product/cart-null'
import ViewCartProduct from '~/components/cart/cart-product/view-cart-product'
import AsideCartClose from '~/components/cart/aside-cart/aside-cart-close'
import OrderForm from '~/components/order/order-form'

export default {
  name: 'AsideCart',
  components: {
    AsideCartOrderTrue: () =>
      import('~/components/cart/aside-cart/aside-cart-order-true'),
    OrderForm,
    AsideCartClose,
    ViewCartProduct,
    CartNull,
  },
  computed: {
    getOrderTrue() {
      return this.$store.getters.getOrderTrue
    },
    cart() {
      return this.$store.getters['cart/getProduct']
    },
  },
}
</script>

<style lang="scss" module>
.aside__cart {
  min-width: 300px;
  max-width: 100%;
  overflow: auto;
  top: 0;
  min-height: 100vh;
  height: 100%;
  background: #fff;
  z-index: 100;
  padding: 50px 53px 0 50px;
  position: fixed;
  right: 0;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.05);
  &-text {
    margin-bottom: 15px;
  }
}
</style>
