
<?php

require __DIR__.'/../app/config/dev.php';
require __DIR__.'/../app/app.php';
require __DIR__.'/../app/routes.php';
require_once __DIR__.'/../vendor/autoload.php';


//flux rss gestionnaire

$app = new Silex\Application();
$app->run();

$web_url ="http://" . $_SERVER["SERVER_NAME"] . $_SERVER["REQUEST_URI"];
$str = "<?xml version='1.0' ?>";
$str .= "<rss version='2.0' >";

  $str .= "<channel>";

    $conn = mysqli_connect("localhost", "root", "", "watson");
    $result = mysqli_query($conn, "SELECT * FROM tl_liens ORDER BY lien_id DESC LIMIT 15");

    while ($row = mysqli_fetch_object($result))
    {
      $str .= "<item>";
        $str .= "<title>" . htmlspecialchars($row->lien_titre) . "</title>";
        $str .= "<description>" . $row->lien_desc . "</description>";
        $str .= "<link>" . $row->lien_url . "</link>";
      $str .= "</item>";
    }

    
  $str .= "</channel>";
$str .= "</rss>";

$str = iconv("CP1257", "UTF-8", $str);
file_put_contents("rss.xml", $str);

?>
