<template>
  <div class="home">
    <div class="article section1">
      <div style="margin-top:30vh;" class="maintitlecontent">
        <h1>{{resuemData.chName}}</h1>
        <h1>{{resuemData.lastName}} {{resuemData.fristName}}</h1>
        <p class="show-text">{{resuemData.jobTitle}}</p>
        <p class="show-text">Welcome To My Spece</p>
        <p class="show-text"><template v-for="item in resuemData.jobDetail">{{item}} &nbsp;&nbsp;</template> </p>
      </div>
    </div>
    <div class="article-70 section2" id="about" style="background-color: rgba(0, 0, 0, 0.8);">
      <div style="margin-top:5vh;" class="maintitlecontent">
        <h1>About</h1>
        <p class="show-text">
          {{resuemData.aboutMe}}
        </p>
        <div style="padding-top: 2%;padding-left: 47%;">
          <button type="button" class="btn btn-warning" @click="doResume()">resume</button>
        </div>
      </div>
    </div>
    <div class="article section3" id="skill">
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
    </div>
    <div class="article section2" id="experience">
      <div style="margin-top:5vh;" class="experience">
        <h1>Experience</h1>
        <div class="container">
          <div class="row">
            <div class="col-sm" v-for="item in resuemData.experience" :key='item.companyName'>
              <b-card tag="article"
                style="max-width: 20rem;"
                class="mb-2"
                border-variant="info"
                :header="item.companyName"
                align="center" 
              >
              <b-card-text>
                  <ul>
                    <li v-for="detailItem in item.detail" :key='detailItem'>{{detailItem}}</li>
                  </ul>
                </b-card-text>
              </b-card>
            
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="article section4" id="about" style="background-color: rgba(0, 0, 0, 0.8);"  v-for="item in resuemData.experience" :key='item.jobContent'>
      <div style="margin-top:5vh;" class="experience">
        <h1>{{item.companyName}}</h1>
        <b-card>
          <b-media>
            <h3>工作內容</h3>
            <p>
              {{item.jobContent}}
            </p>
          </b-media>
        </b-card>
        <div class="container">
          <div class="row">
             <div class="col" v-for="itemchart in item.chart"  :key='itemchart.column'><ve-pie :data="itemchart"></ve-pie></div>
            
          </div>
        </div>
      </div>
    </div>

    

   
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import firebase from "firebase";
import {
  firebaseDb
} from '../firebaseDb'
export default {
  name: "home",

  data() {
    return {
      resuemData:{},
      resumeId:'jimmyhsia0522@gmail.com',
      chartData: {
        columns: ["工作內容", "年資"],
        rows: [
          { 工作內容: "系統分析", 年資: 0.6 },
          { 工作內容: "系統設計", 年資: 0.9 },
          { 工作內容: "程式設計", 年資: 1.5 }
        ]
      }
    };
  },
  created: function() {
      var result = firebase.database().ref("resume");
      // child_added or value
      var $this = this;
      result.orderByChild('resumeId').equalTo("jimmyhsia0522@gmail.com").on("child_added", function(snap) {
        $this.$set($this.$data , 'resuemData', snap.val())
      })
      
  },    

  methods: {
    doResume() {
      window.open("https://www.cakeresume.com/790f57");
    },
    getData(){
      var result = firebase.database().ref("resume");
      // child_added or value
      var $this = this;
      result.orderByChild('resumeId').equalTo("jimmyhsia0522@gmail.com").on("child_added", function(snap) {
        $this.$set($this.$data , 'resuemData', snap.val())
      })
    }
  },
};
</script>
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
  font: 24px;
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
  font: 24px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  line-height: 28px;
}

.article-80 {
  width: 100%;
  margin: 0 auto;
  height: 80vh;
  padding: 40px;
  font: 24px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  line-height: 28px;
}
.el-loading-mask {
  //position: absolute;
  z-index: 2000;
  background-color: rgba(255, 255, 255, 0.9);
  transition: opacity 0.3s;
}
.section1 {
  color: white;
  background-image: url(../image/a.jpg);
  font-weight: bold;
  text-shadow: 3px 4px 5px #373030;
}
.section2 {
  color: black;
  background-image: url(../image/c.jpg);
  //background-color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  // text-shadow: 3px 4px 5px #373030;
}
.section3 {
  color: white;
  background-image: url(../image/f.jpg);
  font-weight: bold;
  text-shadow: 3px 4px 5px #373030;
}
.section4 {
  color: #404040;
  background-image: url(../image/e.jpg);
  //background-color: #ffcc66;
  font-weight: bold;
  // text-shadow: 3px 4px 5px #373030;
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

.experience h1 {
  // text-transform: uppercase;
  text-align: center;
  font-size: 80px;
  // text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  color: white;
}

.experience li {
  text-align: left;
  font-size: 14px;
}

.st-feature {
  border-radius: 50%;
  position: relative;
  -webkit-transform: rotate(0) scale(1);
  -ms-transform: rotate(0) scale(1);
  transform: rotate(0) scale(1);
  -webkit-transition: color 0.3s, border-color 0.3s, background-color 0.3s,
    -webkit-transform 0.3s;
  transition: color 0.3s, border-color 0.3s, background-color 0.3s,
    transform 0.3s;
}
.st-feature:hover {
  background-color: transparent;
  -webkit-transform: rotate(360deg) scale(1.8);
  -ms-transform: rotate(360deg) scale(1.8);
  transform: rotate(360deg) scale(1.8);
}
</style>