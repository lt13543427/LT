const userId = document.querySelector('.userid');
const userPassword = document.querySelector('.userpassword');
const logBtn = document.querySelector('.log-btn');
const registerBtn = document.querySelector('.register-btn');
let userArr = [];

if (localStorage.getItem("blogUser")) {
    userArr = JSON.parse(localStorage.getItem("blogUser"));
}

logBtn.addEventListener("click", () => {
    const checkId = userArr.findIndex(user => user.id === userId.value);

    if (userArr.length === 0) {
        // localStorage.removeItem("useridArr");
    } else {
        const useridDate = JSON.stringify(userArr[checkId]);
        localStorage.setItem("useridArr", useridDate);
    }

    redirectToBlog();
});



registerBtn.addEventListener("click", () => {
    LoginToRegister()
  
});

function redirectToBlog() { 
    const matchedUser = userArr.find(user => user.id === userId.value && user.userPassword === userPassword.value);
    if (matchedUser) {
        window.location.href = './blog.html';
    } else {
        alert('查無此帳號');
    }
}

function LoginToRegister() {
    window.location.href = './register.html';
}