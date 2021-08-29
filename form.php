<?php
$name = $email_address = $feedback = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = test_input($_POST['f_name']);
    $email_address = test_input($_POST['mail']);
    $feedback = test_input($_POST['message']);

    #Send email
    if (filter_var($email_address, FILTER_VALIDATE_EMAIL)){
      $headers = "From: {$email_address}";
      $sent = mail('yarilovets.v.i@gmail.com', 'Portfolio Form', "Имя: {$name}\nEmail: {$email_address}\nПредложения: {$feedback}", $headers);
    }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>