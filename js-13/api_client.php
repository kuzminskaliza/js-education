<?php

$apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

$apiKey = '829a848b33cda975ce9b957f575e3bcf';

$city = 'Kyiv';
$requestUrl = "$apiUrl?q=$city&appid=$apiKey&units=metric";
$response = file_get_contents($requestUrl);

if ($response === FALSE) {
    die('Помилка при запиті до API');
}

$data = json_decode($response, true);

if (isset($data['main']['temp'])) {
    $temperature = $data['main']['temp'];
    $description = $data['weather'][0]['description'];

    echo "Температура в місті $city: $temperature Celsius" . PHP_EOL;
    echo "Опис погоди: $description" . PHP_EOL;
} else {
    echo 'Не вдалось отримати інформацію про погоду' . PHP_EOL;
}