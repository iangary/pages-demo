var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/github.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}