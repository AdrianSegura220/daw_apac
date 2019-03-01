<!doctype html>
<html lang="en" class="no-js">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!--Cambiar el título de acuerdo a la página!-->
		<title>APAC - Registrar Usuario</title>

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
		<main>
		 <div class="container">
			 <article>
			    <div class="card-panel azulFondoCLaro textoBlanco" > <h2 class=center>Registrar</h2>
			      <div class="row">
			        <div class="col s12">
			          <div class="row">
			            <div class="input-field col t1 azulFondoCuadroTexto input-blanco">
			            	<label for="Correo Electronico">Correo Electronico</label>
			              <input id="Correo" type="text" class="validate">
			            </div>
			            <div class="input-field col t1 azulFondoCuadroTexto">
			              <input placeholder="Usuario" id="Usuario" type="text" class="validate">
			              <label for="Usuario">Usuario</label>
			            </div>
			          </div>
			        </div>
			      <div class="row">
			        <div class="col s12">
			          <div class="row">
			            <div class="input-field col t1 azulFondoCuadroTexto">
		<input id="password" type="password" class="validate">
		          <label for="password">Password</label>
			            </div>
			            <div class="input-field col t1 azulFondoCuadroTexto">
			              <input placeholder="Confrimar Contraseña" id="confrimarContraseña" type="text" class="validate">
			              <label for="Confrimar contraseña">Confrimar Contraseña</label>
			            </div>
			          </div>
			        </div>
			        <div class="row">
			        <div class="col s12">
			          <div class="row">
			            <div class="input-field col t1 azulFondoCuadroTexto">
			            	<label for="Nombre">Nombre</label>
			              <input placeholder="Nombre" id="Nombre" type="text" class="validate">
			            </div>
			            <div class="input-field col t1 azulFondoCuadroTexto">
			              <input placeholder="Apellido Paterno" id="Apellido Paterno" type="text" class="validate">
			              <label for="Apellido Paterno">Apellido Paterno</label>
			            </div>
			          </div>
			        </div>
			        <div class="row">
			        <div class="col s12">
			          <div class="row">
			            <div class="input-field col t1 azulFondoCuadroTexto">
			            	<label for="Apellido Materno">Apellido Materno</label>
			              <input placeholder="Apellido Materno" id="Apellido Materno" type="text" class="validate">
			            </div>
			            <div class="input-field col t1 azulFondoCuadroTexto">
			              <input placeholder="Numero de Telefono" id="Numero de Telefono" type="text" class="validate">
			              <label for="Numero de telefono">Numero de Telefono</label>
			            </div>
			          </div>
			        </div>

			         <div class="row">
			        <div class="col s12">
			          <div class="row">
			            <div class="input-field col t1 azulFondoCuadroTexto">
			            	<h4>Genero</h4>
			            	<p>
			            	<label>
			            		<input type="radio" name="group1"/>
			            		<span>Hombre</span>
			            	</label>
			            	</p>
			            	<p>
			            	<label>
			            		<input type="radio" name="group1"/>
			            		<span>mujer</span>
			            	</label>
			            	</p>
			            </div>
			            <div class="input-field col t1 azulFondoCuadroTexto">
			               <input type="text" class="datepicker">
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
				</div>
			</article>
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
