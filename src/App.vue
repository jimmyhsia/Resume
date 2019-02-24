<template>
  <div id="app">
    <div class="indexmenu">
      <b-navbar type="dark" variant="dark" class>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item href="#about">About</b-nav-item>
          <b-nav-item href="#skill">Skill</b-nav-item>
          <b-nav-item href="#">Experience</b-nav-item>
          <b-nav-item href="#" @click="setTest">test</b-nav-item>
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
  </div>
</template>


<script>
import firebase from "firebase";
export default {
  data() {
    return {};
  },
  methods: {
    setTest() {
      firebase
        .database()
        .ref("resume")
        .set({"jimmyhsia0522":{resumeId: "jimmyhsia0522@gmail.com",
          fistName: "Hsia",
          lastName: "Jimmy",
          chName: "夏啟銘",
          jobTitle: "Full Stack Developer",
          jobDetail: ["Web Design","Backend Design","Data Sience"],
          aboutMe:
            "從畢業開始就從事資訊相關工作，從程式撰寫到分析設計，也非常喜愛如此的工作內容， 近年來也開始朝著人工智慧的方向學習中，目前在成大 工程科學碩士在職專班 就讀中， 主要研究方向為Machine Learn",

          experience: [
            {
              companyName: "聯強國際",
              detail: [
                "開發內部ERP系統。",
                "新ERP系統導入澳洲、台灣。",
                "系統分析(SA)。",
                "系統設計(SD)。",
                "程式撰寫。",
                "擔任福委，舉辦部門及跨部門活動。"
              ],
              jobContent:
                "維護及開發其維修、倉儲ERP系統， 使用 JAVA SSH為框架，前端使用Javascript、jQuery、 DB為Oracle SQL，使用jQuery mobile開發手機網頁程式。",
              chart: [
                {
                  columns: ["工作內容", "年資"],
                  rows: [
                    { 工作內容: "系統分析", 年資: 0.6 },
                    { 工作內容: "系統設計", 年資: 0.9 },
                    { 工作內容: "程式設計", 年資: 1.5 }
                  ]
                }
              ]
            },
            {
              companyName: "經緯航太",
              detail: [
                "開發台南市道路挖掘系統。",
                "系統分析(SA)。",
                "系統設計(SD)。"
              ],
              jobContent:
                "開發台南市道路挖掘系統，為舊系統翻新，主要負責系統分析設計，包含作業/系統流程規劃，資料庫正規畫，UI/UX設計。",
              chart: [
                {
                  columns: ["工作內容", "比重"],
                  rows: [
                    { 工作內容: "需求訪談", 比重: 20 },
                    { 工作內容: "資料庫設計", 比重: 25 },
                    { 工作內容: "系統分析分析", 比重: 25 },
                    { 工作內容: "頁面設計", 比重: 20 },
                    { 工作內容: "設備維護", 比重: 10 }
                  ]
                }
              ]
            },
            {
              companyName: "網際優勢",
              detail: ["開發中鋼ERP系統。", "程式撰寫。"],
              jobContent:
                "維護及開發其維修、倉儲ERP系統， 使用JAVA SSH為框架，前端使用Javascript、jQuery、 DB為Oracle SQL，使用jQuery mobile開發手機網頁程式。",
              columns: ["工作內容", "比重"],
              rows: [{ 工作內容: "程式設計", 比重: 100 }]
            }
          ]}
          
        })
        .catch(function(error) {
          console.error(error);
        });
    }
  }
};
</script>