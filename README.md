# Asignación Full-Stack - Grupo Central

## Visor Datos CoVID-19

### Instrucciones de instalación

 1. Clonar este repositorio
 2. Instalar las dependencias del servidor con `npm install`.
 3. Instalar las dependencias del cliente con `npm client-install`.
 4. Levantar servidor de desarrollo con el comando `npm run dev`.

### Acerca de la base de datos

Hay 3 tablas en la base de datos sqlite:

 - `regiones: (id[pk], nombre)`
 - `comunas:  (id[pk], nombre, region_id[fk])`
 - `casos:    (id, fecha, cantidad, comuna_id[fk])`

Los datos contenidos dentro son los mismos que están en https://github.com/MinCiencia/Datos-COVID19/blob/master/output/producto1/Covid-19.csv .

### Acerca de las dependencias

#### Servidor

 - **sqlite3** : Usado para acceder a la base de datos
 - **express** : Usado como servidor node
 - **concurrently** : Usado para poder levantar el cliente y el servidor con un solo comando en una sola terminal

### Cliente

 - **react**, **react-dom**, **react-scripts**: Usados para levantar una aplicación React.
 - **chart.js**, **react-chartjs-2**: Usados para crear gráficos.
 - **craco**: Usado para hacer overrides a create-react-app. Necesario para usar tailwindcss dentro de una aplicación React.

## Otros Detalles

Se usa `proxy: ` para que el cliente pueda comunicarse con el servidor sin tener que escribir la url completa de este en localhost.
