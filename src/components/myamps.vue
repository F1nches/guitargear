<template>
  <div class="container-fluid">
    <div class="card col-xs-12 row" v-for="amp in myamps">
      <div class="col-md-4 col-xs-6">
        <img v-bind:src="amp.img"/>
      </div>
      <div class="col-md-8 col-xs-6">
        <h2>{{amp.name}}</h2>
        <p>{{amp.power}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyAmps',
  data () {
    return {
      myamps: [
        {name:'Marshall Half Stack', power: '40w', img: '../static/marshall.png'},
        {name:'Peavey Amp', power: '20w', img: '../static/peavey.png'}
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
