<template>
  <div :class="$style['product-rating']">
    <img :src="require('@/assets/img/stroke.svg')" />
    <span :class="$style['product-rating-value']">{{ rating }}</span>
  </div>
</template>

<script>
export default {
  name: 'ProductRating',
  props: {
    rating: {
      type: Number,
    },
  },
}
</script>

<style lang="scss" module>
.product {
  &-rating {
    display: flex;
    &-value {
      margin-left: 3px;
      font-size: 10px;
      color: #f2c94c;
    }
  }
}
</style>
