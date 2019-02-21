<template>
  <div id="app">
    <div class="indexmenu">
      <b-navbar type="dark" variant="dark" class>
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
    </div>

  
    <div></div>
    <div class="article section1">
      <div style="margin-top:30vh;" class="maintitlecontent">
        <h1>夏啟銘</h1>
        <h1>Jimmy</h1>
        <p class="show-text">Full Stack Developer</p>
        <p class="show-text">Welcome To My Spece</p>
        <p class="show-text">Web Design - Backend Design - Data Sience</p>
      </div>
    </div>
    <div class="article-70 section2">
      <div style="margin-top:5vh;" class="maintitlecontent">
        <h1>About</h1>
        <p class="show-text">
          從畢業開始就從事資訊相關工作，從程式撰寫到分析設計，也非常喜愛如此的工作內容，
          近年來也開始朝著人工智慧的方向學習中，目前在成大 工程科學碩士在職專班 就讀中，
          主要研究方向為Machine Learning與Deep Learning.
        </p>
        <div style="padding-top: 2%;padding-left: 47%;">
          <button type="button" class="btn btn-warning">resume</button>
        </div>
        
      </div>
    </div>
    <div class="article section3">
      <div style="margin-top:5vh;" class="maintitlecontent">
      <h1>Skill</h1>

  <div class="container">
  <div class="row">
    <div class="col-sm">
     <span class="fa-stack fa-lg fa-3x st-feature">
        <i class="fab fa-js-square fa-stack-1x fa-inverse color"></i>
          </span>
          <h4>Website Design</h4>
	        <p>前端</p>
	        <p>Html、css、jquery</p>
          <p>Bootstrap、Vue、ajax</p>
          <p>ElementUi、d3js</p>
    </div>
    <div class="col-sm">
      <span class="fa-stack fa-lg fa-3x st-feature">
        <i class="fa fa-laptop-code fa-stack-1x fa-inverse color"></i>
          </span>
          <h4>Backend Design</h4>
	        <p>後端</p>
	        <p>Java、C#</p>
          <p>Spring、Struts、Hibernate</p>
    </div>
    <div class="col-sm">
      <span class="fa-stack fa-lg fa-3x st-feature">
            <i class="fa fa-database fa-stack-1x fa-inverse color"></i>
          </span>
          <h4>DataBase</h4>
	        <p>資料庫</p>
	        <p>Oracle DB、Ms SQL、DB2</p>
    </div>
    <div class="col-sm">
          <span class="fa-stack fa-lg fa-3x st-feature">
            <i class="fa fa-chart-line fa-stack-1x fa-inverse color"></i>
          </span>
          <h4>Data Sience</h4>
	        <p>人工智慧</p>
	        <p>TensorFlow、Keras</p>
    </div>
    </div>
  </div>
</div>
      <!-- <i class="fas fa-magic" data-fa-transform="rotate-270" style="background:MistyRose"></i> -->
       
    </div>
  </div>
</template>

<style lang="scss">
.indexmenu {
  position: fixed;
  width: 100%;
  z-index: 50;
  transition: background ease-in-out 0.2s;
  background: rgba(0, 0, 0, 0.8);
}

.show-text {
  color: white;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
}

.article {
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  padding: 40px;
  font: 24px "Arial";
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  line-height: 28px;
}

.article-70 {
  width: 100%;
  margin: 0 auto;
  height: 70vh;
  padding: 40px;
  font: 24px "Arial";
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  line-height: 28px;
}
.section1 {
  color: white;
  background-image: url(./image/a.jpg);
  font-weight: bold;
  text-shadow: 3px 4px 5px #373030;
}
.section2 {
  color: white;
  // background-image: url(./image/b.jpg);
  background-color: #00AA88;
  font-weight: bold;
  text-shadow: 3px 4px 5px #373030;
}
.section3 {
  color: white;
  background-image: url(./image/c.jpg);
  font-weight: bold;
  text-shadow: 3px 4px 5px #373030;
}
.maintitlecontent h1 {
  text-transform: uppercase;
  text-align: center;
  font-size: 80px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  color: white;
}

.maintitlecontent p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5em;
  letter-spacing: 0.5px;
}

.st-feature {

    border-radius: 50%;
    position: relative;
    -webkit-transform: rotate(0) scale(1);
    -ms-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
    -webkit-transition: color 0.3s, border-color 0.3s, background-color 0.3s, -webkit-transform 0.3s;
    transition: color 0.3s, border-color 0.3s, background-color 0.3s, transform 0.3s;
}
.st-feature:hover {
 
    background-color: transparent;
    -webkit-transform: rotate(360deg) scale(1.8);
    -ms-transform: rotate(360deg) scale(1.8);
    transform: rotate(360deg) scale(1.8);
}
</style>
<script>

</script>