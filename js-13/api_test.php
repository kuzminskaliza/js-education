<?php
function makeRequest($url, $method = 'GET', $data = null)
{
    $initSession = curl_init();
    curl_setopt($initSession, CURLOPT_URL, $url);
    curl_setopt($initSession, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($initSession, CURLOPT_RETURNTRANSFER, true);

    if ($data) {
        curl_setopt($initSession, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($initSession, CURLOPT_HTTPHEADER, ['Content-Type:application/json']);
    }
    $response = curl_exec($initSession);

    if (curl_errno($initSession)) {
        echo 'Помилка: ' . curl_error($initSession);
    }
    curl_close($initSession);
    return json_decode($response, true);
}

echo 'GET /posts/1' . PHP_EOL;
$response = makeRequest('https://jsonplaceholder.typicode.com/posts/1');
print_r($response);

echo 'GET /posts' . PHP_EOL;
$response = makeRequest('https://jsonplaceholder.typicode.com/posts');
print_r($response);

echo 'POST /posts' . PHP_EOL;
$newPost = [
    'title' => 'New post',
    'body' => 'New post body',
    'userId' => 1,
    'tags' => ['php', 'api']
];

$response = makeRequest('https://jsonplaceholder.typicode.com/posts', 'POST', $newPost);
print_r($response);

echo 'PUT /posts/1' . PHP_EOL;
$updatedPost = [
    'id' => 1,
    'title' => 'Updated post',
    'body' => 'Updated post body',
    'userId' => 1,
    'updatedAt' => '2025-02-05',
];
$response = makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PUT', $updatedPost);
print_r($response);

echo 'PATCH /posts/1' . PHP_EOL;
$partialPost = [
    'title' => 'Updated post title',
];
$response = makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PATCH', $partialPost);
print_r($response);


echo 'DELETE /posts/1' . PHP_EOL;
$response = makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'DELETE');
print_r($response);

