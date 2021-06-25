# Videogames APP

En esta aplicación podrás ver distintos videojuegos disponibles junto con información relevante de los mismos utilizando la api externa [rawg](https://rawg.io/apidocs) y a partir de ella poder, entre otras cosas:

  - Buscar videojuegos
  - Filtrarlos / Ordenarlos
  - Agregar nuevos videojuegos

![portada](https://user-images.githubusercontent.com/74875335/123447420-71c22f80-d59f-11eb-9a33-c42f16d2e1fe.PNG)

## -Home
![Home](https://user-images.githubusercontent.com/74875335/123447440-771f7a00-d59f-11eb-8d3d-578fc4d72872.PNG)

## -Detalle de videojuego
![Videogame Detail](https://user-images.githubusercontent.com/74875335/123447443-78e93d80-d59f-11eb-8271-f1d441e03a41.PNG)


## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

__IMPORTANTE__: Para poder utilizar esta API es necesario crear una cuenta para obtener una API Key que deberá ser incluida en el archivo .env

El archivo `.env` (carpeta api) debe tener la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
API_KEY=tu API key
DB_NAME=videogames
PORT=3001
```
Adicionalmente será necesario que crees desde psql una base de datos llamada videogames

### Instalación 🔧

1. Clona el repo
   ```sh
   git clone https://github.com/JoanZorovich/Games.git
   ```
2. Instala los paquetes
   ```sh
   npm install
   ```
3. Inicia tanto el back (carpeta api), como el front (carpeta client)
   ```sh
   npm start
   ```
  
## Construido con 🛠️

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres


## Licencia 📄

Este proyecto fue creado con fines educativos, no tiene fines de lucro - sientete libre de usarlo




---
⌨️ con ❤️ por [Joan Zorovich](https://github.com/JoanZorovich) 😊
