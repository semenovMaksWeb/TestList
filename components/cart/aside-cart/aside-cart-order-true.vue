<template>
  <div :class="$style['wrapper']">
    <img :src="require('@/assets/img/ok-hand.png')" alt="" />
    <h2 :class="$style['title']">Заявка успешно отправлена</h2>
    <p :class="$style['text']">Вскоре наш менеджер свяжется с Вами</p>
  </div>
</template>

<script>
export default {
  name: 'AsideCartOrderTrue',
}
</script>

<style module lang="scss">
.wrapper {
  width: 300px;
}
.title {
  font-size: 24px;
  font-weight: 700;
}
.text {
  font-size: 16px;
}
</style>
