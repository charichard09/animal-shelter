window.onload = function() {
  let buttonBlackObj = document.querySelector("button#buttonBlack");
  let buttonWhiteObj = document.querySelector("button#buttonWhite");
  let buttonEnlargeF = document.querySelector("button#buttonEnlargeF");
  let buttonDefaultF = document.querySelector("button#buttonDefaultF"); 

  buttonBlackObj.onclick = function() {
    document.body.style.backgroundColor = "black";
  };

  buttonWhiteObj.onclick = function() {
    document.body.style.backgroundColor = "white";
  };

  buttonEnlargeF.onclick = function() {
    document.body.setAttribute("style", "font-size: 50px !important;")
  };

  buttonDefaultF.onclick = function() {
    document.body.setAttribute("style", "font-size: 16px !important")
  };
}