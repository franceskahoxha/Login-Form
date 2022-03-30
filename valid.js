//Validtion Code For Inputs

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
var checkbox = document.forms['form']['checkbox'];


var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var check_error = document.getElementById('check_error');


email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);
checkbox.addEventListener('textInput', check_Verify);


function validated(){
	if (email.value.length < 14) {
		email.style.border = "1px solid";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
	if (password.value.length < 10) {
		password.style.border = "1px solid";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}
	if (checkbox.checked == false) {
		check_error.style.display = 'inline';
		checkbox.focus();
		return false;
	}

}
function email_Verify(){
	if (email.value.length >= 13) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length >= 9) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}
function check_Verify(){
	if (checkbox.checked == true) {
		checkbox.style.border = "1px solid silver";
		check_error.style.display = "none";
		return true;
	}
}

