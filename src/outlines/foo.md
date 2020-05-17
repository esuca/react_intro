## Lunes 18

`Codígo useState y props...`
La semana pasada vimos como crear un componente, añadirle estado, y también vimos que usando props podíamos recibir datos de fuera.
También vimos que cuando el estado o las props cambian, el componente se pinta otra vez en el navegador.
Vimos que en este proceso participa el virtual dom, que es una copia en memoria del DOM que tenemos en el navegador.
Este compara lo que habia antes de actualizar, con lo que hay ahora, para actualizar en el DOM solamente lo que ha cambiado.

También vimos que los hooks son funciones "especiales" que nos permiten tener acceso a características de React.

Vimos que los componentes son funciones que devuelven JSX(HTML), y que se vuelven a ejecutar cuando se actualiza nuestro componente.
Y por tanto todas las funciones internas que tenemos dentro del componente se vuelven a crear y tendrán una dirección en memoria diferente a la que había antes de actualizar.

¿Alguna duda?

Hoy lo que vamos a ver es que un componente pasa por varias fases. Aparece, se actualiza y desaparece.
Las palabras técnicas son: se monta, se actualiza y se destruye (deja de existir en el DOM).

Habrá casos que después de montar el componente, queremos que se ejecute algo, o al actualizar... o antes de destruir el componente.
Para hacerlo vamos a aprender otro hook que se llama useEffect.

- Componente ProductList

Y cuando tengas los datos te vuelvas a pintar con los datos que has recibido del servidor.

- Repaso día anterior. `Mira el reloj y no te pases de 10m`
    - Crear un componente
    - Añadir estado a ese componente con React.useState.
    - Pasar datos de fuera usando props.
    
    - ¿Cuando se ejecuta useEffect? 
      _Por defecto_ se ejecuta después de cada render!
    - ¿Y si quiero que se ejecute solamente cuando un estado o prop en concreto cambie?  
      Tengo que añadir las props o el estado a la lista de dependencias, de esta manera React solo ejecutará ese efecto
      cuando las dependencias hayan cambiado.
    - ¿Cómo me aseguro de que se ejecuta solo una vez?, useEffect(fn, []) ->
    - [] significa que no usamos ningún valor.

- [ ] Buenas prácticas al usar UseEffect
    - Si usas deps, _TODOS_ los valores del interior del componente que se usan dentro de la función del useEffect
      deben estar en la lista. Props, estado, funciones, cualquier cosa que hay dentro del componente.
      Para que no se nos olvide, React tiene nos avisa.
    - Un error común es pensar que una función nunca cambiara y no hay que pasarla como dependencia. 
      Una función definida dentro del componente cambia en cada render!
    - No mentir nunca al useEffect, si lo hacéis es por un mal diseño.
    - Las funciones que no las usamos dentro del jsx meterlas dentro del useEffect para no añadirlas a la lista de dependencias. 
    - Las funciones que no actualizan el estado deberían estar fuera del componente.  


The recommendation is to hoist functions that don’t need props or state outside of your component, and pull the ones that are used only by an effect inside of that effect. If after that your effect still ends up using functions in the render scope (including function from props), wrap them into useCallback where they’re defined, and repeat the process. Why does it matter? Functions can “see” values from props and state — so they participate in the data flow.
 - Repaso día anterior `10m`     
 - React.useEffect, `45m`
 - Ej: UseEffect `10m | 1h 05m` 
 - Router, `10m`
 - React.Lazy, `10m`
 - React.Suspense, `10m`
 - [React.useReducer]

## Martes 19 
- React.Context,
- React.useContext,
- React.useReducer,
- [React.useMemo]

## Miércoles 20
- Redux por encima
- vs React.Context + hooks 
- [Redux Thunk]
- [React.memo]

## Jueves 21
- TDD 
- CSS Modules
- CSS-in-JS
- Crear componentes usando clases
- [HOCs y Render Props]
 
## Lunes 25
- Buenas prácticas a la hora de crear componentes.
- Buenas prácticas para la arquitectura
- Concurrent-mode
 
Martes 19 React.Context, React.useContext, 
Miércoles 20 React.useReducer, Redux vs React.Context + Hooks, #Thunk
Jueves TDD, 

- React.useEffect

## Lunes 18
Objetivo ver Router, Lazy, Suspense y React.useEffect, React.useReducer

- [ ] Un componente pasa por varias fases, aparece, se actualiza y desaparece.
- [ ] Ver los componentes que tenemos hechos
- [ ] Router
- [ ] React.Lazy `TODO: ...`
- [ ] React.Suspense `TODO: ...`

- [ ] Formulario de login `¿Quién va a guardar el estado? React o el DOM`
      - Formik(estado de React) o useForm(estado del DOM)
      - Redirigir a login cuando las credencias sean correctas.
- [ ] Obtener los datos desde el servidor.

## Martes 19
Objetivo ver React.Context, React.useContext

- [ ] Repaso del día anterior
- [ ] Nueva feature: Los usuarios deben estar logueados para poder entrar al perfil.
- [ ] Ej 07: React.Context -> ThemeProvider

- Test end-to-end son los que más confianza te van a dar porque van de una punta a otra,
- Desde que el usuario pulsa un botón en el navegador, la conexión que hace al servidor, la conexión a la base de datos y de vuelta al usuario.

/api
   /interfaces
   - products.ts  

/core
    /components
        - Layout.tsx
    /hooks    
/LoginPage
    /components
    /hooks
    - index.tsx
/ProductsPage
    /components    
         
Routes.tsx

- Si un componente se utiliza en otra página debe ir en la carpeta /core/components