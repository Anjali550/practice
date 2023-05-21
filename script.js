let username = document.getElementById("username").value;
let password = document.getElementById("pass").value;

function validateform(event) {
    event.preventDefault();
    if(username == ""){
        // console.log("error");
        // to giver user error msg
        document.getElementById("usererror").innerHTML = "user name is empty";
    }else if (username.length < 5){
        document.getElementById("usererror").innerHTML = "user name require min 5 char" ;
    }else{
        document.getElementById("usererror").innerHTML = "" ;  
    }
   

    if(password == ""){
       
        // to giver user error msg
        document.getElementById("passerror").innerHTML = "password is empty";
    }else{
        document.getElementById("passerror").innerHTML = "" ;
    }
    
}