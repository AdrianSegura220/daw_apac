<!doctype html>
<html lang="en" class="no-js">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!--Cambiar el título de acuerdo a la página!-->
		<title>APAC - Menú Principal</title>
		<link rel="icon" href="img/apac.png">

		<!--Materialize-->
  	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection,print"/>
		<link href="css/materialize.min.css" type="text/css" rel="stylesheet" media="screen,projection,print"/>

		<!--Nuestro-->
		<link href="css/modificaciones_materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
		<link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>

	</head>
	<body>
		<?php include('includes/nav.ini.php'); ?>
		<?php include('includes/modals/iniciarSesion.php'); ?>
		<main>
			<div class="video-container">
        <iframe src="//www.youtube.com/embed/jivSwLN7Xkg" frameborder="0" allowfullscreen></iframe>
      </div>
			<div class="section bigger-section">
		    <div class="row container center">
		      <h2 class="header color1-text">¡Avisos importantes!</h2>
		      <p class="">- Último día para el precio de $500 en la categoría "Barrigones" en el torneo "La Michelada".</p>
					<p>- El torneo "La Michelada" ha abierto 100,000 lugares!</p>
		    </div>
		  </div>
			<div class="parallax-container">
			 	<div class="parallax"><img src="img/fotoCarpApac.JPG"></div>
		 	</div>
		</main>
		<?php include('includes/footer.php'); ?>
		<!--SCRIPTS------------------------------------------------------------------->
		<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
		<script src="js/materialize.js"></script>
		<script src="js/init.js"></script>
		<!--Auto iniciar atributos Materialize-->
		<script type="text/javascript">M.AutoInit();</script>
	</body>
</html>
