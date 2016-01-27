ctrlApp.controller("ctrlMap", function($scope,$ionicLoading,$state,$rootScope) {
	console.log("ctrlMap");

	// 弹出信息
	$scope.loadding = function () {
		$ionicLoading.show({
			template: "正在加载中..."
		});
		setTimeout(function () {
			$ionicLoading.hide();
		}, 1500)
	}

	// 直接跳页面
	$scope.goUrl = function(url) {
		$state.go(url);
	}

	// 信息
	$scope.data = [{
		name: "kjhkjjk",
		age: 18
	},{
		name: "kjkl",
		age: 18
	},{
		name: "564654",
		age: 18
	},{
		name: "tarymee",
		age: 18
	}]

	// $rootScope.$on('$ionicView.beforeEnter', function() {
	// 	$rootScope.hideTabs = true;
	// });

})


ctrlApp.controller("ctrlMapLocation", function($scope) {
	console.log("ctrlMapLocation");



})


