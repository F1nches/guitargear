<template>
  <div class="container-fluid">
    <h1>Wanted Extras</h1>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6 guitar-wrapper" v-for="guitar in guitars">
        <div class="guitar-container">
          <div class="guitar-image image" v-bind:style="{ background: 'url(' + guitar.image + ') no-repeat center center/cover' }"></div>
          <div class="guitar-info">
            {{ guitar.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WantedExtras',
  data () {
    return {
      myguitars: [
        {name:'Gibson Les Paul', color: 'Vintage Sunburst', img: '../static/lespaul.png'},
        {name:'Gibson SG', color: 'Red', img: '../static/sg.png'},
        {name:'Epihone Les Paul', color: 'Green', img: '../static/epiphone.png'}
      ],
      guitars: []
    }
  },
  created: function() {
    let self = this;
    this.axios.get('/static/sample-data.json').then((response) => {
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
