<?php


?>
<html>
<head>
  <meta content="text/html; charset=ISO-8859-1" http-equiv="content-type">


    <script src="http://code.jquery.com/jquery.js"></script>
    <script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>

	<link href="/libraries/jquery/css/jquery-ui-1.9.0.custom/css/ui-lightness/jquery-ui-1.9.0.custom.css" rel="stylesheet">
	

	
	
	<!---
	<link href="http://sitedbase/libraries/jquery/css/ui-lightness/wijmo.css" rel="stylesheet">
	---->
	<script src="/libraries/formscript.js"></script>

<style>
label {
        display: inline-block; width: 5em;
    }
    fieldset div {
        margin-bottom: 2em;
    }
    fieldset .help {
        display: inline-block;
    }
    .ui-tooltip {
        width: 210px;
    }

.ui-combobox {
        position: relative;
        display: inline-block;
    }
.ui-combobox-toggle {
        position: absolute;
        top: 0;
        bottom: 0;
        margin-left: -1px;
        padding: 0;
        /* adjust styles for IE 6/7 */
        *height: 1.7em;
        *top: 0.1em;
    }
.ui-combobox-input {
        margin: 0;
        padding: 0.3em;
    }

ol.u {list-style-type:none;}

.room_fire_div { display:none;}
.room_cooling_div { display:none;}

.ui-textinput {
    padding: 0.5em;
}

.ui-textinput.ui-state-default {
    background: #fff;
}

div.block{
	overflow:hidden;
	padding: 8px;
	margin:8px;
	background: #FFFFFF;
	border-radius: 6px;
	width: 40em;
}
div.block label{
  width:160px;
  display:block;
  float:left;

}
div.block .input{
  margin-left:4px;
  float:left;
}

.styled-select select {
   background: transparent;
   width: 268px;
   padding: 5px;
   font-size: 16px;
   border: 1px solid #ccc;
   height: 34px;
}

.styled-select {
   width: 230px;
   height: 34px;
   overflow: hidden;
   background: url(ui-down.png) no-repeat right #ddd;
}
	
</style>
</head>



	
<form  id="myForm" method="post" action="">
    <div id="maintabs">
        <ul>
            <li><a href="#general">General</a></li>
            <li><a href="#tab2">Contact</a></li>
			    <li><a href="#tab3">Room</a></li>
    			<li><a href="#tab4">Racks</a></li>
    			<li><a href="#tab5">Equipment</a></li>
    			<li><a href="#tab6">Photos</a></li>					
        </ul>
 
		
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
