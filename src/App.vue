<template>
  <div id="app">
    <div class="indexmenu">
      <b-navbar type="dark" variant="dark" class>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item href="#about">About</b-nav-item>
          <b-nav-item href="#skill">Skill</b-nav-item>
          <b-nav-item href="#">Experience</b-nav-item>
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
    </div>
      
	  
	    
    <router-view></router-view>
    <div></div>
    
    
    

      <!-- <i class="fas fa-magic" data-fa-transform="rotate-270" style="background:MistyRose"></i> -->
       
    </div>
 
</template>


<script>

</script>