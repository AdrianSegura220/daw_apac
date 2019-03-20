			IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'creaMaterial' AND type = 'P')
                DROP PROCEDURE creaMaterial
            GO

            CREATE PROCEDURE creaMaterial
                @uclave NUMERIC(5,0),
                @udescripcion VARCHAR(50),
                @ucosto NUMERIC(8,2)
            AS
                INSERT INTO Materiales VALUES(@uclave, @udescripcion, @ucosto)
            GO

			IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'modificaMaterial' AND type = 'P')
                DROP PROCEDURE modificaMaterial
            GO

            CREATE PROCEDURE modificaMaterial
				@uclave NUMERIC(5),
				@udescripcion VARCHAR(50),
				@ucosto NUMERIC(8,2)
                
            AS
                update Materiales set Descripcion =  @udescripcion, Costo = @ucosto where Clave = @uclave
            GO

			IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'eliminaMaterial' AND type = 'P')
                DROP PROCEDURE eliminaMaterial
            GO

            CREATE PROCEDURE eliminaMaterial
				@uclave NUMERIC(5)
                
            AS
               delete from Materiales where Clave = @uclave
            GO
			

			IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'creaProyecto' AND type = 'P')
                DROP PROCEDURE creaProyecto
            GO
			CREATE PROCEDURE creaProyecto
                @unumero NUMERIC(5,0),
                @udenominacion VARCHAR(50)
            AS
                INSERT INTO Proyectos VALUES(@unumero,@udenominacion)
            GO

			IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'modificaProyecto' AND type = 'P')
                DROP PROCEDURE modificaProyecto
            GO
			CREATE PROCEDURE modificaProyecto
                @unumero NUMERIC(5,0),
                @udenominacion VARCHAR(50)
            AS
                update Proyectos set denominacion = @udenominacion where Numero = @unumero
            GO


			IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'eliminaProyecto' AND type = 'P')
                DROP PROCEDURE eliminaProyecto
            GO
			CREATE PROCEDURE eliminaProyecto
                @unumero NUMERIC(5,0)
            AS
                delete from Proyectos where Numero = @unumero
            GO

			
			IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'creaProveedor' AND type = 'P')
                DROP PROCEDURE creaProveedor
            GO
			CREATE PROCEDURE creaProveedor
                @urfc CHAR(13),
				@urazonsocial VARCHAR(50)
            AS
                INSERT INTO Proveedores VALUES (@urfc,@urazonsocial)
            GO

			IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'eliminaProveedor' AND type = 'P')
                DROP PROCEDURE eliminaProveedor
            GO
			CREATE PROCEDURE eliminaProveedor
                @urfc CHAR(13)
            AS
                delete from Proveedores where RFC = @urfc
            GO

			IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'modificaProveedor' AND type = 'P')
                DROP PROCEDURE modificaProveedor
            GO
			CREATE PROCEDURE modificaProveedor
                @urfc CHAR(13),
				@urazonsocial VARCHAR(50)
            AS
                update Proveedores set RazonSocial = @urazonsocial where RFC = @urfc
            GO
			
			IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'crearEntrega' AND type = 'P')
                DROP PROCEDURE crearEntrega
            GO
			CREATE PROCEDURE crearEntrega
                @uclave NUMERIC(5),
				@urfc CHAR(13),
				@unumero NUMERIC(5),
				@ufecha DATETIME,
				@ucantidad NUMERIC(8,2)
            AS
                INSERT INTO Entregan VALUES (@uclave, @urfc, @unumero, @ufecha, @ucantidad)
            GO

			IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'modificaEntrega' AND type = 'P')
                DROP PROCEDURE modificaEntrega
            GO
			CREATE PROCEDURE modificaEntrega
                @uclave NUMERIC(5),
				@urfc CHAR(13),
				@unumero NUMERIC(5),
				@ufecha DATETIME,
				@ucantidad NUMERIC(8,2)
            AS
                update Entregan set RFC = @urfc, Numero = @unumero, Fecha = @ufecha, Cantidad = @ucantidad where Clave = @uclave
            GO

			IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'eliminaEntrega' AND type = 'P')
                DROP PROCEDURE eliminaEntrega
            GO
			CREATE PROCEDURE eliminaEntrega
                @uclave NUMERIC(5)
            AS
                delete from Entregan where Clave = @uclave
            GO

			EXECUTE creaMaterial 5000,'Martillos Acme',250

			EXECUTE modificaMaterial 5000,'modificacion',2000

			EXECUTE eliminaMaterial 5000

			select * from Materiales
			select * from Proyectos
			select * from Proveedores
			select * from Entregan




		IF EXISTS (SELECT name FROM sysobjects
        WHERE name = 'queryMaterial' AND type = 'P')
                                DROP PROCEDURE queryMaterial
                            GO

                            CREATE PROCEDURE queryMaterial
                                @udescripcion VARCHAR(50),
                                @ucosto NUMERIC(8,2)

                            AS
                                SELECT * FROM Materiales WHERE descripcion
                                LIKE '%'+@udescripcion+'%' AND costo > @ucosto
                            GO


							EXECUTE queryMaterial 'Lad',20 




