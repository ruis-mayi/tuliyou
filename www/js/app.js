// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module("starter", ["ionic", "starter.controllers", "starter.services", "starter.directive"])
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {


  // ++++++++++++++++++++++全局设置++++++++++++++++++++++
  // 设置根据在$stateProvider.state中定义的模板url预取的模板数量。 如果设置为 0,当导航到新的页面时候用户必须等待加载到该页面. 默认是 30.
  $ionicConfigProvider.templates.maxPrefetch(5);

  // 缓存前进的视图
  $ionicConfigProvider.views.forwardCache(true);

  // 最大缓存视图数量
  // $ionicConfigProvider.views.maxCache(10);

  // tab的样式和位置
  $ionicConfigProvider.platform.ios.tabs.style("standard");
  $ionicConfigProvider.platform.android.tabs.style("standard");
  $ionicConfigProvider.platform.ios.tabs.position("bottom");
  $ionicConfigProvider.platform.android.tabs.position("bottom");

  // 导航文字居中
  $ionicConfigProvider.platform.ios.navBar.alignTitle("center");
  $ionicConfigProvider.platform.android.navBar.alignTitle("center");

  // 设置是否将上一个view视图的title设置成返回按钮的文字 iOS是默认的true
  $ionicConfigProvider.platform.ios.backButton.previousTitleText(false);
  $ionicConfigProvider.platform.android.backButton.previousTitleText(false);

  // 定义返回按钮
  $ionicConfigProvider.platform.ios.backButton.icon("ion-ios-arrow-back");
  $ionicConfigProvider.platform.android.backButton.icon("ion-ios-arrow-back");

  // 过渡效果
  $ionicConfigProvider.platform.ios.views.transition("ios");
  $ionicConfigProvider.platform.android.views.transition("android");

  // 设置返回按钮的文字
  $ionicConfigProvider.platform.ios.backButton.text(false);
  $ionicConfigProvider.platform.android.backButton.text(false);








  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // 欢迎
  .state("welcome", {
    url: "/welcome",
    templateUrl: "templates/welcome.html",
    controller: "ctrlWelcome"
  })


  // 导航
  .state("nav", {
    url: "/nav",
    templateUrl: "templates/nav.html",
    controller: "ctrlNav"
  })

  // 首页主路由
  .state("index", {
    url: "/index",
    abstract: true,
    templateUrl: "templates/index.html",
    controller: "ctrlIndex"
  })
  // 404
  .state("404", {
    url: "/404",
    templateUrl: "templates/404.html"
  })



  // +++++++++++++++++++++++地图+++++++++++++++++++++++
  // 地图主页
  .state("index.map", {
    url: "/map",
    views: {
      "map-tab": {
        templateUrl: "templates/map/index.html",
        controller: "ctrlMap"
      }
    }
  })

  // 定位
  .state("index.map-location", {
    url: "/map/location",
    views: {
      "map-tab": {
        templateUrl: "templates/map/location.html",
        controller: "ctrlMapLocation"
      }
    }
  })



  // +++++++++++++++++++++++发现+++++++++++++++++++++++
  .state("index.find", {
    url: "/find",
    views: {
      "find-tab": {
        templateUrl: "templates/find/index.html",
        controller: "ctrlFind"
      }
    }
  })





  // +++++++++++++++++++++++我的+++++++++++++++++++++++
  // 我的主页
  .state("index.mine", {
    url: "/mine",
    views: {
      "mine-tab": {
        templateUrl: "templates/mine/index.html",
        controller: "ctrlMine"
      }
    }
  })

  // 登录
  .state("index.mine-login", {
    url: "/mine/login",
    views: {
      "mine-tab": {
        templateUrl: "templates/mine/login.html",
        controller: "ctrlMineLogin"
      }
    }
  })
  // 注册
  .state("index.mine-register", {
    url: "/mine/register",
    views: {
      "mine-tab": {
        templateUrl: "templates/mine/register.html",
        controller: "ctrlMineRegister"
      }
    }
  })
  // 忘记密码页面
  .state("index.mine-forgetPassword", {
    url: "/mine/forgetPassword?userId",
    // url: "/forgetPassword/{userId}?kkkk",
    views: {
      "mine-tab": {
        templateUrl: "templates/mine/forgetPassword.html",
        controller: "ctrlMineForgetPassword"
      }
    }
  })
  // 重置密码页面
  .state("index.mine-resetPassword", {
    url: "/mine/resetPassword?userId",
    views: {
      "mine-tab": {
        templateUrl: "templates/mine/resetPassword.html",
        controller: "ctrlMineResetPassword"
      }
    }
  })








  // 路由重定向
  $urlRouterProvider
  // .when('', '/welcome')//APP初始化时进入欢迎页
  .when('', '/index/map')//初始化时进入地图首页
  .otherwise('/404');//404页面

});
