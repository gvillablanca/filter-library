# Filter: plugin para imágenes

Plugin que permitirá aplicar filtros en imágenes, estos están definidos como:

+ Gray scale: cambiará la imagen a una escala de grises.
+ Hue-rotate: rotará los colores de la imágen.
+ Sepia: cambiará la imagen al estilo Sepia, imitando las fotografías antiguas
+ Inverso: convertirá la fotografía a negativo.
+ Saturar: intensificará los colores de la imágen.

![Filter](assets/img/filter_muestra.jpg)

## Para empezar
+Requisitos para la instalación:
+Instrucciones de intalación: 
 -descarga
 -paso a paso instalación

## Running tests
+Ejecución de las pruebas

## Dependencias
+Bootstrap 4.0.0 - Framework utilizado
+Chai 4.1.2
+JsDom 11.6.1
+Mocha 5.0.0


## Versión 
LA versión de este plugin es el 1.0.0

## Licencia


Para poder aplicar los filtros, la imagen debe estar inserta en el siguiente código;
[insertar foto del código donde se inserta la imágen]

Luego a la imágen se le debe asignar los siguientes atributos:
[insertar foto de la imagen con los atributos ingresados]




## Uso y documentación del API

Para poder utilizar este plugin, deberá crear una `section` con `<div>` con la `clase="container"` y un `id="mainContainer"`, este será quien contenga  a la imágen en la que utilizaremos los filtros, esta imágen debe tener un `id="img"`

![Ejemplo de section, clases e id](assets/img/container.jpg)

A través de DOM se crearán los botones con los filtros respectivos
![Ejemplo de creacion de botones de filtros](assets/img/buttonsFilter.jpg)