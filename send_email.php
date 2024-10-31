<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "qumaprogram@gmail.com"; // Замените на ваш email
    $subject = "Новая заявка с сайта";
    $body = "Имя: $namenEmail: $emailnСообщение: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Заявка успешно отправлена!";
    } else {
        echo "Ошибка при отправке заявки.";
    }
} else {
    echo "Неверный метод запроса.";
}
?>ё
