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





  // 获取token
  $rootScope.token = localStorage.getItem("token");
  // 初始化用户信息
  $rootScope.userData = null;
  // 用户状态 0为已登录 -10为未登录 -3为token错误或过期
  $rootScope.isLogin = -10;


  // 获取token请求用户信息
  $rootScope.getUserInfo = function (callback) {
    if ($rootScope.token) {
      $http.get(dataIntf.getInfo + "?token=" + $rootScope.token).success(function(response, status, headers, config) {
        if (response.status == "0") {
          // console.log("获取信息成功");
          // console.log(response);
          $rootScope.userData = response.result;
          $rootScope.isLogin = 0;
          callback({"status":response.status,"msg":"成功"});
        }else {
          // console.log("token过期或错误");
          // console.log(response);
          $rootScope.isLogin = -3;
          callback({"status":response.status,"msg":response.errMsg});
        };
      }).error(function (response, status, headers, config) {
        // console.log(response);
        $rootScope.isLogin = -10;
        callback({"status":"-1","msg":"请求错误"});
      });
    }else {
      // console.log("未登录");
      $rootScope.isLogin = -10;
      callback({"status":"-10","msg":"未登录"});
    };
  }



  $rootScope.getUserInfo(function (response) {
    console.log(response);
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

