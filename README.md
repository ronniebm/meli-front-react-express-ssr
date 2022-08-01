# MELI Prueba frontend  

Este proyecto es un aplicativo conceptual de la página de busqueda de Mercado Libre. Fue realizado con:

* ReactJs
* React Router
* Sass pre-procesador de estilos.
* Express
* Webpack
* Babel
* NodeJs

Tambien utiliza:
* React Hooks
* Separación de código con webpack
* metodología BEM para convencion de nombres de clases.
* ATOMIC design para mayor escalabilidad -- DRY.
* Server Side Rendering with Express (SSR).

## Vistas
* Se adicionaron vistas Mobile y Tablet.  

![Vista mobile y tablet de Results List](https://raw.githubusercontent.com/ronniebm/meli-front-react-express-ssr/master/docfiles/images/img02.png)

![Vista mobile y tablet de Product Details](https://raw.githubusercontent.com/ronniebm/meli-front-react-express-ssr/master/docfiles/images/img03.png)

* El proyecto tiene tres vistas con sus rutas:
    * Search box: '/'
    * Result list: /items?search=
    * Product details: /items/:id

## Esquema conceptual de funcionamiento  
![Vista mobile y tablet de Product Details](https://raw.githubusercontent.com/ronniebm/meli-front-react-express-ssr/master/docfiles/images/img01.png)

## Configuración  
* node (v16.16.0)
* npm (v8.11.0)

## Clonar el repositorio  
```git clone https://github.com/ronniebm/meli-front-react-express-ssr.git```

## Instalar Dependencias
```npm install```

## Correr el servidor de desarrollo
```npm run dev```

## Esperar que webpack transpile  
Puede observar el progreso del proceso en la terminal.

## Abrir el navegador y acceder a la URL
```http://localhost:3000/```
