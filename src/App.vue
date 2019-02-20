<template>
  <div id="app">
    <b-navbar type="dark" variant="dark" class="indexmenu">
    <b-navbar-nav>
      <b-nav-item href="#">Home</b-nav-item>
      <b-nav-item href="#">About</b-nav-item>
      <!-- Navbar dropdowns 
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>-->
    </b-navbar-nav>
  </b-navbar>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
  </div>


<parallax>
  <img src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg">
</parallax>



</template>

<style lang="scss">
.indexmenu {
    position: fixed;
    width: 100%;
    z-index: 50;
    transition: background ease-in-out .2s;
    background: rgba(0, 0, 0, 0.8);
}
</style>
<script>
 import Parallax from 'vue-parallaxy'
 export default {
  
  components: {
    Parallax
  }
}
</script>