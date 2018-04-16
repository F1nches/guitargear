<template>
  <div>
    <div class="avatar">
      <img src="../assets/img/avatar.jpeg"/>
    </div>
    <ul class="parentmenu">
      <li>
        <div class="gear-options menu-item" v-on:click="activeMenuItem" v-bind:class="{active: isActive}"><span class="flaticon flaticon-plus"></span> My Gear</div>
        <ul class="submenu" v-if="showGearMenu">
          <li><router-link to="/guitars"><span class="flaticon flaticon-guitar"></span> My Guitars</router-link></li>
          <li><router-link to="/amps"><span class="flaticon flaticon-amp"></span> My Amps</router-link></li>
          <li><router-link to="/pedals"><span class="flaticon flaticon-pedal-for-guitar"></span> My Pedals</router-link></li>
          <li><router-link to="/extras"><span class="flaticon flaticon-guitar-pick"></span> My Extras</router-link></li>
        </ul>
      </li>
      <li>
        <div class="gear-options menu-item" v-on:click="showWantedMenu = !showWantedMenu"><span class="flaticon flaticon-plus"></span> Wanted</div>
        <ul class="submenu" v-if="showWantedMenu">
          <li><router-link to="/wanted/guitars"><span class="flaticon flaticon-guitar"></span> Wanted Guitars</router-link></li>
          <li><router-link to="/wanted/amps"><span class="flaticon flaticon-amp"></span> Wanted Amps</router-link></li>
          <li><router-link to="/wanted/pedals"><span class="flaticon flaticon-pedal-for-guitar"></span> Wanted Pedals</router-link></li>
          <li><router-link to="/wanted/extras"><span class="flaticon flaticon-guitar-pick"></span> Wanted Extras</router-link></li>
        </ul>
      </li>
      <li><router-link to="/gear"><div class="gear-options menu-item" v-on:click="show = !show"><span class="flaticon flaticon-guitar"></span> Search All Gear</div></router-link></li>
      <li><router-link to="/community"><div class="gear-options menu-item" v-on:click="show = !show"><span class="flaticon flaticon-photo"></span> Community</div></router-link></li>
      <li><router-link to="/gallery"><div class="gear-options menu-item" v-on:click="show = !show"><span class="flaticon flaticon-photo"></span> Gallery</div></router-link></li>
      <li><router-link to="/profile"><div class="gear-options menu-item" v-on:click="show = !show"><span class="flaticon flaticon-musician"></span> Profile</div></router-link></li>
      <li><router-link to="/settings"><div class="gear-options menu-item" v-on:click="show = !show"><span class="flaticon flaticon-settings"></span> Settings</div></router-link></li>
      <li><router-link to="/login"><div class="gear-options menu-item" v-on:click="show = !show"><span class="flaticon flaticon-exit"></span> Sign out</div></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      showGearMenu: false,
      showWantedMenu: false,
      isActive: false,
      exitIcon: 'flaticon-exit'
    }
  },
  methods: {
    activeMenuItem: function() {
      this.showGearMenu = !this.showGearMenu;
      this.isActive = !this.isActive;
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
.parentmenu {
  font-family: 'Space Mono', sans-serif;
  text-transform: uppercase;
}
.gear-options {
  padding-top: 20px;
  padding-bottom: 20px;
}
.gear-options.active {
  background: #ee5253;
}
.menu-item {
  color: #fff;
  letter-spacing: 2px;
  text-transform: uppercase;
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
.parentmenu > li > a > div {
  color: #fff;
  cursor: pointer;
}
.submenu {
  background: #2a343d;
}
ul.submenu li {
  color: #fff;
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
.submenu li a.router-link-active span.flaticon, li a.router-link-active {
  color: #ee5253;
}
</style>
