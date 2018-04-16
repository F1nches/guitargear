<template>
  <div class="container-fluid">
    <h1>Wanted Pedals</h1>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6 guitar-wrapper" v-for="pedal in pedals">
        <div class="guitar-container">
          <div class="guitar-image image" v-bind:style="{ background: 'url(' + pedal.image + ') no-repeat center center/cover' }"></div>
          <div class="row no-margin">
            <div class="guitar-info col-sm-10">
              {{ pedal.name }}
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
export default {
  name: 'WantedPedals',
  data () {
    return {
      pedals: []
    }
  },
  created: function() {
    let self = this;
    this.axios.get('/static/sample-data-pedals.json').then((response) => {
      for (var i=0; i<response.data.pedals.length; i++) {
        if (response.data.pedals[i].wanted) {
          self.pedals.push(response.data.pedals[i]);
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
