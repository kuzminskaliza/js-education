fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'My new post',
        body: 'This is a test post',
        userId: 1
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

fetch('http://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Updated title',
        body: 'Updated content',
        userId: 1
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

fetch('http://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Partially updated title'
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

fetch('http://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
    .then(response => {
        if (response.ok) console.log('Post deleted');
        else throw new Error('Post not deleted');
    })
    .catch(error => console.log(error));

fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (response.ok) {
            throw new Error('Error HTTP: ${response.status}');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));

async function fetchData() {
    try {
        let response = await fetch('http://jsonplaceholder.typicode.com/posts');
        if (response.ok) throw new Error('Error HTTP: ${response.status}');

        let data = await response.json();
        console.log('Get data', data);
    } catch (error) {
        console.error('Error: ', error.message);
    }
}

fetchData();