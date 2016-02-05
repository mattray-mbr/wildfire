var MainController = function($scope){
    $scope.stupidIdea = [1]
    var fire = {'background-color': '#d9534f', 'color':'#fff'}
    var water = {'background-color': '#5bc0de', 'color': '#fff'}
    var color;
    

    $scope.lake = function(){
        //toggle to water
        $scope.blue = "active"
        $scope.red = ""
        if($scope.stupidIdea.length === 1){
            $scope.stupidIdea.push('please work')
        }
        console.log($scope.stupidIdea.length)
    }
    $scope.fire = function(){
        //toggle to fire
        $scope.blue = ""
        $scope.red = "active"
        if($scope.stupidIdea.length === 2){
            $scope.stupidIdea.pop()
        }
        console.log($scope.stupidIdea.length)
    }
    
    $scope.selected = function(index){
        if($scope.stupidIdea.length === 2){
            $scope.tile[index].setColor = water;
        } else if($scope.stupidIdea.length === 1) {
            $scope.setColor = fire;
            console.log('burn')
        } else {
            console.log('something went wrong')
        }
    }


    //change visited class to either blank, red, or blue 
    //when changing from red to blue dont change already clicked items
        //add different classes for each (if class a != class b)(the most recent one overrides the previous)
    //function to set color 
        //pulls color from initial
        //link.visited = color


//set which class to add(ng-click, bind class to variable toAdd)
//add class on click (ng-click, ng-class?)
//step 1
//get style to change for single class
//or get styles to change from red to blue for all

  $scope.land = [
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees',
    'Grass',
    'Shrubs',
    'Trees'
  ]
}

angular.module('app', [])
  .controller('MainController', ['$scope', MainController])