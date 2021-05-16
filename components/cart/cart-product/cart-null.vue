<template>
  <div>
    <p :class="$style['aside__cart-text']">
      Пока что вы ничего не добавили в корзину.
    </p>
    <button class="button">Перейти к выбору</button>
  </div>
</template>

<script>
export default {
  name: 'CartNull',
}
</script>

<style lang="scss" module>
.aside__cart {
  &-text {
    font-size: 22px;
    margin-bottom: 15px;
  }
}
</style>
