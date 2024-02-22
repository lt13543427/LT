document.addEventListener("DOMContentLoaded", () => {
  const registerId = document.querySelector('.register-id');
  const registerWords = document.querySelector('.register-words');
  const nickName = document.querySelector('.register-name');
  const logPageBtn = document.querySelector('.logpage');
  const registerBtn = document.querySelector('.register-btn');

  let registerUserArr = [];

  if (localStorage.getItem("blogUser")) {
    registerUserArr = JSON.parse(localStorage.getItem("blogUser"));
  }

  function registerToLogin() {
    window.location.href = './login.html';
  }

  logPageBtn.addEventListener("click", () => {
    registerToLogin();
  });

  registerBtn.addEventListener("click", () => {
    const username = nickName.value;  
    const userPassword = registerWords.value;
    const id = registerId.value;

    const idExists = registerUserArr.some(user => user.id === id);

    if (userPassword !== "" && id !== '' && !idExists) {
      const userArr = {
        username: username,
        id: id,
        userPassword: userPassword,
      };
      alert("註冊成功");
      registerUserArr.push(userArr);
      const userdata = JSON.stringify(registerUserArr);
      localStorage.setItem("blogUser", userdata);
    } else if (idExists) {
      alert("此id已使用");
      return;
    } else {
      alert("請填寫完整的註冊資訊");
    }
    console.log(registerUserArr);
  });
});

