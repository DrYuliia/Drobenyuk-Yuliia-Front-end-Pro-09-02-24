// Функція для виконання запиту до API
function fetchPostById(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Пост не знайдено');
                }
                return response.json();
            })
            .then(post => resolve(post))
            .catch(error => reject(error));
    });
}

// Функція для виконання запиту до API для отримання коментарів поста
function fetchCommentsByPostId(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Коментарі не знайдено');
                }
                return response.json();
            })
            .then(comments => resolve(comments))
            .catch(error => reject(error));
    });
}

// Отримання елементів DOM
const postIdInput = document.getElementById('post-id');
const postContainer = document.getElementById('post-container');
const commentsContainer = document.getElementById('comments-container');
const errorContainer = document.getElementById('error-container');

// Функція для відображення посту на сторінці
function displayPost(post) {
    const postElement = document.createElement('div');
    postElement.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    <button id="comments-btn">Отримати коментарі</button>
  `;
    postContainer.innerHTML = '';
    postContainer.appendChild(postElement);

    // Додавання обробника події на кнопку для отримання коментарів
    const commentsBtn = document.getElementById('comments-btn');
    commentsBtn.addEventListener('click', () => {
        fetchComments(post.id);
    });
}

// Функція для відображення коментарів на сторінці
function displayComments(comments) {
    const commentsList = document.createElement('ul');
    comments.forEach(comment => {
        const commentItem = document.createElement('li');
        commentItem.textContent = comment.body;
        commentsList.appendChild(commentItem);
    });
    commentsContainer.innerHTML = '';
    commentsContainer.appendChild(commentsList);
}

// Функція для відображення помилки на сторінці
function displayError(error) {
    errorContainer.textContent = error.message;
}

// Функція для отримання посту та відображення його на сторінці
function fetchPost(id) {
    fetchPostById(id)
        .then(post => {
            displayPost(post);
        })
        .catch(error => {
            displayError(error);
        });
}

// Функція для отримання коментарів та відображення їх на сторінці
function fetchComments(id) {
    fetchCommentsByPostId(id)
        .then(comments => {
            displayComments(comments);
        })
        .catch(error => {
            displayError(error);
        });
}

// Додавання обробника події на форму для введення ID посту
document.getElementById('post-form').addEventListener('submit', event => {
    event.preventDefault();
    const postId = parseInt(postIdInput.value);
    if (postId >= 1 && postId <= 100) {
        fetchPost(postId);
    } else {
        displayError(new Error('ID повинно бути від 1 до 100'));
    }
});
