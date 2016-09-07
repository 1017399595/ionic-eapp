angular.module("myapp").controller("locationCtrl",function($scope,$http,$ionicLoading){
    $scope.restaurants=[];
    $scope.getRestaurants=function(){
        var url="json/location1.json";
        $ionicLoading.show();
        $http.get(url).success(function(data){

           angular.forEach(data.result,function(result){
               $scope.restaurants.push(result)
           });
            $ionicLoading.hide();
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };
    $scope.getRestaurants();
    //下拉刷新
    $scope.refresh=function(){
        $http.get("json/location3.json").success(function(data){
            $scope.restaurants=[]
            angular.forEach(data.result,function(result) {
                $scope.restaurants.push(result)
            })
        }).finally(function(){
            $scope.$broadcast("scroll.refreshComplete")
        })
    };

    $scope.loadMore=function(){
        var newdata=[]
        $http.get("json/location2.json").success(function(data){
            angular.forEach(data.result,function(result) {
                newdata.push(result)
            })
        })

        setTimeout(function(){
            Array.prototype.push.apply($scope.restaurants,newdata)
            $scope.$broadcast("scroll.infiniteScrollComplete");
        },3000)
    }
})
