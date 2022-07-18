function validate(){
    var Email = document.querySelector("#email");
    var Pass = document.querySelector("#pass");
    const reggmail = /\w+@\w+(\.\w+){1,2}$/;
    const reggpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    var kq = true; 

    // Email
    if (Email.value == ""){
        document.querySelector("#loiemail").innerHTML = "Please enter your email address";
        kq = false;
    }else if (!Email.value.match(reggmail)){
        document.querySelector("#loiemail").innerHTML = "Email address is wrong format";
        kq = false;
    }else{
        document.querySelector("#email").innerHTML = "";
    }


    // Mật khẩu
    if (Pass.value == ""){
        document.querySelector("#loipass").innerHTML = "Please enter a password";
        kq = false; 
    }else if (!Pass.value.match(reggpass)){
        document.querySelector("#loipass").innerHTML = "Incorrect password format";
        kq = false;
    }else{
        document.querySelector("#email").innerHTML = "";
        kq = true;
    }

    //Kết quả
    if (kq){
        alert("Logged in successfully!");
        return true;
    }else
     alert("Wrong account information!");
        return false;
}
