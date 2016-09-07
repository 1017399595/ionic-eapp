angular.module("myapp").controller("storeListCtrl",function($scope,shopcart){

    $scope.selectedCategory=null;//保存选中商品分类
    $scope.selectCategory=function(category){
        $scope.selectedCategory=category;//单击商品类别返回的值存入

    };
    //过滤商品
    $scope.showByCategory=function(product){
        return $scope.selectedCategory==null||$scope.selectedCategory==product.category;
    };
    //高亮显示选中分类
    $scope.acitveClass=function(category){
        return category==$scope.selectedCategory?"cookbooktext":"";

    };

    //添加进购物车
    $scope.addCart=function(product){
        shopcart.add(product)
    }
})