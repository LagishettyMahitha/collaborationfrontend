

var app=angular.module('MyApplication',['ngRoute','regmodule','JobModule','loginapp','ngCookies']);

app.constant('REST_URI','http://localhost:8088/CollaborationBackEnd/');

app.controller('HomeController',function($scope,$rootScope,$cookies,$location){
	
	/*$rootScope.Userrole="home";*/
	$rootScope.Userrole=$cookies.get('role');
	console.log($cookies.get('role'));
	
	var name='secondproject';
	$scope.name=name;
	console.log(name);
	this.logout=function()
		{
			alert("logout successful");
			$rootScope.Userrole="";
			$cookies.remove('role');
			$location.path("/")
		}
	
	
	})


	app.config(function($routeProvider)
	{
	$routeProvider
	.when("/home",{
	templateUrl:'index.html',
	controller :'HomeController',
	controllerAs:'home'
	})
	.when("/signup",
	{
	templateUrl :'./userdata/SignUp.html',
	controller : 'RegisterController',
	controllerAs:'regCtrl'
	})
	.when("/jobposting",
			{
	
		    templateUrl :'./AdminData/JobPosting.html',
			controller : 'JobController',
			controllerAs:'jobCtrl'
			})
			
	
	
	
	}		

)