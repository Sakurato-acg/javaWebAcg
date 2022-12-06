var b = document.body;
var h = new Date().getHours();
var head = document.querySelector("header");
var time = document.getElementById("time");
console.dir(b);
console.dir(head);
console.dir(time);

let alist = document.querySelectorAll("main .change");
for (let index = 0; index < alist.length; index++) {
  alist[index].addEventListener("mouseover", function () {
    // console.log(index);
    // console.log(this);
    for (let i = 0; i < alist.length; i++) {
      alist[i].style.backgroundColor = "inherit";
      alist[i].style.color = "#a97f70";
    }
    this.style.backgroundColor = "#ffc107";
    this.style.color = "white";
  });
  alist[index].addEventListener("mouseleave", function () {
    this.style.backgroundColor = "inherit";
    this.style.color = "#a97f70";
    alist[0].style.backgroundColor = "#28b9be";
    alist[0].style.color = "white";
  });
}
if (h > 18) {
  b.style.backgroundImage = "url(imgs/background-night.png)";
  head.style.backgroundColor = "#373737";
} else {
  b.style.backgroundImage = "url(imgs/background-light.png)";
  head.style.backgroundColor = "#fff";
}

function showtime() {
  var date = new Date();
  // 我们写一个 2019年 5月 1日 星期三
  var arr = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  var day = date.getDay();
  var hh = date.getHours();
  var fen = date.getMinutes();
  var miao = date.getSeconds();
  if (miao < 10) {
    miao = "0" + miao;
  }
  if (hh < 10) {
    hh = "0" + hh;
  }
  if (fen < 10) {
    fen = "0" + fen;
  }
  // console.log(miao);
  time.innerHTML =
    arr[day] + "   " + hh + "    :   " + fen + "    :    " + miao;
  setTimeout(showtime, 1000);
}
showtime();
