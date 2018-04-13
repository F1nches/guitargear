<template>
  <main>
    <login></login>
  </main>
</template>

<script>
import Login from '@/components/login.vue'

export default {
  components: {
    'login': Login
  },
  name: 'Landing',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  main {
    background: linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url('../../assets/img/red-guitar-bg.jpg') no-repeat center center/cover;
  }
</style>
