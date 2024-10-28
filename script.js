
var popup = { label: ['HoBocTb 1', 'HoBocTb 2', 'HoBocTb 3'], message: ['HoBocTb 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!', 'HoBocTb 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. A, alias.', 'HoBocTb 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate.'] }

function viewPopup(i) {
    var label = document.getElementById('label');
    label.textContent = popup.label[i];

    var message = document.getElementById('message');
    message.textContent = popup.message[i];

    var panel = document.getElementById('popup');
    panel.style.visibility = 'visible';

    var cover = document.getElementById('cover');
    cover.style.visibility = 'visible';
}

function remowePopup() {
    var panel = document.getElementById('popup');
    panel.style.visibility = 'hidden';

    var cover = document.getElementById('cover');
    cover.style.visibility = 'hidden';
}