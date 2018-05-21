# 学习项目----移动商城

> 从零开始搭建一个移动电商系统 包括首页展示，类别展示，购物功能，注册登录，积分系统，签到制作，查找页面，后台接口设置，权限管理。

## 技术栈包
``` bash
Vue+Vuex+Router+Vant+Node+Koa2+Mongoose+MongoDB
```

## 运行方式

``` 
# open project
cd VueMall

# install dependencies
npm install

# run
 node run dev

``` 




## 更新记录

1. 2018/05/16 开坑
2. 2018/05/18 了解Vant， 页面布局
3. 2018/05/21 easy-mock的模拟数据和axios数据访问



## 历程  

#### 1. 2018/05/16
开坑，动手这个项目， 搭建环境。 本项目是用 vue + koa2 开发所以我用的vue的脚手架Vue-cli。  

#### 2. 2018/05/18
安装Vant，了解Vant的基本操作。一下是注意事项：
1. 在下载了Vant后，不建议全局，而使用 ` babel-plugin-import ` 安装。用那个模块装那个模块，这个会减少打包的大小，首页加载的时候会快一些。

2. Vant中 `swipe lazy ` 懒加载的bug 。在使用线上图片中网速过慢，图片默认高度太高导致页面错位，需要在外部的盒子中设置最大高度

ps：VScode中 ` Vue VSCode Snippets `插件挺好用的

#### 3. 2018/05/21
1. easy-mock是比较好用的一个图形化的网站，我们完全可以使用他来模拟我们的Mock数据。
网址：`` https://www.easy-mock.com/ ``

2.在`created`的声明周期里取得数据 
``` html
created() {
    axios({
      url:"https://www.easy-mock.com/mock/5b022292676d1a45fe4e957b/VueMall/index",
      method: "get"
    })
      .then(req => {
        //请求成功后返回的参数
        console.log(req);
      })
      .catch(err => {
        //请求失败 报错
        console.log(err);
      });
  }
```


> 革命未成功 同志需努力