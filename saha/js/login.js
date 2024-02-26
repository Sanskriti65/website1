function callLocalhostAPI() { 
    studentId=document.getElementById("studentId").value;
    password=document.getElementById("password").value;
    const apiUrl = "http://192.168.1.19:8080/erp/student-login?studentId="+studentId+"&password="+password;
    fetch(apiUrl)
        .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
        })
        .then((data) => {
            
            document.getElementById("loginsuccess").style.display="block";
            console.log(data); 
            setTimeout(function (){document.getElementById("loginsuccess").style.display="none"},1000);
        })
        .catch((error) => {
            
            document.getElementById("loginfailed").style.display="block";
            document.getElementById("loginfailed").style.transitionDelay = "0.2s";
            console.error("There was a problem with the fetch operation:", error);
            setTimeout(function (){document.getElementById("loginfailed").style.display="none"},1000);
    });
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var passwordToggle = document.getElementById("password-toggle");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
    } else {
        passwordInput.type = "password";
        passwordToggle.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
    }
}
