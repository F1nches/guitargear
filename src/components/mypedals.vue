<template>
  <div class="container-fluid">
    <div class="card col-xs-12 row" v-for="pedal in mypedals">
      <div class="col-md-4 col-xs-6">
        <img v-bind:src="pedal.img"/>
      </div>
      <div class="col-md-8 col-xs-6">
        <h2>{{pedal.name}}</h2>
        <p>{{pedal.type}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pedals',
  data () {
    return {
      mypedals: [
        {name:'Line 6 Helix', type: 'Multi Effects Modeler', img: '../static/helix.png'},
        {name:'Line 6 DM4', type: 'Overdrive/Distortion', img: '../static/dm4.png'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
}
</style>
