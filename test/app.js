var sampleApp = angular.module('sampleApp', []);

sampleApp.config(['$routeProvider',
  function ($routeProvider) {
		$routeProvider.
		when('/ShowOrder/:orderId', {
			templateUrl: 'show_orders.html',
			controller: 'ShowOrderController'
		});
}]);


sampleApp.controller('ShowOrderController', function ($scope, $routeParams) {



	$scope.thing = "ahh";

	$scope.projects = [{
		orderId: $routeParams.orderId,
		img: "img/sq_responsive.png",
		imgProject: "../img/responsive.png",
		name: "Responsive Client Website",
		date: "2015-01-01",
		tenents: "Content Knowledge, Teamwork & Collaboration, Work Ethic, Presentation",
		description: "A project showcasing our client communication and responsive design skills.",
		id: "responsive"
	}]
});
