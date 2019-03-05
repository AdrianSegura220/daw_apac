INSERT INTO Materiales values(1000, 'xxx', 1000) 

select * from Materiales

Delete from Materiales where Clave = 1000 and Costo = 1000 

ALTER TABLE Materiales add constraint llaveMateriales PRIMARY KEY (Clave) 

sp_helpconstraint materiales 

ALTER TABLE Proyectos add constraint llaveProyectos PRIMARY KEY (Numero) 

ALTER TABLE Proveedores add constraint llaveProveedores PRIMARY KEY (RFC) 

ALTER TABLE Entregan add constraint llaveEntregan PRIMARY KEY (Clave,Fecha,Numero) 

sp_helpconstraint materiales

sp_helpconstraint Proyectos

sp_helpconstraint Proveedores

sp_helpconstraint Entregan

select * from Proyectos

select * from Proveedores

select * from Entregan

  INSERT INTO entregan values (0, 'xxx', 0, '1-jan-02', 0)

  Delete from Entregan where Clave = 0 

   ALTER TABLE entregan add constraint cfentreganclave 
  foreign key (clave) references materiales(clave)


  ALTER TABLE entregan add constraint cfentreganrfc 
  foreign key (RFC) references proveedores(RFC)

  ALTER TABLE entregan add constraint cfentregannumero
  foreign key (numero) references proyectos(numero)


   INSERT INTO entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0)

   Delete from Entregan where Cantidad = 0 

   ALTER TABLE entregan add constraint cantidad check (cantidad > 0)
