<template>
  <div class="">
    <!--search -->
    <div class="search-bar">
      <van-row>
        <van-col span="3"><img :src="locationIcon" class="location-icon" width="70%" />
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input" />
        </van-col>
        <van-col span="4">
          <van-button size="mini" class="search-btn">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- 轮播图 -->
    <div class="banner-box">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
          <img v-lazy="banner.image" :id="banner.goodsId" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 分类栏 -->
    <div class="type-tar">
      <div v-for="(cate,index) in category" :key="index" class="type-items">
        <img v-lazy="cate.image" width="90%" />
        <span>{{cate.mallCategoryName}}</span>
      </div>

    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      locationIcon: require("../../assets/images/location.png"),
      bannerPicArray: [], //轮播图
      category: []
    };
  },
  created() {
    axios({
      url:
        "https://www.easy-mock.com/mock/5b022292676d1a45fe4e957b/VueMall/index",
      method: "get"
    })
      .then(req => {
        //请求成功后返回的参数
        console.log(req);

        if (req.status == 200) {
          this.bannerPicArray = req.data.data.slides;
          this.category = req.data.data.category;
        }
      })
      .catch(err => {
        //请求失败 报错
        console.log(err);
      });
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
/* 分类栏 */
.type-tar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: .7rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.type-items {
  padding:  0.5rem;
  font-size: .7rem;
  text-align: center;
}



</style>
