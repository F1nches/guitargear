<template>
  <div class="container-fluid profile-container">
    <h1>Wanted Guitars</h1>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6 guitar-wrapper" v-for="guitar in guitars">
        <div class="guitar-container">
          <div class="guitar-image image" v-bind:style="{ background: 'url(' + guitar.image + ') no-repeat center center/cover' }"></div>
          <div class="row no-margin">
            <div class="guitar-info col-sm-10">
              {{ guitar.name }}
            </div>
            <div class="guitar-info col-sm-2">
              <span class="flaticon flaticon-shapes-1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar'

export default {
  components: {
    'sidebar': Sidebar,
  },
  name: 'Wanted',
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
