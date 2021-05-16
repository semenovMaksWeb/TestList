<template>
  <div :class="$style['product']">
    <div class="row-no-gutters" :class="$style['product-row']">
      <product-rating :rating="product.rating" />
      <product-cart :product="product" />
    </div>
    <img :src="product.photo" :class="$style['product-img']" />
    <div :class="$style['product-name']">{{ product.name }}</div>
    <product-price :price="product.price" />
  </div>
</template>

<script>
import ProductCart from '~/components/product/product-cart'
import ProductRating from '~/components/product/product-rating'
import ProductPrice from '~/components/product/product-price'
export default {
  name: 'Product',
  components: { ProductPrice, ProductRating, ProductCart },
  props: {
    product: {
      type: Object,
      require: true,
    },
  },
}
</script>

<style lang="scss" module>
@import 'assets/scss/mixins/media';
.product {
  padding: 20px 18px 15px 20px;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
  background: #fff;
  width: calc(100%);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  @include xs-block() {
    width: calc(50% - 30px);
  }

  @include lg-block() {
    width: calc(33.3333333333% - 30px);
  }
  &-row {
    justify-content: space-between;
    align-items: center;
  }
  &-img {
    display: block;
    width: 50%;
    height: auto;
    margin: 0 auto 20px;
  }
  &-name {
    font-size: 14px;
    color: #59606d;
  }
}
</style>
