<template>
    <div class="">
       <!--search -->
    <div class="search-bar">
        <van-row>
            <van-col span="3"><img :src="locationIcon" class="location-icon" width="70%"/>
                </van-col>
            <van-col span="16">
                <input type="text" class="search-input"/>
            </van-col>
            <van-col span="4"><van-button size="mini" class="search-btn">查找</van-button></van-col>
        </van-row>
    </div>

    <div class="banner-box">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
        <van-swipe-item  v-for="(banner, index) in bannerPicArray" :key="index">
            <img v-lazy="banner.imageUrl"  width="100%"/>
         </van-swipe-item>
        </van-swipe>
    </div>
    
    </div>
</template>

<script>
export default {
  data() {
    return {
      locationIcon: require("../../assets/images/location.png"),
      bannerPicArray: [
        {
          imageUrl:
            "http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg"
        },
        {
          imageUrl:
            "http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg"
        },
        {
          imageUrl:
            "http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* 搜索框 */
.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  clear: both;
  overflow: hidden;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid 1px !important ;
  background-color: #e5017d;
  color: #fff;
  margin-top: 0.2rem;
}
.location-icon {
  margin-left: 0.3rem;
  margin-top: 0.15rem;
}
.search-btn {
  margin-left: 0.5rem;
  margin-top: 0.6rem;
}

/* 轮播图 */
.banner-box {
  max-height: 10rem;
}
</style>
