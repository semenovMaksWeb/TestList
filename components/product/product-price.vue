<template>
  <div :class="$style['product-price']">{{ price }} ₽</div>
</template>

<script>
export default {
  name: 'ProductPrice',
  props: {
    price: {
      type: Number,
    },
  },
}
</script>

<style lang="scss" module>
.product {
  &-price {
    color: #1f1f1f;
    font-weight: 700;
  }
}
</style>
