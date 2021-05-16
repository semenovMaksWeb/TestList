<template>
  <button class="button" @click.prevent="orderSet">Отправить</button>
</template>

<script>
export default {
  name: 'OrderButton',
  computed: {
    validateOrder() {
      return this.$store.getters['order/getValidate']
    },
  },
  methods: {
    orderSet() {
      this.$store.commit('order/validate')
      if (this.validateOrder) {
        this.$store.commit('setOrderError', true)
      } else {
        this.$store.commit('setOrderError', false)
        this.$store.commit('setOrderTrue', true)
        this.$store.commit('cart/resetCart')
      }
    },
  },
}
</script>
