<?php
        $em=$_GET['em'];
        $tx=$_GET['tx'];
      /**
       * 1) Install Courier SDK: composer require trycourier/courier
       * 2) Create this php file in your project's base folder
       */
        require "./vendor/autoload.php";
        use Courier\CourierClient;
      
        $courier =  new CourierClient("https://api.courier.com/", "pk_prod_VNNS2AHWFN4RXPHBAD1QBBD531EH");
      
        $result = $courier->sendEnhancedNotification(
          (object) [
            'to' => [
              'email' => "$em"
            ],
            'content' => [
              'title' => "Welcome to Courier!",
             'body' => "To complete your Sign up using FaceId please click on this link (DO NOT SHARE THIS LINK WITH ANYONE): {{confirm}}"
            ],
            'data' => [
             'confirm' => "http://localhost/Courier-Hacks/face-rec/register.php?tx=$tx",
            ],
          ]
        );

          sleep(0.2);
            header("location: http://localhost/Courier-Hacks/Login/index.php?val=0");
      ?>