
var objPeople = [
	{
		username:"bob",
		password:"password"
	},
	{
		username:"alice",
		password:"password1"
	}
]

var newUser = {
	username: usernameInput.value, 
	password: passwordInput.value
}

function login() {
	var usernameInput = document.getElementById('usernameInput')
	var passwordInput = document.getElementById('passwordInput')

	console.log(objPeople)

	for(i = 0; i < objPeople.length; i++) {
		if((usernameInput.value === objPeople[i].username) && (passwordInput.value === objPeople[i].password)) {
			console.log ("Login Successful")
		}
	}
}


function registerUser() {
	var usernameInput = document.getElementById('usernameInput')
	var passwordInput = document.getElementById('passwordInput')
	var newUser = document.getElementById('newUser')
	var newPassword = document.getElementById('newPassword')

	var newUser = {
	username: newUser.value, 
	password: newPassword.value
}
	
	for(i=0; i <objPeople.length; i ++){
		if(newUser.value === objPeople[i].username) {
			console.log("user exists")
			return
		}
	}

	objPeople.push(newUser)
	console.log("success!")
}

