<?php
include_once 'dbcon.php';

if(isset($_GET['tx'])){
$hashparameter = $_GET['tx'];
$sql = "SELECT username FROM usersdata WHERE face_idkey='$hashparameter'";
  $result = mysqli_query($con, $sql);
   
        if (mysqli_num_rows($result) > 0) {
               while($row = mysqli_fetch_assoc($result)) {
               $nameuser = $row["username"];
            }}
            else {
              header("location: http://localhost/Courier-Hacks/face-rec/Unauthorized.html");
             }

}
else {

header("location: http://localhost/Courier-Hacks/face-rec/Unauthorized.html");
 }

?>


<!DOCTYPE html>
<html>

<head>
  <title>Projet Web</title>
  <link rel="stylesheet" type="text/css" href="dist/app.css">
  <p id="hash" style="visibility: hidden; position: absolute;"><?php echo "$hashparameter"; ?></p>
</head>
<style>
  div#question {
    margin: auto;
    padding: 10px;
    width: 400px;
    margin-top: 40px;
    text-align: center;
    border: solid 1px white;
    border-radius: 10px;
    visibility: visible;
}
  body{
  margin: auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Jost', sans-serif;
  background: linear-gradient(to bottom, #290c28, #612b63, #3b243e);
}
.main{
  width: 900px;
 margin-right: 25%;
  align-self: center;
  align-items: center;
  background: red;
  overflow: hidden;
  height: 700px;
  background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/ cover;
  border-radius: 10px;

  box-shadow: 5px 20px 50px #000;
}

.conf {
  background:linear-gradient(to bottom, #612b63 5%, #000000 100%);
  background-color:#612b63;
  border-radius:28px;
  border:1px solid #ffffff;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:17px;
  padding:10px 31px;
  text-decoration:none;
  text-shadow:0px 1px 0px #2f6627;
}
.conf:hover {
  background:linear-gradient(to bottom, #000000 5%, #612b63 100%);
  background-color:#000000;
}
.conf:active {
  position:relative;
  top:1px;
}
.button{
    width: 80px;
    height: 25px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.button:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.button:active {
    color: #000
}

.button:active:after {
    background: transparent;
}

.button:hover:before {
    opacity: 1;
}

.button:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
</style>
<body>

  <div style=" position: -webkit-sticky;
  position: sticky;
  top: 0;padding: 40px;">
<div id="question" style=" position: -webkit-sticky">
                <h2 style="color: white">Continue as <span id = "personne"></span>  <span> ?</span> </h2>
                <a id ="bottona" href="">
                <input class="conf" type="button" value="Yes"  onclick="usertest(true);" />
                </a>
                <input class="conf" type="button" value="No" onclick="usertest(false);" />
        </div>
                 <h1 style = "color: white; font-family: 'Jost', sans-serif; align-self: center;" > <br> Step (2/2): <br></h1><h1 style = "color: white;font-family: 'Jost', sans-serif; align-self: center;"> Welcome  <i style = "color: #d692f7;font-family: 'Jost', sans-serif; align-self: center;"><?php echo " $nameuser,"; ?></i></h1> <h1 style = "color: white; font-family: 'Jost', sans-serif; align-self: center;" >Complete your<br> sign up using FaceID!</h1>
        </div>

        <div class="main">  

  <div class="wrapper">
    <div class="container">
      <canvas id="camera"></canvas>
      <canvas id="capturedImage"></canvas>
    </div>
    <div class="control">
      <div id="webCam" class="button play">Camera<i class="fa fa-play fa-2x"></i></div>
      <div id="capture" class="button capture">Register<i class="fa fa-camera fa-2x"></i></div>
    </div>
    <label class="name">
      <input type="text" placeholder="Your name" autofocus="autofocus" />
    </label>
  </div>
  <p style= "color: darkgray"> <i> <br><br>1 - click on camera to open your webcam. <br> 
  2 - click on register to save your faceID on the database then click on the camera again to confirm.
</i> </p> 
    </div>
  <script type="text/javascript" src="dist/app-2.js"></script>
</body>

</html>