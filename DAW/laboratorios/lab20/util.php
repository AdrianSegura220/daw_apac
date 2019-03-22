<?php
    
    function connectDB(){
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "lab19";
        $con = mysqli_connect($servername, $username, $password, $dbname);
        
        //check connection
        if(!$con){
            die("Connection failed: " . mysqli_connect_error());
        }
        return $con;
    }

    function closeDB($mysql){
        mysqli_close($mysql);
    }
    function getItems(){
        $conn = connectDB();
        $sql = "select * from usuarios";
        $result = mysqli_query($conn, $sql);
        closeDB($conn);
        
        return $result;
    }
    function despliegar(){
        //output data of each row
        while($row = mysqli_fetch_array($result, MYSQLI_BOTH)){
            echo "<tr>";
                echo "<td>" . $row["ID"] . "</td>";
                echo "<td>" . $row["nombre"] . "</td>";
            echo "<tr>";
        }
    }
    function cargarArreglo($result){
        $arreglo = array();
         while($row = mysqli_fetch_array($result, MYSQLI_BOTH)){
             //push de nombres de base de datos a arreglo
            array_push($arreglo,$row["nombre"]);
             
        }
               return $arreglo;
    }
?>