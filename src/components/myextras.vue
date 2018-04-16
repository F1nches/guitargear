<template>
  <div class="container-fluid">
    <h1>My Extras</h1>
    <div class="card col-xs-12 row" v-for="guitar in myguitars">
      <div class="col-md-4 col-xs-6">
        <img v-bind:src="guitar.img"/>
      </div>
      <div class="col-md-8 col-xs-6">
        <h2>{{guitar.name}}</h2>
        <p>{{guitar.color}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyExtras',
  data () {
    return {
      myguitars: [
        {name:'Gibson Les Paul', color: 'Vintage Sunburst', img: '../static/lespaul.png'},
        {name:'Gibson SG', color: 'Red', img: '../static/lespaul.png'}
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
