<?php
$ticket_number = $_GET['ticket_number'];

$servername = "localhost";
$username = "u2640134_Tikets";
$password = "5523618OLga";
$dbname = "u2640134_Tikets";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM tickets WHERE ticket_number='$ticket_number'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        ?>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Информация о билете</title>
            <link rel="stylesheet" href="ticket_styles.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        </head>
        <body>
            <div class="container">
                <div class="codigo">
                    <i class="fas fa-barcode"></i> <span><i class="fas fa-barcode"></i></span>
                </div>
                <div class="izquierda">
                    <div class="boarding">
                        <h1>
                            CYBERCINEMA
                        </h1>
                    </div>
                </div>
                <div class="derecha">
                    <div class="titulo">
                        <h2>
                            CYBERCINEMA
                        </h2>
                    </div>
                    <div class="informacion">
                        <h2>Название фильма/</h2>
                        <p><?php echo $row["film_title"]; ?></p>
                        <h2>Время/</h2>
                        <p><?php echo $row["time"]; ?></p>
                        <h2>Стоимость/</h2>
                        <p><?php echo $row["price"]; ?> рублей</p>
                        <h2>г.Тверь Оснабрюкская 66</h2>
                    </div>
                </div>
                <div class="linea"></div>
                <div class="marca">
                    <p>CYBERCINEMA CYBERCINEMA CYBERCINEMA CYBERCINEMA  </p>
                </div>
            </div>
        </body>
        </html>
        <?php
    }
} else {
    echo "Билет не найден";
}
$conn->close();
?>
