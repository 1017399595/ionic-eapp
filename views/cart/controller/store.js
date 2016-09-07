angular.module("myapp")
    .constant("productUrl","views/cart/cartjson/products.json")
    .constant("categoryUrl","views/cart/cartjson/categories.json")
    .controller("cartCtrl",function($scope,$http,$location, shopcart,productUrl,categoryUrl){
        $scope.data = {};
        $http.get(categoryUrl).success(function (data) {
            $scope.data.categories = data;
        });
        $http.get(productUrl).success(function (data) {
            $scope.data.products = data;
        });

})