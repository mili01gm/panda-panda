# Panda-Panda

  Página web sencilla de una página para aplicar lo aprendido en CSS y JS hata el Sprint3 del Bootcamp de #### Laboratoria .

  Esta web consta de lo siguiente:

  - Menú de navegación.
  - Galería de fotos.
  - Botones para display de fotos e información.
  - Artículos informativos.

## El Menú
![Alt text](/assets/img/menu_img.png?raw=true)

  El menú es una lista para cada opción. Se encuentra dentro de una etiqueta nav, y ésta dentro de la sección header del body.
  Cada opción del menú es una etiqueta a que se modificó en CSS.

![Alt text](/assets/img/menu_html.png?raw=true)
![Alt text](/assets/img/menu_css.png?raw=true)

## La Galería de Pandas

![Alt text](/assets/img/fotos_img.png?raw=true)

  La galería conta de 4 fotos las cuales pueden ser ocultadas haciendo click al aspa en cada una. Una vez se ocultan todas, la sección de la fotos desaparece.

![Alt text](/assets/img/fotos_close.png?raw=true)
![Alt text](/assets/img/fotos_none.png?raw=true)

  En JS se llama a cada foto y al aspa dentro del evento "load" de la ventana, esto para cambiar el display de cada una.

![Alt text](/assets/img/fotos_event.png?raw=true)

  Adicional al display se crea la función noHidden() que retornará las imagenes al ocurrir el evento "click" en el botón 'Restore photos'.

![Alt text](/assets/img/fotos_funcion.png?raw=true)
![Alt text](/assets/img/fotos_restore.png?raw=true)
