<template>
  <div :class="$style['cart-wrapper']" @click="open">
    <img
      :class="$style['cart-icons']"
      :src="require('assets/img/cart.svg')"
      alt="cart-icons"
    />
    <div :class="$style['cart-count']">{{ cart.length }}</div>
  </div>
</template>

<script>
export default {
  name: 'CartIcons',
  computed: {
    cart() {
      return this.$store.getters['cart/getProduct']
    },
  },
  methods: {
    open() {
      this.$store.commit('setAsideCart', true)
    },
  },
}
</script>

<style lang="scss" module>
.cart-icons {
  height: 26px;
  width: 24px;
  cursor: pointer;
}
.cart-wrapper {
  position: relative;
}
.cart-count {
  background: #959dad;
  color: #fff;
  position: absolute;
  top: -4px;
  right: -4px;
  font-size: 8px;
  font-weight: 700;
  border-radius: 50%;
  padding: 1px 3px;
}
</style>
