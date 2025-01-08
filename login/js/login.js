function signUpUser() {
    const username = document.querySelector(".signup-username").value;
    const password = document.querySelector(".signup-password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("회원가입 완료");
 
    window.location.href = "./login.html";
}


const logInButton = document.querySelector(".login-button");
logInButton.onclick = () => {
    logIn();
}
function logIn() {
    location.href = "./login.html";
}



