<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Sign up / Login Form</title>
  <link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<!DOCTYPE html>
<html>
<head>
	<title>Slide Navbar</title>
	<link rel="stylesheet" type="text/css" href="slide navbar style.css">
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet">
</head>
<body>
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true">

			<div class="signup">
				

    
			
				<form action="auth.php" method="post">
					<label for="chk" aria-hidden="true">Sign up</label>

					<input type="text" name="username" placeholder="User name" required="">
					<input type="email" name="email" placeholder="Email" required="">
					<button type="submit" name="register" value="Register">Sign up</button>
							  <?php
                   if(isset($_GET['err'])){
                   	$err = $_GET['err'];
                     echo '<h3 style="color: red; text-align: center;">';
                     if($err == 0){
                       echo 'User entered already exists !';
                     }
                     else if($err == 1){
                    echo 'Database Error !';
                     }
                     else if($err == 2){
                    echo 'invalid request !';
                     }
                      else if($err == 3){
                    echo 'Email you entered doesn\'t exist <br>You can Sign up using it !';
                     }
                     else {echo 'Unexpected Error !';}
                    
                     
                     echo '</h3>'; 

                   }
                   if(isset($_GET['val'])){
                      $val = $_GET['val'];
                     echo '<h3 style="color: green; text-align: center;">';
                     if($val == 0){
                   echo 'A verification link has <br>been sent to your email !';
                      }
                      echo '</h3>';
                    }
							 
							   ?>
				</form>
			</div>

			<div class="login">
				<form action="auth.php" method="post">
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="">
					<button type="submit" name="login" value="Login">Login using FaceID</button>
				</form>
			</div>
	</div>
</body>
</html>
<!-- partial -->
  
</body>
</html>
