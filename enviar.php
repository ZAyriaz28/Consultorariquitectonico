<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['name'];
    $correo = $_POST['email'];
    $fecha = $_POST['date'];
    $hora = $_POST['time'];
    $mensaje = $_POST['message'];

    // Configura el correo electrónico
    $to = "tu_correo@empresa.com"; // Reemplaza con tu correo electrónico
    $subject = "Nueva Solicitud de Cotización";
    $body = "Nombre: $nombre\nCorreo: $correo\nFecha: $fecha\nHora: $hora\nMensaje: $mensaje";
    $headers = "From: $correo";

    // Envía el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Solicitud enviada con éxito.";
    } else {
        echo "Error al enviar la solicitud.";
    }
} else {
    echo "Método de solicitud no válido.";
}
?>