// 所有接口的url
var dataIntf = {
  "newsList" : "/www/data/newsList.do",
  // 获取用户信息
  "getInfo" : "/app/user/getInfo.do",
  // 更新用户信息
  "updateInfo" : "/app/user/updateInfo.do",
  "login" : "/app/user/login.do",
  "logout" : "/app/user/logout.do"
};






var ctrlApp = angular.module("starter.controllers", []);
ctrlApp.run(function($ionicPlatform,$rootScope, $state, $stateParams) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });








})



// 欢迎页
.controller("ctrlWelcome", function($scope,$state) {
  console.log("ctrlWelcome");

  // 欢迎页，第一次进入到导航页，第二次直接进入首页
  setTimeout(function () {
    if (localStorage.isOpened) {
      $state.go("index.map");
    }else {
      localStorage.isOpened = true;
      $state.go("nav");
    };
  }, 3000)

})

// 导航
.controller("ctrlNav", function($scope) {
  console.log("ctrlNav");



})

// 管理3个tab
.controller("ctrlIndex", function($scope,$ionicLoading,$state) {
  console.log("ctrlIndex");


  // 判断是否登录 如果已经登陆则跳页面
  $scope.isLoginGoUrl = function (url) {
    $state.go(url);
    // 开发环境不用判断，直接跳转
    // if ($rootScope.isLogin == "0") {
    //  $state.go(url);
    // }else {
    //  $ionicLoading.show({
    //    template: "请您先登录"
    //  });
    //  setTimeout(function () {
    //    $ionicLoading.hide();
    //    $state.go("login");
    //  }, 1500)
    // }
  }

  // 直接跳页面
  $scope.goUrl = function (url) {
    $state.go(url);
  }



})

