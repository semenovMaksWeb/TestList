<template>
  <div :class="$style['error']">
    <span :class="$style['error-text-span']">!!</span>
    <p :class="$style['error-text']">
      Все поля обязательные. После удачной отправки формы содержимое корзины
      очищается
    </p>
  </div>
</template>

<script>
export default {
  name: 'OrderErrorText',
}
</script>

<style module lang="scss">
.error {
  max-width: 300px;
  margin-top: 32px;
  display: flex;
  align-items: flex-start;
  &-text {
    &-span {
      display: block;
      margin-right: 5px;
      line-height: 30px;
      font-size: 32px;
      color: #eb5757;
      font-weight: 700;
    }
  }
}
</style>
