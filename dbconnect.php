  /*
      php code to connect to the database...
      this file is included on "submitquery.php" so querying requests can be processed to database
  */
  
  
  
  <?php
      $conn = mysqli_connect('localhost', 'shovlrdb');
      $db = mysqli_select_db('shovlrdb');

      if($conn)
      {
        echo("Connection sucessfully!");        
      }else
      {
        die("Error connecting to Database!");
      }
  ?>
