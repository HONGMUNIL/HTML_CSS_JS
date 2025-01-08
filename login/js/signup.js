function loginUser() {
    const username = document.querySelector(".login-username").value;
    const password = document.querySelector(".login-password").value;

    const storageUsername = localStorage.getItem("username");
    const storagePassword = localStorage.getItem("password");

    if (username === storageUsername && password === storagePassword) {
        alert("로그인 성공!");
    } else {
        alert("로그인 실패. ");
    }
}


const signUpButton = document.querySelector(".signup-button");
signUpButton.onclick = () => {
    signUp();
}
function signUp() {
    location.href = "./signup.html";
}


