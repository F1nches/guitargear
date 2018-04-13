<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import './assets/css/bootstrap-grid.min.css';
  @import './assets/css/style.css';
  @import './assets/css/flaticon.css';

  #app {
    width: 100%;
    height: 100%;
  }
  
</style>
