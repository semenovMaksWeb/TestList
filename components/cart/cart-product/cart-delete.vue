<template>
  <img
    :src="require('@/assets/img/delete.svg')"
    :class="$style['cart-delete']"
    @click="deleteCart"
  />
</template>

<script>
export default {
  name: 'CartDelete',
  props: {
    index: {
      type: Number,
      require: true,
    },
  },
  methods: {
    deleteCart() {
      this.$store.commit('cart/deleteCart', this.index)
    },
  },
}
</script>

<style module lang="scss">
.cart-delete {
  cursor: pointer;
}
</style>
