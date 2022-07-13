const CardNumber = document.getElementById('CardNumber')
var CardNumberformat = /^[0-9]{16}$/;
const HolderNameNumber = document.getElementById('HolderName')
var HolderNameformat = /^[A-Za-z\s]+$/;
const MY = document.getElementById('MY')
var MYformat = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
const CVV = document.getElementById('CVV')
var CVVformat = /^[0-9]{3}$/;


function visapay(){
    var g = false;
    var h = false;
    var o = false;
    var w = false;

    if(CardNumber.value.match(CardNumberformat)){
        g = true;   
    }
    
    else{
        
        if (CardNumber.value === '' || CardNumber.value == null){
            alert('Card number is required');
        } 
        else{
            alert('Card number should contain only digits and please enter the correct length of the card number which is 16 in total!');
        }  
        
    }

    if(HolderName.value.match(HolderNameformat)){
        h = true;   
    }
    
    else{
        
        if (HolderName.value === '' || HolderName.value == null){
            alert('Holder name is required');
        } 
        else{
            alert('Holder name should contain only alphabets!');
        }  
        
    }

    if(MY.value.match(MYformat)){
        o = true;   
    }
    
    else{
        
        if (MY.value === '' || MY.value == null){
            alert('MONTH/YEAR is required');
        } 
        else{
            alert('Invalid MONTH/YEAR entered!');
        }  
        
    }

    
    if(CVV.value.match(CVVformat)){
        w = true;   
    }
    
    else{
        
        if (CVV.value === '' || CVV.value == null){
            alert('CVV is required');
        } 
        else{
            alert('CVV should contain only 3 digits and no alphabets is allowed!');
        }  
        
    }

    if(g && h && o && w){
        alert('Payment successfully made and it will direct you to the home page in few seconds!');
        window.location.href ='https://zc212002.github.io/Web-Fundamental-Final-Project-21062120/Bin%C3%A9age%20Nutrition.html';
    }
}
