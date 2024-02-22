// 元素宣告
const releaseBtn = document.querySelector(".release-article");
const articleText = document.querySelector(".article-text");
const articleBox = document.querySelector(".article-box");
const contentBox = document.querySelector(".content-box");
const findArticle = document.querySelector(".find-article");
const loginpageBtn = document.querySelector('.loginpage');
// 新增陣列
let arr = [];
let userArr = [];

// 解構json檔
if (localStorage.getItem("blog")) {
  arr = JSON.parse(localStorage.getItem("blog"));
  // userArr = JSON.parse(localStorage.removeItem("useridArr"));

  output(arr);
}
if (localStorage.getItem("blogUser")) {
  registerUserArr = JSON.parse(localStorage.getItem("blogUser"));
  // userArr = JSON.parse(localStorage.removeItem("useridArr"));
}
if (localStorage.getItem("useridArr")) {
  userArr = JSON.parse(localStorage.getItem("useridArr"));
  // userArr = JSON.parse(localStorage.removeItem("useridArr"));
}
console.log(userArr);

// 回到登入頁面
loginpageBtn.addEventListener("click", () => {
  loginToRegister()
});
// 新增文章
releaseBtn.addEventListener("click", () => {
  const text = articleText.value;
  let id = 0;

  if (arr.length !== 0) {
    id = arr[arr.length - 1].id;
  }

  if (text !== "") {
    const addArr = {
      id: id + 1,
      text: text,
      retext: [],
      nickname: [userArr.username],
    };
    arr.push(addArr);
    output(arr);
    articleText.value = "";
  }
  if (arr.length === 0) {
    localStorage.removeItem("blog");
  } else {
    // 製作成json檔
    const arrDate = JSON.stringify(arr);
    // 儲存數據
    localStorage.setItem("blog", arrDate);
  }
});
// 打印文章與回覆區
function output(addArr) {
  articleBox.innerHTML = "";
  addArr.forEach((item) => {
    const articleId = `article-${item.id}`;
    articleBox.innerHTML += `
    <div class="articlebox">
      <table class ="tablefont">
      ${item.nickname}<td class ="tdfont">${item.text}<td>
      </table>
      <div class="article-div">
        <textarea rows="4" cols="50" class="content-text" id="content-text-${item.id}"></textarea>
      </div>
      <div class="btn-box">
        <button class="btn Reply-article" data-article-id="${item.id}">回覆文章</button>
        <button class="btn find-article" onclick="findReply(${item.id})">查看留言</button>
      </div>
    </div>
    `;
  });
}
// 回覆留言
articleBox.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("Reply-article")) {
    const articleId = target.getAttribute("data-article-id");
    const contentText = document.getElementById(`content-text-${articleId}`);
    const reText = contentText.value;

    if (reText !== "") {
      const replyPush = arr.find((item) => item.id == articleId);
      replyPush.retext.push({
        text: reText,
      });
      retextOutput(replyPush);
      contentText.value = "";
    }
  }
  if (arr.length === 0) {
    localStorage.removeItem("blog");
  } else {
    // 製作成json檔
    const arrDate = JSON.stringify(arr);
    // 儲存數據
    localStorage.setItem("blog", arrDate);
  }
});
// 打印留言
function retextOutput(lastItem) {
  contentBox.innerHTML = "";
  lastItem.retext.forEach((retextItem) => {
    contentBox.innerHTML += `
  <div class="replybox">
    <table>
    <tr>
    ${userArr.username}留言:<td>${retextItem.text}</td>
    </tr>
    </table>
  </div>`;
  });
}
// 判斷文章對應留言區
const findReply = (id) => {
  const find = arr.findIndex((item) => item.id === id);
  retextOutput(arr[find]);
};
// 回到登入頁面
function loginToRegister() {
  window.location.href = './login.html';
}