<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "abdulmateen.amk581@gmail.com"; // 🔁 Change to your email
  $name = strip_tags($_POST["name"]);
  $email = strip_tags($_POST["email"]);
  $message = strip_tags($_POST["message"]);

  $subject = "New Contact Form Message from $name";
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Failed to send message. Please try again later.";
  }
}
?>
