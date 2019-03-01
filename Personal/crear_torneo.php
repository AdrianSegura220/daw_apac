<!doctype html>
<html lang="en" class="no-js">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!--Cambiar el título de acuerdo a la página!-->
		<title>APAC - Registrar en torneo</title>

		<!--Materialize-->
  	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection,print"/>
		<link href="css/materialize.min.css" type="text/css" rel="stylesheet" media="screen,projection,print"/>

		<!--Nuestro-->
		<link href="css/modificaciones_materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
		<link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
		<!--
		**CUANDO TENGAMOS LOS LOGOS... AGREGAR AQUI LA IMAGEN DEL LOGO SIMPLE
		IMAGEN PARA EL LOGO QUE APARECE EN LA PESTAÑA DEL NAVEGADOR**
		<link rel="icon" href="img/logo.png">
		-->

	</head>
	<body>
		
		<?php include('includes/nav.ini.php'); ?>
		<?php include('includes/modals/iniciarSesion.php'); ?>
		<!--Todo el contenido adentro del main!-->
		<main>
            <br>
            <h1 class="centrarTitulo">Crear Torneo</h1>
            <div class="container">
                
                <div class="row" id="fondoDivCrearTorneo">
                    <div class="col s7" id="crearT_form">
                        
                         <div class="input-field col s12 crearT_label_form" id="registrar_club">
                            <select>
                                <option value="" disabled selected>Selecciona el club de origen</option>
                                <option value="Alamo Country Club">Alamo Country Club</option>
                                <option value="Club Campestre Queretaro">Club Campestre Querétaro</option>
                                <option value="Campa">El Campanario Club de Golf</option>
                            </select>
                            <label>Club de origen para este torneo</label>
                        </div>
                        <div class="input-field col s12 crearT_label_form">
                            <input placeholder="Edad" id="registrar_edad" type="text" class="validate">
                            <label for="first_name">Edad</label>
                        </div>
                        <div class="input-field col s12 crearT_label_form" id="registrar_genero">
                            <select>
                                <option value="" disabled selected>Selecciona el club de origen</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Masculino">Masculino</option>
                            </select>
                            <label>Club de origen para este torneo</label>
                        </div>
                        <div id="colocarFormas"></div>
                        
                    </div>
                    <!-- Imagen Poster -->
                    <div class="col s5 right-align alinearV" id="poster_crearT"><img src = "img/posterCrearTorneoExample.jpg" ></div>
                    </div>
            </div>
		</main>

		<!--SCRIPTS------------------------------------------------------------------->
		

		<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
		<script src="js/materialize.js"></script>
		<script src="js/init.js"></script>
		<!--Auto iniciar atributos Materialize-->
		<script type="text/javascript">M.AutoInit();</script>
        <script type="text/javascript" src="js/crear_torneoJS.js"></script>
		
        
	</body>
</html>
