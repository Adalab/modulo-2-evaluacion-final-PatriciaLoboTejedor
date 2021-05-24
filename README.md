# Patricia Lobo Tejedor - Evaluación Final Módulo 2 - Promo M

En este repositorio de GitHub puedes encontrar los archivos generados fruto de la **Evaluación final del Módulo 2 para la Promo M de Patricia Lobo Tejedor**

## Guía de inicio rápido

### **_Visualización online_**

Sigue el [siguente enlace](http://beta.adalab.es/modulo-2-evaluacion-final-PatriciaLoboTejedor) con el cual, a través de GitHub Pages podrás visualizar el proyecto directamente a través de un servidor online.

### **_Visualización en local_**

Para poder realizar un arranque en local de este proyecto, se debe emplear el [Adalab - Web starter kit](https://github.com/Adalab/Adalab-web-starter-kit), ya que ha sido el sistema creado por [Adalab](https://adalab.es/) y sus profesores, gracias al cual, con NodeJS y Gulp, podemos implementar el desarrollo más sencillo e intuitivo del trabajo y su posible visualización en local. Para ello:

1. Clona este repositorio en tu equipo.
2. Realiza la instalación del paquete y sus dependencias mediante:

   ```bash
   npm install
   ```

3. Una vez finalizada la instalación encontrarás que se ha añadido una carpeta denominada `node_modules/`.
4. Por último, ejecuta el siguiente comando para que cargue un servidor local y poder hacer la visualización:

   ```bash
   npm start
   ```

> **NOTA:** Es necesario tener instalado **NodeJS**

## Enunciado y requisitos del ejercicio

El ejercicio consiste en desarrollar una aplicación web de **búsqueda de series de TV**, que nos permite des/marcar las series como favoritas y guardarlas en local storage. El ejercicio también tiene una parte de maquetación con HTML y Sass.

1. **Estructura básica**
   La aplicación de búsqueda de series consta de dos partes:

   - Un campo de texto y un botón para buscar series por su título.
   - Un listado de resultados de búsqueda donde aparece el cartel de la serie y el título.

2. **Búsqueda**
   Al hacer clic sobre el botón de Buscar, la aplicación debe conectarse al API abierto de TVMaze para la búsqueda de series y construir la URL de búsqueda recogiendo el texto que ha introducido la usuaria en el
   campo de búsqueda.

   - Por cada show contenido en el resultado de la búsqueda hay que pintar una tarjeta donde mostramos una imagen de la serie y el título.
   - En el caso de que el API no devuelva imagen para alguna serie, esta debe mostrar una imagen de relleno.

3. **Favoritos**
   Una vez aparecen los resultados de búsqueda, la usuaria puede indicar cuáles son sus series favoritas. Para ello, al hacer clic sobre una serie debe pasar lo siguiente:

   - El color de fondo y el de fuente se intercambian, indicando que es una serie favorita.
   - Hay que mostrar un listado en la parte izquierda de la pantalla, debajo del formulario de búsqueda, con las series favoritas.
   - Las series favoritas deben seguir apareciendo a la izquierda aunque la usuaria realice otra búsqueda.

4. **Almacenamiento local**
   Hay que almacenar el listado de favoritos en el localStorage. De esta forma, al recargar la página el listado de favoritos se debe mostrarse.

5. **BONUS: Borrar favoritos**

   - Al hacer clic sobre el icono de una 'x' al lado de cada favorito, hay que borrar el favorito clicado de la lista y del localStorage.
   - Poder añadir/quitar como favorito al hacer clic sobre una serie del lado de la derecha. Y que, si realizamos una nueva búsqueda y sale una serie que ya es favorita, aparezca ya resaltada en los resultados de búsqueda (con colores de fondo y texto intercambiados).
   - Incluir al final de la lista de favoritos un botón para borrar todos los favoritos a la vez.

6. **BONUS: Afinar la maquetación**
   Una vez terminada la parte de interacción, podemos centrarnos en la parte de maquetación donde tenemos libertad para decidir los estilos.

## ¿Consideras que puedo aplicar alguna mejora?

Si has detectado un problema o consideras que alguna cosa puede mejorarse, estaría encantada de que habras un nuevo issue y conocer tu opinión, cada mejora es importante, muchas gracias.
