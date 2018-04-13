<template>
  <div class="container">
    <div class="row justify-content-md-center">
    <div class="col-md-4 col-sm-12">
      <div class="logo">
        <img src="../assets/img/myguitargear-logo-white.svg"/>
      </div>
      <form>
        <input type="text">
        <input type="password">
        <router-link to="dashboard"><button type="submit" value="submit" class="button">Login</button></router-link>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  height: 100vh;
  align-items: center;
}
input, button {
  width: 100%;
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 2px;
  text-align: center;
  font-weight: 700;
}
input {
  background: rgba(255,255,255,0.3);
  border: 0;
}
form {
  padding: 20px;
  padding-top: 5px;
  box-sizing: border-box;
}
</style>
