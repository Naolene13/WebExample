function validateform(){
    
    //this is a single line comment 

    /*this is 
    a multi line 
    comment
    */ 

    //alert('Validate function called succesfully');
var errors = "";

// Get value of element and storing it in variable
var FullName = document.getElementById('FullName').value; 

if(FullName==""){
    //alert("Please enter Full Name.");
    // block action from getting executed 
    //return false;
    errors+= "<li>Please enter Full Name.";
    document.getElementById('FullName').classList.add('inputError');
}

var Nationality = document.getElementById('Nationality').value;
if(Nationality=="0"){
    //alert("Please select nationality");
    // block action from getting executed 
    //return false;
    errors+= "<li>Please select Nationality.</li>";
    document.getElementById('Nationality').classList.add('inputError');
}
var Password = document.getElementById('Password').value;
if(Password==""){
    //alert("Please input password")
    //return false;
    errors+= "<li>Please insert password.";
    document.getElementById('Password').classList.add('inputError');

}

var Username = document.getElementById('Username').value; 
if(Username==""){
    //alert("Please enter username.");
    // block action from getting executed 
    //return false;
    errors+= "<li>Please enter username.</li>";
    document.getElementById('Username').classList.add('inputError');

}

if (errors!=""){
    document.getElementById('errorlist').innerHTML = errors;
    return false;
}
else{document.getElementById('errorlist').innerHTML = "";
return true;

}
}


function Resetform(){
 document.getElementById("errorlist").innerHTML ="";
 document.getElementById('FullName').classList.remove('InputError');
 document.getElementById('Nationality').classList.remove('InputError');
 document.getElementById('Username').classList.remove('InputError');
 
}
