<template>
  <nav :class="$style['nav-wrapper']">
    <div class="container" :class="$style['nav']">
      <div :class="$style['logo']">TestList</div>
      <cart-icons />
    </div>
  </nav>
</template>

<script>
import CartIcons from '~/components/nav/cart-icons'
export default {
  name: 'CustomNav',
  components: { CartIcons },
}
</script>

<style lang="scss" module>
.nav {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  &-wrapper {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  }
}
.logo {
  font-size: 20px;
  font-weight: 700;
}
</style>
