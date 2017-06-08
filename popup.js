chrome.tabs.executeScript(null, { file: "common.js" });

function click(e) {
    chrome.tabs.executeScript(null, { code: "changeBackgroundColor('" + e.target.id + "')" });
    window.close();
}

function clickOpen(e) {
    chrome.tabs.executeScript(null, { code: "open('" + e + "')" });
    window.close();
}

// function clickClose(e) {
//     chrome.tabs.executeScript(null, { code: "close('" + e + "')" });
//     window.close();
// }
document.addEventListener('DOMContentLoaded', function() {
    var divs = document.querySelectorAll('div.color');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', click);
    }
    document.querySelector('div.open').addEventListener('click', clickOpen);
    // document.querySelector('div.close').addEventListener('click', clickClose);
});