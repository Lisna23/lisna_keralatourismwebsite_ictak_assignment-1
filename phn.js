function phvalidation()
{
    
    var form =document.getElementById("form");
    var Phnum =document.getElementById("phnum").value;
    var phtext =document.getElementById("phtext");
    var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(Phnum.match(pattern)){
        
        form.classList.add("valid");
        form.classList.remove("invalid");
        phtext.innerHTML = "Your Phone Number is Valid.";
        phtext.style.color = "#00ff00";
        
    }

    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        phtext.innerHTML = "Please Enter Valid Phone Number.";
        form.classList.remove("valid");
        form.classList.add("invalid");
        phtext.style.color = "#ff0000";
       }

    if(email == ""){
        
        form.classList.remove("valid");
        form.classList.remove("invalid");
        phtext.innerHTML = "";
        phtext.style.color = "#00ff00";
        
    }
}
