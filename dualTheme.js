let lightMode = true;
const themeButton = document.getElementById("dual-theme-button");
themeButton.addEventListener("click",function() {
  if (lightMode === true) {
    lightMode = false;
    document.getElementById("show-hide-password").style.backgroundImage = "url("img/show-light.png")
    themeButton.style.backgroundImage = "url(img/light.png)"
    document.body.style.backgroundColor = "rgb(10,10,10)";
    document.getElementById("headings").style.color = "rgb(255,255,255)"
    //dual-theme button
    document.getElementById("dual-theme-button").style.backgroundColor = "rgb(10,10,10)";
    document.getElementById("dual-theme-button").style.color = "rgb(255,255,255)";
    //password username
    document.getElementById("username").style.backgroundColor = "rgb(10,10,10)";
    document.getElementById("username").style.color = "rgb(255,255,255)";
    //password input
    document.getElementById("password").style.backgroundColor = "rgb(10,10,10)";
    document.getElementById("password").style.color = "rgb(255,255,255)";
    //add-new-password button
    document.getElementById("add-new-password").style.backgroundColor = "rgb(10,10,10)";
    document.getElementById("add-new-password").style.color = "rgb(255,255,255)";
     //hide-show-password button
    document.getElementById("hide-show-password").style.backgroundColor = "rgb(10,10,10)";
    document.getElementById("hide-show-password").style.color = "rgb(255,255,255)";
    //small-text
    document.getElementById("small-text").style.color = "rgb(255,255,255)";
  } else {
    lightMode = true;
    themeButton.style.backgroundImage = "url(img/dark.png)"
    document.getElementById("show-hide-password").style.backgroundImage = "url("img/show.png")
    document.body.style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("headings").style.color = "rgb(0,0,0)";
    //dual-theme button
    document.getElementById("dual-theme-button").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("dual-theme-button").style.color = "rgb(0,0,0)";
    //password username
    document.getElementById("username").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("username").style.color = "rgb(0,0,0)";
    //password input
    document.getElementById("password").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("password").style.color = "rgb(0,0,0)";
    //add-new-password button
    document.getElementById("add-new-password").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("add-new-password").style.color = "rgb(0,0,0)";
     //hide-show-password button
    document.getElementById("hide-show-password").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("hide-show-password").style.color = "rgb(0,0,0)";
    //small-text
    document.getElementById("small-text").style.color = "rgb(0,0,0)";
  }
});
