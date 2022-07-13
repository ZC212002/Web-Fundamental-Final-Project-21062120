const email = document.getElementById('email')
var emailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const Firstname = document.getElementById('Firstname')
var Firstnameformat = /^[A-Za-z\s]+$/;
const Lastname = document.getElementById('Lastname')
var Lastnameformat = /^[A-Za-z]+$/;
const Streetaddress = document.getElementById('Streetaddress')
var Streetaddressformat = /^[0-9a-zA-Z\s,-]+$/;
const City = document.getElementById('City')
var Cityformat = /^[A-Za-z\s]+$/;
const StateProvince = document.getElementById('StateProvince')
var StateProvinceformat = /^[A-Za-z\s]+$/;
const PostalCode = document.getElementById('PostalCode')
var PostalCodeformat = /^[0-9]+$/;
const Country = document.getElementById('Country')
var Countryformat = /^[A-Za-z]+$/;
const MobileNumber = document.getElementById('MobileNumber')
var MobileNumberformat = /^[0-9]+$/;

function validation(){
    var x = false;
    var y = false;
    var z = false;
    var k = false;
    var s = false;
    var j = false;
    var f = false;
    var b = false;
    var a = false;

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

    if(Firstname.value.match(Firstnameformat)){
        y=true;
    }

    else{
        if(Firstname.value === '' || Firstname.value == null){
            alert('First name is needed to be filled');
        }
        else{
            alert('Invalid First name');
        }
    }

    if(Lastname.value.match(Lastnameformat)){
        z=true;
    }

    else{
        if(Lastname.value === '' || Lastname.value == null){
            alert('Last name is needed to be filled');
        }
        else{
            alert('Invalid Last name');
        }
    }

    if(Streetaddress.value.match(Streetaddressformat)){
        k = true;
    }

    else{
        if(Streetaddress.value === '' || Streetaddress.value == null){
            alert('Street address is needed to be filled');
        }
        else{
            alert('Invalid street address');
        }
    }

    if(City.value.match(Cityformat)){
        s=true;
    }

    else{
        if(City.value === '' || City.value == null){
            alert('City is needed to be filled');
        }
        else{
            alert('Invalid City name');
        }
    }

    
    if(StateProvince.value.match(StateProvinceformat)){
        j=true;
    }

    else{
        if(StateProvince.value === '' || StateProvince.value == null){
            alert('State/Province is needed to be filled');
        }
        else{
            alert('Invalid State and Province name');
        }
    }

    if(PostalCode.value.match(PostalCodeformat)){
        f=true;
    }

    else{
        if(PostalCode.value === '' || PostalCode.value == null){
            alert('Postal code is needed to be filled');
        }
        else{
            alert('Invalid Postal Code entered');
        }
    }

    if(Country.value.match(Countryformat)){
        b=true;
    }

    else{
        if(Country.value === '' || Country.value == null){
            alert('Country field is needed to be filled');
        }
        else{
            alert('Invalid Country name entered');
        }
    }

    if(MobileNumber.value.match(MobileNumberformat)){
        a=true;
    }

    else{
        if(MobileNumber.value === '' || MobileNumber.value == null){
            alert('Mobile number is needed to be filled');
        }
        else{
            alert('Mobile number should only contain digits not alphabet!');
        }
    }

    if (x && y && z && k && s && j && f && b && a){
        window.location.href="http://127.0.0.1:5500/Checkout.html";  
    }
}