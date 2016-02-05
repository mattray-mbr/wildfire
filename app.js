var MainController = function($scope){

    $scope.lake = function(){
        $scope.blue = "active"
        $scope.red = ""
    }
    $scope.fire = function(){
        $scope.blue = ""
        $scope.red = "active"
        
    }

  $scope.land = [
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'},
    {tile:'Grass'},
    {tile:'Shrubs'},
    {tile:'Trees'}
  ]
}

angular.module('app', [])
  .controller('MainController', ['$scope', MainController])











