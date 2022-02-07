setInterval(() => {
  const newYear = new Date("2023-01-01T00:00:00").getTime();
  const now = new Date().getTime();
  var calc = newYear - now;
  var s = 1000;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;

  var day = Math.floor(calc / d);
  var hour = Math.floor((calc % d) / h);
  var minute = Math.floor((calc % h) / m);
  var second = Math.floor((calc % m) / s);

  document.querySelector(".day .value").innerHTML = day;
  document.querySelector(".hour .value").innerHTML = hour;
  document.querySelector(".minute .value").innerHTML = minute;
  document.querySelector(".second .value").innerHTML = second;
}, 1000);

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

const btnDeleteAll = document.querySelector("#btnDeleteAll");
btnDeleteAll.addEventListener("click", deleteAllItems);

// // // delete all items
function deleteAllItems(e) {
  myUL.innerHTML = " ";
  e.preventDefault();
}

const btn2 = document.querySelector("#btnAddNewTask");

btn2.addEventListener("click", function (e) {
  console.log("btn clicked2");

  e.preventDefault(); //delete all butonuna bastığımızda scrollbar yukarı çıkmadı çünkü a etiketinin içindeki linke# gitmemiş oldu
});

const input = document.querySelector("#myInput");

input.addEventListener("focus", eventHandler); //blurda focus dışına çıktığında
input.addEventListener("cut", eventHandler);
input.addEventListener("paste", eventHandler);
input.addEventListener("select", eventHandler);

function eventHandler(e) {
  console.log("event type" + e.type);
  e.target.style.backgroundColor = "#FDFF8F";
}
