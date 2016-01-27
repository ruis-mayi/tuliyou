var serviceApp = angular.module("starter.services", []);


serviceApp.service("serviceOrderData",function() {
	this.orderData = {
		name:"未选择",
		price:0,
		marketPrice:0,
		num:0,
		express:0,
		totalPrice:0
	};
	this.orderNote = {
		text :"注意快递"
	};
})


