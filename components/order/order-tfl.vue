<template>
  <input
    v-model="tlfValue"
    v-mask="'+7 ### ###-##-##'"
    type="text"
    placeholder="Телефон"
  />
</template>

<script>
export default {
  name: 'OrderTfl',
  computed: {
    tlfValue: {
      get() {
        return this.$store.getters['order/getOrderName']('tlf').value
      },
      set(value) {
        this.$store.commit('order/setOrder', { name: 'tlf', value })
      },
    },
  },
}
</script>
