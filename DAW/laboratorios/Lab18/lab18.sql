select M.Descripcion, sum(E.Cantidad) as 'Cantidad total de articulo', sum(E.Cantidad)*M.Costo as 'Importe total', E.Fecha
from Entregan as E, Materiales as M
where E.Clave = M.Clave and year(Fecha) = 1997
group by M.Descripcion, M.Costo, E.Fecha, E.Cantidad


select P.RazonSocial, E.Cantidad, M.Descripcion, sum(E.Cantidad)*M.Costo as 'Importe'
from Entregan as E, Proveedores as P, Materiales as M
where P.RFC = E.RFC and M.Clave = E.Clave
group by P.RazonSocial, E.Cantidad, M.Descripcion, M.Costo

select M.Descripcion, sum(E.Cantidad) as 'Cantidad total', sum(E.Cantidad)/count(E.Clave) as 'contador', M.Clave, M.Descripcion
from Materiales as M, Entregan as E
where M.Clave = E.Clave and M.Descripcion = 'Varilla 3/16'
group by M.Descripcion, M.Clave, M.Descripcion

select E.Clave, M.Descripcion, sum(E.Cantidad) as 'Cantidad total', sum(E.Cantidad)/count(E.Cantidad) as 'Promedio de entregas', min(E.Cantidad) as 'Cantidad Mínima', max(E.Cantidad) as 'Cantidad Máxima', sum(E.Cantidad*M.Costo) as 'Importe'
from Entregan as E, Materiales as M
where E.Clave = M.Clave
group by E.Clave, M.Descripcion
having sum(E.Cantidad)/count(E.Cantidad) > 400

select P.RazonSocial, sum(E.Cantidad)/count(E.Clave) as 'Promedio de material entregado', M.Descripcion
from Materiales as M, Proveedores as P, Entregan as E
where P.RFC = E.RFC and M.Clave = E.Clave
group by E.Clave, M.Descripcion, P.RazonSocial
having sum(E.Cantidad)/count(E.Clave) > 500

select P.RazonSocial, sum(E.Cantidad)/count(E.Clave) as 'Promedio de material entregado', M.Descripcion
from Materiales as M, Proveedores as P, Entregan as E
where P.RFC = E.RFC and M.Clave = E.Clave
group by E.Clave, M.Descripcion, P.RazonSocial
having sum(E.Cantidad)/count(E.Clave) < 370 or sum(E.Cantidad)/count(E.Clave) > 450

insert into Materiales values(2000,'Tornillo 1', 10)
insert into Materiales values(2100,'Tornillo 2', 10)
insert into Materiales values(2200,'Tornillo 3', 10)
insert into Materiales values(2300,'Tornillo 4', 10)
insert into Materiales values(2400,'Tornillo 5', 10)

select M.Descripcion
from Materiales as M
where M.Clave not in (select E.Clave from Entregan as E)

select P.RazonSocial
from Entregan as E, Proveedores as P, Proyectos as Pr
where E.RFC = P.RFC and Pr.Numero = E.Numero and Pr.Denominacion = 'Vamos México'
union
select P.RazonSocial
from Entregan as E, Proveedores as P, Proyectos as Pr
where E.RFC = P.RFC and Pr.Numero = E.Numero and Pr.Denominacion = 'Querétaro Limpio'

select M.Descripcion
from Materiales as M, Proyectos as P, Entregan as E
where P.Numero = E.Numero and M.Clave = E.Clave and M.Clave not in (select E.Clave from Entregan as E) and P.Denominacion = 'CIT Yucatán'
group by M.Descripcion

select P.RazonSocial, sum(E.Cantidad)/count(E.RFC) as 'Promedio de cantidad entregada'
from Entregan as E, Proveedores as P, Entregan as En, Proveedores as Pr
where E.RFC = P.RFC
group by P.RazonSocial, 'Promedio de cantidad entregada'
having sum(E.Cantidad)/count(E.RFC) > sum(En.Cantidad)/count(En.RFC) and Pr.RFC = 'VAGO780901' 

select * from Entregan

select * from Materiales

select * from Proveedores

select * from Proyectos