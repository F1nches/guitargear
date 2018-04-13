<template>
  <div class="container-fluid profile-container">
    <div class="row">
      <div class="col-md-2 col-xs-12 sidebar-container">
        <sidebar></sidebar>
      </div>
      <div class="col-md-10 col-xs-12">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar'
import MyGuitars from '@/components/myguitars'

export default {
  components: {
    'sidebar': Sidebar,
    'myguitars': MyGuitars
  },
  name: 'Dashboard',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-container {
  height: 100%;
}
.profile-container .row {
  height: 100%;
}
.sidebar-container {
  background: #1e272e;
  height: 100%;
  padding: 0;
}
</style>
