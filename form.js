
function validation()
{
    
    var form =document.getElementById("form");
    var email =document.getElementById("email").value;
    var text =document.getElementById("text");
    var pattern = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

    if(email.match(pattern)){
        
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address is Valid.";
        text.style.color = "#00ff00";
        
    }

    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter Valid Email Address.";
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.style.color = "#ff0000";
       }

    if(email == ""){
        
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
        
    }
}

