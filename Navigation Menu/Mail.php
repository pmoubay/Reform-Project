<?php
    // Only process POST reqeusts.

    $conn = mysqli_connect("localhost","root","","Feedback");
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST['name']));
        $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST['message']);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please try again.";
            exit;
        }

        if($conn === false){
          die("ERROR: Could not connect. " . mysqli_connect_error());
        }

        $query = "insert into UserFeedbackInput(Name,Email,Message) values('$name','$email','$message')";
        if(mysqli_query($conn, $query)){
          //Record added successfully
            echo "Thank you!";
        } else{
            echo "ERROR: Not able to execute the query. " . mysqli_error($conn);
        }
      // Close connection
      mysqli_close($conn);


        // Recipient email address.
        $recipient = "reformottawa@gmail.com";
        // Email subject.
        $subject = "New Feedback Message from $name";
        // Email content.
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";
        $msg = "New feedback received, please check dB table";
        $msg = wordwrap($msg,70);
        // Build the email headers.
        $email_headers = "From: $name <$email>";
        //mail("reformottawa@gmail.com", "New Feedback inserted", $msg);
         $retval = mail($recipient, "New Feedback inserted", "Please query table");
        // Send the email.
        if ($retval === true) {
            // Set a 200 (okay) response code.
            //http_response_code(200);
            echo "Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }
?>
