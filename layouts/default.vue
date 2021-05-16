<template>
  <div>
    <custom-nav />
    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import CustomNav from '~/components/nav/custom-nav'
export default {
  components: { CustomNav },
}
</script>
