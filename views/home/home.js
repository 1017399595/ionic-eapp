angular.module("myapp")
    .controller("homeCtrl",function($scope,$http,$ionicSlideBoxDelegate, $ionicModal){
    $http.get("json/topbanner.json").success(function(data){
        $scope.topbanners=data.topbanner;
        $scope.homejx=data.homejx;
        $scope.xiums=data.xiums;
    });

    $scope.praise=function(index){
            $scope.i=index
            $scope.homejx[index].like++;
            $scope.addred=function(index){
               return $scope.i==index?"redclass":""
           }

    };

    $scope.slideIndex=0;
    $scope.slideChanged=function(index){
        $scope.slideIndex=index;
    };

    $scope.addClass=function(index){
        return index==$scope.slideIndex?"current col col-20 col-offset-20 text-center":"col col-20 col-offset-20 text-center"
    };
    $scope.activeSlide=function(index){
        $ionicSlideBoxDelegate.slide(index)
    };

    $scope.loadMore=function(){
        var newjx={
            "imgsrc": "images/home/cont4.jpg",
            "content": "夏日炎炎，不想在厨房热火流汗地炒菜？推荐一道方便可口又赏心悦目的夏日小菜--丝瓜酿虾。",
            "like": 5,
            "comment": 8,
            "done": 50
        };
        setTimeout(function(){
            $scope.homejx.push(newjx);
            $scope.$broadcast('scroll.infiniteScrollComplete');
        },3000)
    };

    $ionicModal.fromTemplateUrl('views/modal/modal.html', {
        scope: $scope,      // 作用域使用父作用域
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        $scope.modal.show();
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
    };

})