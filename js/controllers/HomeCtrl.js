angular.module('DoliumApp')

.controller('HomeCtrl', function($scope, $http, $location) {
    
	$scope.myInterval = 3000;
    $scope.noWrapSlides = false;   
    $scope.active = 0;
    var slides = $scope.slides = [];

     $scope.slides = [
        {
          image: '/images/onboarding.jpg'
        },
        {
          image: '/images/registration1.jpg'
        },
        {
          image: '/images/registration2.jpg'
        },
        {
          image: '/images/schedule1.jpg'
        },
        {
          image: '/images/meetinglist.jpg'
        },
        {
          image: '/images/mapview.jpg'
        }
     ];

});