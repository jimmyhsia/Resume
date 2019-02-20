<template>
  <div id="app">
    <b-navbar type="dark" variant="dark" class="">
    <b-navbar-nav>
      <b-nav-item href="#">Home</b-nav-item>
      <b-nav-item href="#">About</b-nav-item>
      <b-nav-item href="#">Skill</b-nav-item>
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

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
    <div class="mainpage" style="height: 100vh">
      <div class="mainpage-mask">
        <div>
          <p class="el-loading-text">Jimmy Hsia</p>
          <p class="el-loading-text">Full Stack developer</p>
          </div>
          </div>
    <parallax>
      <img src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg">
    </parallax>
    </div>
     <div class="about" style="position: relative; z-index: 9999;">
        <h2>About me</h2>
      <p>從畢業開始就從事資訊相關工作，從程式撰寫到分析設計，也非常喜愛如此的工作內容，
        近年來也開始朝著人工智慧的方向學習中，目前在成大 工程科學碩士在職專班 就讀中，
        主要研究方向為Machine Learning與Deep Learning,有參加資測會機器學習相關課程.</p>
    </div>
    <div style="background-color: #fff; height: 100vh;"></div>
     <div style="position: relative;">
      <parallax>
        <img src="https://think360studio.com/wp-content/uploads/2017/12/Learn-coding-online.jpeg">
      </parallax>
    </div>

    <div style="background-color: #fff; height: 100vh;"></div>
  </div>
 

</template>

<style lang="scss">
.indexmenu {
    position: fixed;
    width: 100%;
    z-index: 50;
    transition: background ease-in-out .2s;
    background: rgba(0, 0, 0, 0.8);
}
.mainpage{
  background-color: rgba(0, 0, 0, 0.8);
}
.mainpage-mask {
    position: absolute;
    z-index: 2000;
    margin: 0;
    top: 20;
    right: 0;
    bottom: 0;
    left: 0;
    // transition: opacity 0.3s;
}
.el-loading-text {
    color: white;
    text-align: center;
    max-width: 1000px;
    margin: 0 auto;
}
.about{
  height: 840px;
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