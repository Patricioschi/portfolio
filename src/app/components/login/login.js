function authenticate() {
	
	const alert = document.createElement('div');
	
	alert.innerHTML = [
		'<div class="alert alert-danger" >Email o contraseña no válida</div>'
	];

	document.getElementById('exampleModalLabel').appendChild(alert);
}


/*	const alert = (message, type) => {
		const wrapper = document.createElement('div')
		wrapper.innerHTML = [
			`<div class="alert alert-${type} alert-dismissible" role="alert">`,
			`   <div>${message}</div>`,
			'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
			'</div>'
		].join('')

		alertPlaceholder.append(wrapper)
	}

	const alertTrigger = document.getElementById('liveAlertBtn')
	if (alertTrigger) {
		alertTrigger.addEventListener('click', () => {
			alert('Email o contraseña no válida', 'danger')
		})
	}
}

var app = angular.module('myApp',[]);

app.controller('myController',function($scope){
	
	$scope.user={'username':'','password':''};
	
	//----- Users json
	var validUsers= [ 
		{'username':'chandler@friends.com', 'password':'1234'},
		{'username':'ross@friends.com', 'password':'1234'},
		{'username':'joey@friends.com', 'password':'1234'},
		{'username':'rechal@friends.com', 'password':'1234'}
	];
	
	$scope.showError = false; // set Error flag
	$scope.showSuccess = false; // set Success Flag

	//------- Authenticate function
	$scope.authenticate = function (){
		var flag= false;
		
		for(var i in validUsers){ // loop on users array
			if($scope.user.username == validUsers[i].username && $scope.user.password == validUsers[i].password){
				flag = true;
				break;
			}
			else{
				flag = false;
			}				
		}

		//-------- set error or success flags
		if(flag){
			$scope.showError = false;
			$scope.showSuccess = true;
		}
		else{
			$scope.showError = true;
			$scope.showSuccess = false;
		}


	}

});*/