/*var app = angular.module("MyFistApp",["ngResource"])

app.controller("FirstController",function($scope){
	$scope.nombre = "Daniel";
});*/


angular.module("MyFistApp",[])
	.controller("FirstController",function($scope){
		$scope.nombre = "Daniel";
		$scope.comentarios = [
			{
				comentario: "Buen tutorial",
				username: "CodigoFacilito"
			},
			{
				comentario: "Mal tutorial",
				username: "ElSapo"
			}
		];
	});