angular.module("myapp").controller("checkoutCtrl",function($scope,shopcart){
    $scope.cartdata=shopcart.showcart();//取到当前购物车商品
    //计算总和
    $scope.totalMoney=function(){
        var total=0;
        for(var i=0;i<$scope.cartdata.length;i++){
            total+=$scope.cartdata[i].num*$scope.cartdata[i].product.price;
        }
        return total;
    }
    $scope.remove=function(item){
        shopcart.remove(item);
    };
    //购物车商品+1
    $scope.addnum=function(item){
        shopcart.update(item);
    }
    //购物车商品-1
    $scope.reducenum=function(item){
        shopcart.reduce(item);
    }
})