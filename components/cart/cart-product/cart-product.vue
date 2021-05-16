<template>
  <div :class="$style['product']">
    <img :class="$style['product-img']" :src="product.photo" />
    <div :class="$style['product-date']">
      <div>
        <div>{{ product.name }}</div>
        <product-price :price="product.price" />
      </div>
      <product-rating
        :rating="product.rating"
        :class="$style['product-rating']"
      />
    </div>
    <cart-delete :index="index" />
  </div>
</template>

<script>
import ProductRating from '~/components/product/product-rating'
import CartDelete from '~/components/cart/cart-product/cart-delete'
import ProductPrice from '~/components/product/product-price'
export default {
  name: 'CartProduct',
  components: { ProductPrice, CartDelete, ProductRating },
  props: {
    product: {
      type: Object,
      require: true,
    },
    index: {
      type: Number,
      require: true,
    },
  },
}
</script>

<style lang="scss" module>
@import 'assets/scss/mixins/media';
.product {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  padding: 15px 50px 15px 25px;

  &-img {
    max-width: 100px;
  }
  &-rating {
    margin-top: auto;
    margin-bottom: 20px;
  }
  &-date {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
