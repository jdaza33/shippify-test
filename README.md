# Test Shippify | NodeJS

REST API para una prueba de trabajo creado por José Bolívar.
Tecnologias: NodeJS, Mongoose y ExpressJS.
Base de datos: MongoDB

### DEMO --> https://shippify-test.herokuapp.com/

### POSTMAN --> https://documenter.getpostman.com/view/2941896/UzXLzJUY#db1f3ffb-9adb-49f1-809c-4fab76c211cd

## Install

    npm install

## Run the app

    npm start --> running on port 3001 by default

# Contexto

Pequeña API que gestiona las transacciones de un cliente de un banco.
Me tome la libertad de modificarla un poco para ajustarla a las necesidades.

#### El esquema de banco acepta los siguientes campos, se hizo de este modo para parametrizar las tasas y comisiones del banco. 

- name --> Nombre del banco
- tax --> IVA
- insurance --> Porcentaje del seguro
- insuranceTop --> Valor fijo para condicionar el seguro 
- service --> Porcentaje del servicio
- timesGoToBank --> Valor fijo del numero de veces que el cliente puede ir al banco
- extraPrice --> Valor fijo del monto a sumar si va despues de cierto periodo
- commissionCredit --> Porcentaje de la comision de tarjeta de debito
- commissionDebit --> Porcentaje de la comision de tarjeta de credito
- amountMonth --> Valor fijo del monto mensual para considerar las comisiones por tarjeta

#### El esquema de cliente
- name --> Nombre del cliente


#### El esquema de transacciones
- bankId --> ID del banco
- clientId --> ID del cliente
- amount --> Monto de la transaccion
- datetime --> Fecha en formato 'AAAA-MM-DD'
- event --> Enum de [debit, credit]

 

# ¿Cómo usar?

1.  Cree un banco y configure los parametros de comisiones
2.  Cree un cliente
3.  Cree cuantas transacciones desee asociada a un cliente y un banco
4.  Por ultimo, consulte el resumen. Más información, consulte la API.


### Por tema de tiempo no pude hacer otras cosas, mil disculpas..


