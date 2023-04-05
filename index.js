
var errUsername = document.getElementById('usernameErr');
var errEmail = document.getElementById('emailErr');
var errPass = document.getElementById('passErr');
var errCpass = document.getElementById('cpassErr');

var btn = document.getElementById('btn');

function validateUsername() {
    var user = document.getElementById('user').value;
    if(user.length == 0){
        errUsername.innerHTML = "Username Required*";
    }else{
        errUsername.innerHTML = "*";
        
    }
}
function validateEmail() {
    var mail = document.getElementById('mail').value;
    if(mail.length == 0){
        errEmail.innerHTML = "Email Required*";
    }
}
function validatePassword() {
    var pass = document.getElementById('pass').value;
    if(pass.length == 0){
        errPass.innerHTML = "Password Required*";
    }
}
function validateCpassword() {
    var cpass = document.getElementById('cpass').value;
    if(cpass.length == 0){
        errCpass.innerHTML = "Confirm Password Required*";
    }
   }

   btn.addEventListener('click', function(){
    validateUsername();
    validateEmail();
    validatePassword();
    validateCpassword();
   })


  