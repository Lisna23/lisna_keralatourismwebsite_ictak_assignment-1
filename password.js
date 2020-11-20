function pvalidation()
{
    
    var form =document.getElementById("form");
    var Password =document.getElementById("password").value;
    var ptext =document.getElementById("ptext");
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

    if(Password.match(pattern)){
        
        form.classList.add("valid");
        form.classList.remove("invalid");
        ptext.innerHTML = "Your Password is Valid.";
        ptext.style.color = "#00ff00";
        
    }

    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        ptext.innerHTML = "Please Enter Valid Password.";
        form.classList.remove("valid");
        form.classList.add("invalid");
        ptext.style.color = "#ff0000";
       }

    if(email == ""){
        
        form.classList.remove("valid");
        form.classList.remove("invalid");
        ptext.innerHTML = "";
        ptext.style.color = "#00ff00";
        
    }
}
