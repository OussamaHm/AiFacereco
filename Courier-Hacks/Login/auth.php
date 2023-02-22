<?php
include_once 'dbcon.php';
$hashingkey = "276069be6e55ea0bc56765ebd7887da64f75d2170b84a9c5e56eacf5641e25d7";


if(isset($_POST['login'])) {
	// Handle login request
	$email = $_POST['email']; 
	$sql3 = "SELECT face_idkey FROM usersdata WHERE email='$email'";
	$result3 = mysqli_query($con, $sql3);
	   if (mysqli_num_rows($result3) > 0) {

        	  if($row = mysqli_fetch_assoc($result3)) {
        	  	$facekey = $row["face_idkey"];
  header("location: http://localhost/Courier-Hacks/face-rec/login.php?tx=$facekey");
  }          
        }
    else {header("location: http://localhost/Courier-Hacks/Login/index.php?err=3");}
	
} 



elseif(isset($_POST['register'])) {
	// Handle registration request
	$username = $_POST['username'];
	$email = $_POST['email'];
	$sql = "SELECT username, email FROM usersdata WHERE username='$username' or email='$email'";
	$result = mysqli_query($con, $sql);



        if (mysqli_num_rows($result) > 0) {

        	  if(mysqli_fetch_assoc($result)) {
    header("location: http://localhost/Courier-Hacks/Login/index.php?err=0");
  
  }          
        }
          

        else {
        	 $key = $username . $email . $hashingkey;
        	$hashedkey = hash('sha256', "$key");
        	$sql2 = "INSERT INTO usersdata (username, email,face_idkey) VALUES ('$username', '$email','$hashedkey')"; 

        if (mysqli_query($con, $sql2)) {
        	
     
        
                $link= "http://localhost/Courier-Hacks/Login/send.php?tx=" . $hashedkey . "&em=" . $email;

            header("location: $link");
           
           
          
           

               


       }

          else {
	// Invalid request
	    header("location: http://localhost/Courier-Hacks/Login/index.php?err=1");
               }
        

             }
    }


 else {
	// Invalid request
	header("location: http://localhost/Courier-Hacks/Login/index.php?err=2");
}

?>