let titleMargin  = 50;

function moveTitle() {
    titleMargin += 10;
    if (titleMargin == 1300)
        titleMargin = 50;
    document.querySelector('#title').style.marginRight = titleMargin.toString() + 'px';
}

setInterval(moveTitle,300);
let fullName = window.location.href.split('=').pop();
fullName = fullName.replace(/%20/g, ' ');
document.querySelector('#greet').textContent = 'Hello, ' + fullName + ' !';