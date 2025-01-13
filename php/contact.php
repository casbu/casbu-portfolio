<?php
    $type = $_POST['idType'];
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: $email';
    $to = 'cterrellburleson@gmail.com';
    $subject = 'Hello';
    $human = $_POST['human'];

    $body = "From: $fname $lname\n E-Mail: $email\n Type: $type\n Message:\n $message";

    if ($_POST["submit"] && $human == '4') {
      /* Anything that goes in here is only performed if the form is submitted */
      if (mail ($to, $subject, $body, $from)) {
        echo '<p>Your message has been sent!</p>';
      } else if ($_POST["submit"] && $human != '4') {
        echo '<p>Something went wrong, go back and try again.</p>';
      }
    } else {
      echo '<p>You need to fill in all required fields!!</p>';
    }
?>