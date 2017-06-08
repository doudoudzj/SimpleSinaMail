function changeBackgroundColor(x) {
    document.body.style.backgroundColor = x;
}

function open() {
    window.console.log('open');
    // document.querySelectorAll('.connMod')[0].style.backgroundColor = "red";
    // document.querySelectorAll('.connMod')[0].style.display = "none";
    displayElement('.wui-PropList'); // 显示邮件内容页顶更多信息
    removeElement('.connMod'); // 首页tab
    removeElement('.extendAd'); // 列表底部广告
    removeElement('.insertAdNew'); // 列表顶部一行广告
    removeElement('.ad1'); // 首页右侧广告
    removeElement('.insertAd'); // 邮件内容页顶部一行广告
    removeElement('.detailIcoDown'); // 详细信息按钮去掉
}

function close() {
    window.console.log('close');
}

function displayElement(_element) {
    var divs = document.querySelectorAll(_element);
    if (divs && divs.length > 0) {
        for (var i = 0; i < divs.length; i++) {
            divs[i].style.display = "block";
        }
    }
}

function removeElement(_element) {
    var divs = document.querySelectorAll(_element);
    if (divs && divs.length > 0) {
        for (var i = 0; i < divs.length; i++) {
            var _parentElement = divs[i].parentNode;
            if (_parentElement) {
                _parentElement.removeChild(divs[i]);
            }
        }
    }
}