const email = document.getElementById('email')
const password = document.getElementById('password')
var emailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


function myfunction(){

    var x = false;
    var j = false;

    if(email.value.match(emailformat)){
    
    x = true;   
    }

    else{
        
        if (email.value === '' || email.value == null){
            alert('Email is required');
        } 
        else{
            alert('Invalid email address');
        }  
        
    }
    
    
    if(password.value.length >= 6 && password.value.length <= 20){
        j = true;
    }
    else{
        if (password.value === '' || password.value == null){
            alert('Password is required');
        }
        else{
            alert('Password should not be shorter than 6 digits and more than 20 digits!');
        }
        
    }


    
    if ( x  && j){
        alert('You have signed up successfully! You will be directed to the home page!')
        window.location.href="https://zc212002.github.io/Web-Fundamental-Final-Project-21062120/Bin%C3%A9age%20Nutrition.html";  
    }

} 
