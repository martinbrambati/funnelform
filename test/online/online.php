<!DOCTYPE HTML> 
<html>
<head>

<style>
.error {color: #FF0000;}
</style>
<script src="conf.js"></script>
<script>
    	var _gaq = _gaq || [];
			var _uacct = conf.UA;
			
			_gaq.push(['_setAccount', conf.UA]);
			_gaq.push(['_setDomainName', conf.site]);
			_gaq.push(['_setAllowLinker', true]);
			_gaq.push(['_trackPageview']);
			
			(function() {
				var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
				ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();
</script>
</head>
<body> 

<?php
// define variables and set to empty values
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
   if (empty($_POST["name"]))
     {$nameErr = "Name is required";}
   else
     {
     $name = test_input($_POST["name"]);
     // check if name only contains letters and whitespace
     if (!preg_match("/^[a-zA-Z ]*$/",$name))
       {
       $nameErr = "Only letters and white space allowed"; 
       }
     }
   
   if (empty($_POST["email"]))
     {$emailErr = "Email is required";}
   else
     {
     $email = test_input($_POST["email"]);
     // check if e-mail address syntax is valid
     if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email))
       {
       $emailErr = "Invalid email format"; 
       }
     }
     
   if (empty($_POST["website"]))
     {$website = "";}
   else
     {
     $website = test_input($_POST["website"]);
     // check if URL address syntax is valid (this regular expression also allows dashes in the URL)
     if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website))
       {
       $websiteErr = "Invalid URL"; 
       }
     }

   if (empty($_POST["comment"]))
     {$comment = "";}
   else
     {$comment = test_input($_POST["comment"]);}

   if (empty($_POST["gender"]))
     {$genderErr = "Gender is required";}
   else
     {$gender = test_input($_POST["gender"]);}
}

function test_input($data)
{
     $data = trim($data);
     $data = stripslashes($data);
     $data = htmlspecialchars($data);
     return $data;
}
?>

<h2>PHP Form Validation Example</h2>
<p><span class="error">* required field.</span></p>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" name="funnel_form"> 
   Name: <input type="text" name="name" value="<?php echo $name;?>">
   <span class="error">* <?php echo $nameErr;?></span>
   <br><br>
   E-mail: <input type="text" name="email" value="<?php echo $email;?>">
   <span class="error">* <?php echo $emailErr;?></span>
   <br><br>
   Website: <input type="text" name="website" value="<?php echo $website;?>">
   <span class="error"><?php echo $websiteErr;?></span>
   <br><br>
   Comment: <textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>
   <br><br>
   Gender:
   <input type="radio" name="gender" <?php if (isset($gender) && $gender=="female") echo "checked";?>  value="female">Female
   <input type="radio" name="gender" <?php if (isset($gender) && $gender=="male") echo "checked";?>  value="male">Male
   <span class="error">* <?php echo $genderErr;?></span>
   <br><br>
   <input type="submit" name="submit" value="Submit"> 
</form>

<?php
echo "<h2>Your Input:</h2>";
echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $website;
echo "<br>";
echo $comment;
echo "<br>";
echo $gender;
?>
<script src="http://code.jquery.com/jquery.js"></script>
<script src="../../build/trackform.min.js"></script>

  <script>

    $(document).ready(function(){
      formTracker.formName="funnel_form";
		  tracker = _gaq;
			formTracker.init();
		});

	</script>
</body>
</html>

<html>
