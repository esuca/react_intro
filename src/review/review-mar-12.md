1. La primera letra de los nombres de los componentes tiene que ser en Mayúscula. ej: _ProductCard_
2. El fichero tiene que tener la extensión _.tsx_ y el _import React from 'react'_
3. _Props es un objeto que React pasa automáticamente al componente. Son como los parámetros de una función._
4. Los props _siempre_ tienen una propiedad _children_ que es el contenido que va entre las etiquetas de apertura y cierre.
6. _State es el estado en el que se encuentra el componente..._
7. El estado _SIEMPRE_ debe de tener un valor inicial y puede ser _puede ser cualquier cosa_, string, objeto, array e incluso una función que solo se ejecutaría la primera vez que el componente se renderize.
8. Guardamos en el estado solo lo que tenga que ver con el render, nada más.
9. _Cuando las props o el estado cambian, el componente se renderiza otra vez._
10. Se dice que _un componente está "controlado" si tiene un prop value (lo que significa que también necesita un onChange)_. Sin embargo, en algunos casos un componente podría tener un onChange sin un prop value y _NO_ se consideraría "controlado" ya que no tiene un valor prop.
11. _Todos_ los hooks que creamos deben empezar con el prefijo _'use'_
