import print from "print-js";

function printTest() {
  printJS({
    printable: "app",
    type: "html",
    style: ".result {visibility: visible;font-size: 30px;color: green;}",
    css: "src/style.css"
  });
}

function printTest2() {
  print({
    printable: "app",
    type: "html",
    style: ".result {visibility: visible;font-size: 30px;color: green;}",
    css: "src/style.css"
  });
}

document.getElementById("test-button").addEventListener("click", printTest);
document.getElementById("test-button2").addEventListener("click", printTest2);
