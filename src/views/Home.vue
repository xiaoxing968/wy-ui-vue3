<template>
  <div>
    <TopNav />
    <div class="banner" :style="{backgroundImage:'url('+ BackImg +')'}">
      <h1 class="title">wy-ui</h1>
      <h2>基于Vue3的UI框架</h2>
      <p class="actions">
        <a href="https://github.com/xiaoxing968">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from "../components/TapNav.vue";
import BackImg from '../assets/back.svg'
export default {
  setup(){
    console.log(BackImg)
    return{
      BackImg
    }
  },
  components: {TopNav},
};
</script>

<style lang="less" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #3698db;
  position: fixed;
  height: 100%;
  width: 100%;
  & .title{
    font-family: Roboto,sans-serif;
    color: white;
    font-size: 5rem;
  }
  & .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      height: 28px;
      line-height: 28px;
      border-radius: 28px/2;
      padding: 0 8px;
    }
  }
}
</style>