<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';
$mail = new PHPMailer(true); 


$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'foo@gmail.com';
$mail->Password = 'gmailpassword';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
$mail->setLanguage('ru', 'vendor/phpmailer/phpmailer/language');

$email_to = "jon.daveyan@gmail.com";
$email_subject = "Salon-reutov";

$first_name = $_POST['name']; // required
$email = $_POST['email']; // required
$tel = $_POST['tel']; // required
$website = (isset($_POST['website'])) ? $_POST['website'] : 'не заполнено';
$message = (isset($_POST['message'])) ? $_POST['website'] : 'не заполнено';

$email_message = "Информация о клиенте, который оставил заявку.\n\n";
$email_message .= "Имя: ".$first_name."\n";
$email_message .= "Почта: ".$email."\n";
$email_message .= "Номер: ".$tel."\n";
$email_message .= "Вебсайт: ".$website."\n";
$email_message .= "Сообщение: ".$message."\n";

$mail->setFrom($email);
$mail->addReplyTo($email);
$mail->addAddress($email_to);
$mail->Subject = $email_subject;
$mail->Body = $email_message;

try {
  $mail->send();
    header('Location: /index.php');
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}
 
?>
 
