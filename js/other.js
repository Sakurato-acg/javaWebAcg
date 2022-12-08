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

let menu = document.querySelector("header .head .head-menu");
let top_nav = document.querySelector("header .topnav");
let flag = false;
menu.addEventListener("click", function () {
  if (!flag) {
    top_nav.style.display = "block";
    flag = !flag;
  } else {
    top_nav.style.display = "none";
    flag = !flag;
  }
});
