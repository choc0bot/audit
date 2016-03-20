<?php


?>
<html>
<head>
  <meta content="text/html; charset=ISO-8859-1" http-equiv="content-type">

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquerymobile/1.4.2/jquery.mobile.min.js"></script>
<script src="jquery.ui.touch-punch.min.js"></script>
<!--<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css" />-->
<!--<link rel="stylesheet" href="http://sitedbase/css/Flat-UI-master/css/flat-ui.css" type="text/css">-->
<link rel="stylesheet" href="http://sitedbase/libraries/jquery/css/jquery-mobile-flat-ui-theme/generated/jquery.mobile.flatui.min.css" type="text/css">
<link rel="stylesheet" href="rack.css" type="text/css">


</head>



	
<div data-role="tabs" id="tabs">
  <div data-role="navbar">
        <ul>
          <li><a href="#general">General</a></li>
          <li><a href="#tab2">Contact</a></li>
			    <li><a href="#tab3">Room</a></li>
    			<li><a href="#tab4">Racks</a></li>
    			<li><a href="#tab5">Equipment</a></li>
    			<li><a href="#tab6">Photos</a></li>					
        </ul>
    </div>
		
    <div id="general">
		<?php
 require($_SERVER['DOCUMENT_ROOT'].'/libraries/audit_form/general.html');
 ?>
    </div>
		
		
		
<div id="tab2">
<?php
 require($_SERVER['DOCUMENT_ROOT'].'/libraries/audit_form/contact.html');
 ?>
</div>	
		
	<div id="tab3">
<?php
 require($_SERVER['DOCUMENT_ROOT'].'/libraries/audit_form/room.html');
 ?>
</div>
		

<div id="tab4">

 <div>
<button id="add_tab">Add rack</button>
 </div>



<?php
 require($_SERVER['DOCUMENT_ROOT'].'/libraries/audit_form/racks.html');
 ?>


</div>


<div id="tab5">
<?php
 require($_SERVER['DOCUMENT_ROOT'].'/libraries/audit_form/equipment.html');
 ?>
</div>

<div id="tab6">
<?php
 require($_SERVER['DOCUMENT_ROOT'].'/libraries/audit_form/photo.html');
 ?>
</div>


</form>
</div>
</html>


<?php

?>
