angular.module("myapp")
    .constant("orderUrl","views/cart/cartjson/order.json")
    .controller("completeCtrl",function($scope,$http,$location, shopcart,orderUrl){

        $scope.data.shipping = {};
        var order = angular.copy($scope.data.shipping);
        order.products = shopcart.showcart();
        $http.post(orderUrl, order)
            .success(function (data, status) {
                $scope.data.shipping.orderid = data.orderid;
                shopcart.clear()
            })
            .error(function (data, status) {
                $scope.data.shipping.errorStatus = status;
            })
    })
