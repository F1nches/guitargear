<template>
  <div class="container-fluid">
    <h1>Wanted Amps</h1>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6 guitar-wrapper" v-for="amp in amps">
        <div class="guitar-container">
          <div class="guitar-image image" v-bind:style="{ background: 'url(' + amp.image + ') no-repeat center center/cover' }"></div>
          <div class="row no-margin">
            <div class="guitar-info col-sm-10">
              {{ amp.name }}
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
  name: 'WantedAmps',
  data () {
    return {
      amps: []
    }
  },
  created: function() {
    let self = this;
    this.axios.get('/static/sample-data-amps.json').then((response) => {
      for (var i=0; i<response.data.amps.length; i++) {
        if (response.data.amps[i].wanted) {
          self.amps.push(response.data.amps[i]);
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
