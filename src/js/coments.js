/*Работа с коментариями */

let commentText = document.querySelector('#comment-text');
let btnSend = document.querySelector('#btn-send');
let commentsSave = document.querySelector('.comments-save');
let counter = document.querySelector('#counter');


function writeComments() {
    let text = commentText.value;
    if(text.trim() === ''){
        return;
    }   
    let comments = JSON.parse(localStorage.getItem('key')) || [];
    comments.push(text);
    localStorage.setItem('key', JSON.stringify(comments));
    showComments();
    commentText.value = '';    
}

function showComments() {
    let comments = JSON.parse(localStorage.getItem('key')) || [];
    commentsSave.innerHTML = '';
    for(let [index, comment] of comments.entries()) {
        let div = document.createElement('div');
        let btnDel = document.createElement('div');
        div.textContent = comment;
        btnDel.textContent = '✖️';
        commentsSave.append(div);
        div.append(btnDel);
        btnDel.addEventListener('click', function() {
            comments.splice(index, 1);
            localStorage.setItem('key', JSON.stringify(comments));
            showComments();            
        })
    }
    counter.textContent = `(${comments.length})`;
}
commentText.addEventListener('keydown', function(event) {
    if(event.key === 'Enter'){
        writeComments();
    }
})

btnSend.addEventListener('click', writeComments);

showComments();
commentText.value = '';
