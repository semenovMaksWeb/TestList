<template>
  <div :class="$style['order-wrapper']">
    <h2 :class="$style['order-title']">Оформить заказ</h2>
    <form action="" :class="$style['order-form']">
      <input
        v-model="name"
        type="text"
        :class="$style['order-input']"
        placeholder="Ваше имя"
      />
      <order-tfl :class="$style['order-input']" />
      <input
        v-model="adress"
        type="text"
        :class="$style['order-input']"
        placeholder="Адрес"
      />
      <order-button />
      <order-error-text v-if="getOrderError" />
    </form>
  </div>
</template>

<script>
import OrderTfl from '~/components/order/order-tfl'
import OrderButton from '~/components/order/order-button'
export default {
  name: 'OrderForm',
  components: {
    OrderErrorText: () => import('~/components/order/order-error-text'),
    OrderButton,
    OrderTfl,
  },
  computed: {
    name: {
      get() {
        return this.$store.getters['order/getOrderName']('name').value
      },
      set(value) {
        this.$store.commit('order/setOrder', { name: 'name', value })
      },
    },
    adress: {
      get() {
        return this.$store.getters['order/getOrderName']('adress').value
      },
      set(value) {
        this.$store.commit('order/setOrder', { name: 'adress', value })
      },
    },
    getOrderError() {
      return this.$store.getters.getOrderError
    },
  },
}
</script>

<style module lang="scss">
.order {
  &-wrapper {
    margin-top: 30px;
  }
  &-title {
    font-size: 18px;
    color: #59606d;
    margin-bottom: 15px;
  }
  &-input {
    display: block;
    width: 100%;
    border-radius: 8px;
    padding: 15px;
    background: #f8f8f8;
    border: 0;
    margin-bottom: 15px;
  }
}
</style>
