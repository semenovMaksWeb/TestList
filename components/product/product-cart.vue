<template>
  <div @click="addCart">
    <img
      :class="$style['product-cart-img']"
      :src="require('@/assets/img/cart.svg')"
    />
  </div>
</template>

<script>
export default {
  name: 'ProductCart',
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    addCart() {
      this.$store.commit('cart/unshiftCart', this.product)
    },
  },
}
</script>
<style module lang="scss">
.product-cart-img {
  width: 12px;
  cursor: pointer;
  color: #959dad;
}
</style>
