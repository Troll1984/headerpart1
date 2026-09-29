let commentsForm = document.querySelector('#comments-form');
let commentsSave = document.querySelector('.comments-save');
let counter = document.querySelector('#counter');
let btnSend = document.querySelector('#btnSend')

let count = 0;
let comments = JSON.parse(localStorage.getItem('key')) || [];


// Выводим сохранённые комментарии
for (let item of comments) {
    commentsSave.innerHTML += `
        <div class="comments-apeared" data-id="${item.id}">
            <h4>${item.name}</h4>
            <p>${item.commentText}</p>
            <button class="delete">Удалить</button>
        </div>
    `;
}

// Устанавливаем начальное количество
count = comments.length;
counter.textContent = count;


// Добавление комментария
commentsForm.addEventListener('submit', function(event) {    
        event.preventDefault();
    

    let formData = new FormData(commentsForm);

    let name = formData.get('user');
    let commentText = formData.get('commentText');

    if (name.trim() === '' || commentText.trim() === '') {
        return;
    }

    let newComment = {
        id: Date.now(),
        name: name,
        commentText: commentText
    };

    commentsSave.innerHTML += `
        <div data-id="${newComment.id}">
            <h3>${name}</h3>
            <p>${commentText}</p>
            <button class="delete">Удалить</button>
        </div>
    `;

    count++;
    counter.textContent = count;

    comments.push(newComment);

    localStorage.setItem('key', JSON.stringify(comments));

    commentsForm.reset();

});
commentsForm.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {

        event.preventDefault();

        commentsForm.requestSubmit();
    }
});



// Удаление комментария
commentsSave.addEventListener('click', function(event) {

    if (!event.target.classList.contains('delete')) {
        return;
    }

    let commentElement = event.target.parentElement;

    let id = Number(commentElement.dataset.id);

    comments = comments.filter(function(item) {
        return Number(item.id) !== id;
    });

    localStorage.setItem('key', JSON.stringify(comments));

    commentElement.remove();

    count = comments.length;
    counter.textContent = count;
    
});

