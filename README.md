<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

  # EJECUTAR EN DESARROLLO

  1. Clonar el repositorio
  1. Ejecutar
  ```
  yarn install
  ```

  3. Tener Nest CLI instalado
  ```
  npm i -g @nestjs/cli
  ```

  4. Levantar la base de datos
  ```
  docker-compose up -d
  ```

  5. Clonar el archivo ___.env.template___ y renombrarlo a __.env__

  6. Llenar las variables de entorno definidas en en el ```.env```

  7. Ejecutar la aplicacion en dev:

  ```
  yarn start:dev
  ```

  8. Reconstruir la base de datos
  ```
  http://localhost:3000/v2/seed
  ```

  ## Stack usado
  * MongoDB
  * Nest

  # Production buidl
  1. crear el archivo  ```.env.prod```
  2. llenar las varaibles de entorno para produccion
  3. crear la nueva imagen
  ```
  docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
  ```

  