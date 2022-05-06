	(function (angular) {
	var myApp = angular.module('QuanLySinhVien',[]);

			myApp.controller('DSLop',ClassController);
			myApp.controller('DSSinhVien',StudentController);
			function ClassController($scope) {
				// body...
				var DSClass = [
						{ name:"Lop 11",
						  Class:[
						  	{name:"11A"},
						  	{name:"11B"}
						  ]
						},
						{ name:"Lop 12",
						  Class:[
						  	{name:"12A"},
						  	{name:"12B"}
						  ]
						}
					];
					 $scope.DSClass = DSClass;
			}
			function StudentController($scope) {
				// body...
				
					//$scope.DSClass = DSClass;

				 // $scope.DSClass = {
				 //     availableOptions: [
				 //       {id: '1', name: '11A',type:'Lop 11'},
				 //       {id: '2', name: '11B',type:'Lop 11'},
				 //       {id: '3', name: '12C',type:'Lop 12'}
				 //     ],
				 //     selectedOption: {id: '3', name: '12C',type:'Lop 12'} //This sets the default value of the select in the ui
				 //     };

				var DSStudent = [
					];

					var formEditStudent = {
						name:'',
						age:'',
						lop:''
					};
					var indexStudent = 1;
					
					
					$scope.addStudent = function(form){
						$scope.form = {
						name:'',
						age:'',
						lop:''
					};
						$scope.DSStudent.push(form);
						alert("Add successfull!");

					}
					$scope.removeStudent = function (student) {
						// body...
						var index = $scope.DSStudent.indexOf(student);
						$scope.DSStudent.splice(index,1);
						alert("Delete successfull!");
					}
					$scope.loadFormeditStudent = function (EditStudent,index){
						// formEditStudent = EditStudent;
						indexStudent = index; 
						formEditStudent.name = EditStudent.name;
						formEditStudent.age = EditStudent.age;
						formEditStudent.lop = EditStudent.lop;
					}
					$scope.indexStudent = indexStudent;

					$scope.editStudent = function (student) {
						// body...

						var index = $scope.DSStudent.indexOf(student);
						 if(indexStudent > -1){
					          $scope.DSStudent[indexStudent].name = student.name; 
					          $scope.DSStudent[indexStudent].age = student.age; 
					          $scope.DSStudent[indexStudent].lop = student.lop; 
					        }
					     alert("Edit successfull!");
					}
					//$scope.searchClass="11A";
					delete $scope.searchName;
						delete $scope.searchAge;
						delete $scope.searchClass;
					$scope.loadAllStudent = function(){
						
						delete $scope.searchName;
						delete $scope.searchAge;
						delete $scope.searchClass;
					}
					$scope.searchObj = function (name,age,classSt) {
						// body...
						if(name !='' && age !='' || classSt !=''){
							$scope.searchName = name;
							$scope.searchAge = age;
							$scope.searchClass = classSt;
						}
					}

					$scope.formEditStudent = formEditStudent;
					$scope.DSStudent = DSStudent;
			}

			myApp.controller('TabController',['$scope',function ($scope) {
				// body...
				$scope.tab = 1;
					$scope.searchName = '';
					$scope.searchAge = '';
				$scope.setTab = function (newTab) {
					// body...
					$scope.tab = newTab;
				};
				$scope.isSet = function(tabNum){
					return $scope.tab === tabNum;
				};
			}]);
		})(window.angular);