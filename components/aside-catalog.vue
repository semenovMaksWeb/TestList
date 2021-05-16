<template>
  <div :class="$style['aside__catalog']">
    <h1 class="h1">Каталог</h1>
    <div :class="$style['aside-wrapper__link']">
      <nuxt-link
        v-for="elem in categories"
        :key="elem.id"
        :exact-active-class="'link-active'"
        :class="$style['aside__catalog-link']"
        :to="'/?categories=' + elem.id"
        class="link"
        >{{ elem.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsideCatalog',
  computed: {
    categories() {
      return this.$store.getters['categories/getCategories']
    },
  },
}
</script>

<style lang="scss" module>
@import '../assets/scss/mixins/media';
.aside__catalog {
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  @include lg-block() {
    width: 25%;
  }

  &-link {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.aside-wrapper__link {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
