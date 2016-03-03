<?php
  $API_KEY = "f6676c90ab39762f338a06cda9e4b683";
  $ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast?appid=$API_KEY";
  $city = $_GET['city'];
  $country = $_GET['country'];

  $URL = "$ROOT_URL&q=$city,$country";

  $json = file_get_contents($URL);

  header('Content-Type: application/json');
  echo $json;
?>
