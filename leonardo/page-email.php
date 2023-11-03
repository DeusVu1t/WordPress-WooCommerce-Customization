<?php
/*
  Template name: EMAIL_SENDER
*/

$status = 200;
$message = null;
$continue = true;
$msg_body = "";

// weryfikacja czy zapytanie jest POST
if ( $_SERVER['REQUEST_METHOD'] != 'POST' ) {
  exit;
  // $continue = false;
  // $status = 403;
  // $message = '<p class="error">Błędna metoda odwołania: '.$_SERVER['REQUEST_METHOD']."</p>";
}

// sprawdzenie czy formularz istnieje
if ($continue) {

  switch ( $_POST['formType'] ) {
    case 'contact':
      break;
    default:
      $continue = false;
      $status = 403;
      $message = '<p class="error">Formularz nie istnieje: '.$_POST['formType']."</p>";
      break;
  }

}


// RECAPTCHA
if ($continue) {
  $recaptchaSecret = '6LeTuMMUAAAAAJYVmfFvTB8sz4Tif7crAQowbt3a';
  $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . $recaptchaSecret . "&response=" . $_POST['formData']['g-recaptcha-response']);
  $response = json_decode($response, true);
  if ( $response["success"] !== true ) {
    $continue = false;
    $status = 403;
    $message = '<p class="error">Udowodnij że nie jesteś robotem!</p>';
  }
}


// budowanie treści wiadomości dla różnych formularzy
if ($continue) {

  $recipent_list = array(
    'biuro@cukierniabolero.pl'
  );

  switch ( $_POST['formType'] ) {

    case 'contact':
      $message = __('<p class="success">Wiadomość została wysłana</p>', 'leonardo');
      $email_title = 'Bolero - Kontakt: '.$_POST['formData']['your-topic'];
      $msg_body = '';
      $msg_body .= $_POST['formData']['your-firstname']." ";
      $msg_body .= $_POST['formData']['your-lastname'];
      $msg_body .= '<br>';
      $msg_body .= $_POST['formData']['your-email'];
      $msg_body .= '<br>';
      $msg_body .= $_POST['formData']['your-phone'];
      $msg_body .= '<br>';
      $msg_body .= "Termin imprezy ".$_POST['formData']['your-date'];
      $msg_body .= '<br>';
      $msg_body .= 'Wiadomość: ';
      $msg_body .= "<i>".$_POST['formData']['your-message']."</i>";
      $msg_body .= '<br>';
      break;

  }

  wp_mail($recipent_list, $email_title, $msg_body, 'From: biuro@cukierniabolero.pl');
}

$response = array(
  'status' => $status,
  'data' => array(
    'message' => $message
  ),
  'info' => array(
    'request_method' => $_SERVER['REQUEST_METHOD'],
    'recived_data' => $_POST
  )
);


echo json_encode($response);
