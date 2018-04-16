<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-md-10 col-sm-12">
        <div class="row">
          <div class="col-md-6">
            <input type="text" placeholder="Search by name">
          </div>
          <div class="col-md-6">
            <input type="text" placeholder="Search by brand">
          </div>
        </div>
        <div class="scrollable" v-bar="{
            preventParentScroll: true,
            scrollThrottle: 30,
        }">
          <div class="guitar-grid-container">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12 guitar-wrapper" v-for="guitar in guitars">
                <div class="guitar-container">
                  <div class="guitar-image image" v-bind:style="{ background: 'url(' + guitar.image + ') no-repeat center center/cover' }"></div>
                  <div class="row no-margin">
                    <div class="guitar-info col-sm-9">
                      {{ guitar.name }}
                    </div>
                    <div class="guitar-buttons col-sm-3">
                      <span class="flaticon flaticon-shapes"></span>
                      <span class="flaticon flaticon-plus"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-2 col-sm-12 filter-bar">
        <h3>Filter by category</h3>
        <ul class="filter-cats">
          <li>Guitars</li>
          <li>Amps</li>
          <li>Pedals</li>
          <li>Extras</li>
        </ul>
        <h3>Filter by common use</h3>
        <ul class="filter-cats">
          <li>Rock</li>
          <li>Jazz</li>
          <li>Country</li>
          <li>Acoustic</li>
          <li>Metal</li>
        </ul>
      </div>

  </div>
  </div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'Gear',
  data () {
    return {
      guitars: [],
      isFavorite: false,
      isNotFavorite: true
    }
  },
  created: function() {
    let self = this;
    this.axios.get('/static/sample-data.json').then((response) => {
      self.guitars = response.data.guitars;
    }).catch(error => {
      console.log(error);
    })
  },
  methods: {
    favorite: function() {
      this.isNotFavorite = !this.isNotFavorite;
      this.isFavorite = !this.isFavorite;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  padding-right: 0;
  padding-left: 0;
}
input {
  padding: 10px;
  margin-top: 25px;
  width: 100%;
}
.scrollable {
  height: 100vh;
  overflow: scroll;
}
.guitar-grid-container {
  padding: 20px;
}
.filter-bar {
  background: #1e272e;
}

span.flaticon {
  display: inline-block;
  padding: 5px;
}
.guitar-buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
