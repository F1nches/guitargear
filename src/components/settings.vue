<template>
  <div class="container-fluid">
    <h1>Settings</h1>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6 guitar-wrapper" v-for="guitar in guitars">
        <div class="guitar-container">
          <div class="guitar-image image" v-bind:style="{ background: 'url(' + guitar.image + ') no-repeat center center/cover' }"></div>
          <div class="row no-margin">
            <div class="guitar-info col-sm-10">
              {{ guitar.name }}
            </div>
            <div class="guitar-info col-sm-2">
              <span class="flaticon flaticon-shapes"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
      guitars: []
    }
  },
  created: function() {
    let self = this;
    this.axios.get('/static/sample-data-guitars.json').then((response) => {
      for (var i=0; i<response.data.guitars.length; i++) {
        if (response.data.guitars[i].owned) {
          self.guitars.push(response.data.guitars[i]);
        }
      }
    }).catch(error => {
      console.log(error);
    })
  },
  mounted: function() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
}
</style>
