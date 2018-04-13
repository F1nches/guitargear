<template>
  <div>
    <div class="avatar">
      <img src="../assets/img/avatar.jpeg"/>
    </div>
    <ul class="parentmenu">
      <li v-for="item in menuItems">
        <div class="gear-options menu-item" v-on:click="show = !show">{{item.name}}</div>
        <ul class="submenu">
          <router-link :to="subitem.link" v-for="subitem in item.categories"><li><span class="flaticon" v-bind:class="subitem.icon"></span> {{subitem.name}}</li></router-link>
        </ul>
      </li>
      <li><div class="gear-options menu-item" v-on:click="show = !show">Gallery</div></li>
      <li><div class="gear-options menu-item" v-on:click="show = !show">Profile</div></li>
      <li><div class="gear-options menu-item" v-on:click="show = !show">Settings</div></li>
      <li><div class="gear-options menu-item" v-on:click="show = !show">Sign out</div></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      show: false,
      exitIcon: 'flaticon-exit',
      menuItems: [
        {
          name: 'My Gear',
          categories: [
            {name: 'Guitars', icon: 'flaticon-guitar', link: '/dashboard/guitars'},
            {name: 'Amps', icon: 'flaticon-amp', link: '/dashboard/amps'},
            {name: 'Pedals', icon: 'flaticon-pedal-for-guitar', link: '/dashboard/pedals'},
            {name: 'Extras', icon: 'flaticon-guitar-pick', link: '/dashboard/extras'},
          ]
        },
        {
          name: 'Wanted',
          categories: [
            {name: 'Guitars', icon: 'flaticon-guitar'},
            {name: 'Amps', icon: 'flaticon-amp'},
            {name: 'Pedals', icon: 'flaticon-pedal-for-guitar'},
            {name: 'Extras', icon: 'flaticon-guitar-pick'},
          ]
        }
      ],
      userData: {
        guitars: [
          {name: 'Gibson SG', color: 'Red'},
          {name: 'Gibson Les Paul', color: 'Sunburst'},
        ],
        amps: [
          {name: 'Marshall Half Stack', color: 'Black'}
        ]
      }
    }
  },
  methods: {
    activeMenuItem: function() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  display: block;
  width: 100%;
}
.avatar img {
  width: 100%;
}
.menu-item {
  color: #fff;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding-bottom: 10px;
}
.menu-item ul {
  height: 0;
  visibility: hidden;
  transition: 0.3s;
}
.menu-item.active ul {
  height: auto;
  visibility: visible;
  transition: 0.3s;
}
.parentmenu > li {
  color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  cursor: pointer;
}
ul.submenu li {
  color: #fff;
  padding: 20px;
  margin-left: -20px;
  margin-right: -20px;
  transition: 0.2s;
  cursor: pointer;
}
ul.submenu li:hover {
  background: #2a343d;
  transition: 0.2s;
}
li a {
  color: #fff;
}
</style>
