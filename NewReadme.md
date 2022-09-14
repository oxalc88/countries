# Proyecto Individual Countries para SoyHenry

El presente proyecto busca hacer una mini aplicación FullStack que muestre las actividades que se pueden hacer en cada país.

Para el proyecto se está usando las siguientes tecnologías:

* React
* Redux
* NodeJs
* Sequelize
* Postgres
* Docker y Docker Compose

## BOILERPLATE

Para la creación de la base de datos, se tiene un contenedor de docker que permite la instalación de postgress y pgAdmin para el manejo y su visualización.

En el archivo .env.example está todo lo que se necesita tener a la mano para replicar el proyecto de manera local.

Para poderlo correr, primero tienes que correr los siguientes comandos:

~~~
npm start

docker-compose up -d
~~~

Con ello podrás entrar a pgAdmin a través del navegador para ver la base de datos con el siguiente enlace:


 `YOUR_HOST/PG_PORT`

Allí introducirás las credenciales que determinaste para acceder a pg admin:
![login pgAdmin](/images_boilerplate/pgAdmin_login.png)

Si todo funciona correctamente verás el panel de pgAdmin:
![login pgAdmin](/images_boilerplate/welcome_pgAdmin.png)

Luego tendrás que ir a object/register server para conectar pgAdmin con la base de datos:

![login pgAdmin](/images_boilerplate/register_server.png)

En la pestaña general le pondrás el nombre del servidor:

![login pgAdmin](/images_boilerplate/register_server.png)

En la pestaña de conexión pondrán lo siguiente:

* Hostname/Address: container_name
* Port: DB_PORT
* Maintenance database: DB_NAME
* Username: DB_USER
* Password: DB_PASSWORD

En save password, le dan al toggle para que quede en azul indicando que si y le dan save.
![login pgAdmin](/images_boilerplate/server_name.png).

Si todo sale correcto verán el dashboard indicando que todo funciona correctamente:

![login pgAdmin](/images_boilerplate/dashboard_pgAdmin.png)