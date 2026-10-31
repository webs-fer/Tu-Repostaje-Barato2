# Tu Repostaje Barato 2 — publicación

La nueva URL, si el repositorio se llama `Tu-Repostaje-Barato2`, será:
https://webs-fer.github.io/Tu-Repostaje-Barato2/

1. Crear repositorio público con nombre **Tu-Repostaje-Barato2** en GitHub. No crear README desde GitHub.
2. Descomprimir el ZIP y subir **el contenido de la carpeta** `Tu-Repostaje-Barato2`, no la carpeta en sí, a la raíz del repositorio. Deben verse `index.html`, `assets`, `data`, `scripts`, `.github` y demás. Para conservar el workflow oculto `.github`, revisar que la subida lo incluya.
3. Confirmar cambios (Commit changes).
4. Ir a Settings > Pages > Build and deployment > Deploy from a branch. Elegir rama `main` y carpeta `/(root)` y guardar.
5. La publicación puede tardar unos minutos. Abrir https://webs-fer.github.io/Tu-Repostaje-Barato2/ y hacer una recarga completa.
6. Ir a Settings > Actions > General y revisar que Actions esté permitido. En caso de que los workflows se hayan deshabilitado, activarlos y revisar el workflow de actualización.
7. En Google Search Console, verificar la nueva propiedad URL, enviar https://webs-fer.github.io/Tu-Repostaje-Barato2/sitemap.xml y solicitar indexación. La web antigua seguirá siendo independiente. Para evitar duplicados en buscadores, definir qué URL quieres posicionar y redirigir o asignar canonical si retiras la antigua.

## Filtro de marcas
El desplegable aparecerá cuando se seleccione gasolina o diésel y se cargarán los rótulos de las estaciones del radio (10 km por defecto). Permite elegir una marca/rótulo exacto, con resultados ordenados por precio. Cepsa y Moeve pueden aparecer con nombres separados según los datos públicos.

## Intro
La intro es una transición animada CSS de 6 segundos basada en la imagen y un contador gráfico; **no es un vídeo realista generado en 3D**. Pesa mucho menos que un vídeo, se puede saltar, se reproduce una sola vez por sesión y no se muestra con la preferencia de movimiento reducido. No bloquea la carga de datos del mapa deliberadamente, aunque se muestra encima durante la presentación.
