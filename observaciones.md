### Comentarios Generales

Euge, quiero felicitarte por lo bien que quedó tu portfolio. Todos los detalles - la tipografia, los colores, la eleccion de imagenes - me encantan, y es un placer ver como lo adaptaste a tu personalidad mientras cumplias las consignas. 

Tu responsive funciona muy bien, y salvo algunos problemas en la resolucion mas baja (320px suele ser la medida de los celulares más pequeños) no logro encontrar ningún problema. Se nota que lo hiciste con mucho cuidado. En esa resolucion, por lo que veo, el problema es el margin de .links-navegacion-proyectos es muy grande, por lo que fuerza un scroll horizontal (por eso se ve una barra blanca al costado). Yo lo reduciria. Salvo eso, que es realmente un detalle, todo esta perfecto en el responsive.  

Quiza me gustaria que tuvieras un poco mas de aire entre tus secciones, que se ven un poco aplastadas entre si. Me refiero particularmente al footer y a la seccion "mis Proyectos": creo que ambas se beneficiarian con algo de margin y/o padding. 

Tu CSS tiene algunas desprolijidades. No es poco habitual ver cosas asi:

```css 
.saludo h1{
    color: rgb(209,28,91);
    font-size: 60px;
    font-weight: bold; 
   
    
}
```

Que si bien no afectan tu código, sí afectan la legibilidad y prolijidad del mismo. Tomá en cuenta que podés bajarte linters a VSCode para formatear el CSS con un clic: "CSS Formatter" es el que yo uso y recomiendo, pero hay muchísimos.

- Con respecto al proyecto en github, si bien tu README cumple con los requisitos minimos que pedimos, creo que vale la pena invertir en dejarlo un poco mas amable para el lector, especialmente si pensas usar este portfolio para presentarte en redes sociales o si estará en algun CV que eventualmente envíes. Te aseguro que mucha gente lee nuesto github cuando están evaluando contratarnos, y vale la pena darles la mejor experiencia posible. Contarles un poco mas del proyecto. Por ejemplo: "Este es el primer trabajo práctico que hice en el marco del bootcamp de Front End de Ada ITW. Consiste en un portfolio personal, en el cual debíamos cumplir ciertos requisitos de estructura pero está estilado de acuerdo a mi preferencias. Las tecnologías usadas son HTML y CSS, incluyendo el uso de íconos de librerías externas como Font Awesome y DevIcons, flexbox como herramienta principal de maquetado y etiquetas semánticas.". 

- Menciono lo bien ordenado de tu proyecto en github, y lo prolija que fuiste commit a commit agregando los cambios de a poco y describiendolos bien en tus mensajes.

- Tu uso de etiquetas semanticas es muy bueno. 

- Usas Ids como "Mis Proyectos". No hay nada grave ahi en el sentido de que funciona, pero es convención no utilizar ni mayusculas, ni espacios en los nombres de HTML y CSS. Privilegia cosas como "mis-proyectos". En ese mismo sentido, intenta que los nombres de tus carpetas y archivos siempre esten escritos en minusculas. 

Dejo algunos comentarios específicos a lo largo de tu código. 

Sé que puedo ser un poco quisquillosa en las correcciones. No es la intención que sientas que hiciste un mal trabajo, porque no es así: tu trabajo es fantástico. Mi tarea es comentarte todo lo que vea para que sea más fantástico aún. 


### Nota final: 8

Nota desagregada: 
✅ Estructura correcta de documento HTML.
✅ Respeta la consigna 
✅ Respeta el diseño dado 
✔️ Responsive funciona correctamente --> con observaciones
✔️ Código bien indentado --> con observaciones
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✅ Buenos nombres de clases
✅ Reutilización de estilos.
✅ Código CSS ordenado.
✅ Commits con mensajes adecuados.
