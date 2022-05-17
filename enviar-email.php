<?php
$nombre = $_POST["name"];
$correo = $_POST["correo"];
$tema = $_POST["numero"];
$mensaje = $_POST["mensaje"];
$correosend = 'alejandrobolivar908@gmail.com';
$mensajeconfirmacion = '<script> 
                alert("El mensaje se envio correctamente");
                window.history.go(-1);
            </script>';
$body = "<img src='https://i.ibb.co/1bPBKHt/LOGOfinal.png' alt='FCB' title='FBC'><br>" . "Nombre: " . $nombre . "<br>correo: " . $correo . "<br>Tema: " . $tema . "<br>mensaje: " . $mensaje . "<hr>";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);
try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'ssl://smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'alejandrobolivar908@gmail.com';                     // SMTP username
    $mail->Password   = 'tiorico1';                               // SMTP password
    $mail->SMTPSecure = "PHPMailer::ENCRYPTION_STARTTLS";         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465 ;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('alejandrobolivar908@gmail.com', $nombre);
    $mail->addAddress($correosend);     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'FCB - PaginaWeb - formulario';
    $mail->Body    = $body;
    $mail->CharSet = 'UTF-8';
    $mail->send();
    echo $mensajeconfirmacion;
} catch (Exception $e) {
    echo "Mailer Error: {$mail->ErrorInfo}";
}