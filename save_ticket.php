
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Информация о билете</title>
    <link rel="stylesheet" href="ticket_styles.css">
</head>
<body>
    <div class="ticket-info">
        <?php
    $servername = "localhost";
    $username = "u2640134_root";
    $password = "5523618OLga";
    $dbname = "u2640134_Tikets";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $film_title = $_POST['film_title'];
    $time = $_POST['time'];
    $seat_number = $_POST['seat_number'];
    $ticket_number = $_POST['ticket_number'];
    $price = $_POST['price'];

    $sql = "INSERT INTO tickets (film_title, time, seat_number, ticket_number, price)
    VALUES ('$film_title', '$time', '$seat_number', '$ticket_number', '$price')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
    ?>
    </div>
</body>
</html>
