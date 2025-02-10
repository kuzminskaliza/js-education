//отримати дані з поста з id 1
fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));

//отримати всі дані з поста з усіма id
fetch('http://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));

//стоврення нових даних
fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'My new post',
        body: 'This is my new post',
        userId: 1,
        tags: ['javascript', 'api']
    })
})
    .then((response) => response.json())
    .then((json) => console.log(json));

//оновлення існуючих даних
fetch('http://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: 1,
        title: 'Updated Post title',
        body: 'Updated content of the post.',
        userId: 1,
        updatedAt: '2025-02-05'
    })
})
    .then((response) => response.json())
    .then((json) => console.log(json));

//часткове оновлення існуючих даних
fetch('http://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Updated Post title'
    })
})
    .then((response) => response.json())
    .then((json) => console.log(json));

//видалення даних
fetch('http://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
    .then((response) => response.json())
    .then((json) => console.log('Post deleted:', json));