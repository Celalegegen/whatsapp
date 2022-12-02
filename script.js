
function imageChange(param) {
    let el = document.querySelector("#currentUserImage img");
    le = param.children[0].children[0]
    el.src = le.src;
}

function textChange(lets) {
    let text = document.querySelector("#currentText h4");
    texts = lets.children[1].children[0].children[0].children[0].children[0]
    text.src = texts.src;
}