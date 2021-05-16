<template>
  <img
    :class="$style['aside__cart-exit']"
    :src="require('assets/img/exit.svg')"
    @click="close"
  />
</template>

<script>
export default {
  name: 'AsideCartClose',
  methods: {
    close() {
      this.$store.commit('setAsideCart', false)
      this.$store.commit('setOrderError', false)
      this.$store.commit('setOrderTrue', false)
      this.$store.commit('order/resetOrder')
    },
  },
}
</script>

<style lang="scss" module>
.aside__cart {
  &-exit {
    position: absolute;
    right: 53px;
    top: 65px;
    cursor: pointer;
  }
  //
}
</style>
