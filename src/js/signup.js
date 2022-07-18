function validate(){
    var Email = document.querySelector("#email");
    var Fullname = document.querySelector("#fullname");
    var Password = document.querySelector("#password");
    var Repassword = document.querySelector("#re-Password");
    const reggmail = /\w+@\w+(\.\w+){1,2}$/;
    const reggpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    kq = true;


    // Email

    if (Email.value == ""){
        document.querySelector("#loiemail").innerHTML = "Please enter your email address";
        kq = false;
    }else if (!Email.value.match(reggmail)){
        document.querySelector("#loiemail").innerHTML = "Email address is wrong format";
        kq = false;
    }else{
        document.querySelector("#loiemail").innerHTML = "";
    }


    // Fullname

    if (Fullname.value == ""){
        document.querySelector("#loiname").innerHTML = "Please enter your name";
        kq = false;
    }else{
        document.querySelector("#loiname").innerHTML = "";
    }


    // Mật khẩu

    if (Password.value == ""){
        document.querySelector("#loimkm").innerHTML = "Please enter a password";
        kq = false;
    }else if (!Password.value.match(reggpass)){
        document.querySelector("#loimkm").innerHTML = "Incorrect password format";
        kq = false;
    }else{
        document.querySelector("#loimkm").innerHTML = "";
    }

    // Nhập lại mật khẩu

    if (Repassword.value == ""){
        document.querySelector("#loinmkm").innerHTML = "You must re-enter your password";
        kq = false;
    }else if (Repassword.value != Password.value){
        document.querySelector("#loinmkm").innerHTML = "Password re-entered wrong";
        kq = false;
    }else{
        document.querySelector("#loinmkm").innerHTML = "";
    }

    // Kết quả
    if (kq){
        alert("Successful registration!");
        return true;
    }else 
        alert("Registration information does not match!");
    return false;
}