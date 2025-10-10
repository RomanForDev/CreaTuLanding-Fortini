# React + Vite

Requisitos
Archivos para los componentes NavBar, CartWidget, e ItemListContainer, dentro de la carpeta components.

Organización correcta de los mismos: NavBar e ItemListContainer serán renderizados en App, mientras que CartWidget será renderizado en NavBar.

Uso de props para enviar un string con un mensaje hacia el componente ItemListContainer.

Recomendaciones
Asegúrate de hacer el "commit" y "push" de tu proyecto a GitHub para reflejar tus últimos avances en la entrega.

Si no quieres escribir tu propio CSS, puedes utilizar Bootstrap o librerías de UI de React para los estilos (opcional).

¡Las Props son importantes! No olvides utilizar una en ItemListContainer, es nuestra primera Prop y vamos a utilizarlas en todas las clases.

Formato
Link al último commit de tu repositorio en GitHub. Debe tener el nombre “CreaTuLanding1+Apellido”, por ejemplo “CreaTuLanding+Fernandez”

Pre-Entrega 2
Instalar react-router (npm i react-router) \*\*\*\*

Configurar en el componente App la navegación con los componentes: BrowserRouter, Routes, Route \*\*\*\*

Genera links con el componente Link para poder navegar: tanto en NavBar como en Item (ver detalle) \*Falta en el Item\*\*\*

Crear ItemDetailContainer, mostrando los detalles de un producto

Crear Item, que representa la Card de cada producto dentro del listado

En ItemDetailContainer, leer la URL con useParams(), obtener el ID y buscar un unico producto con ese ID

EN ItemListContainer, leer la URL con useParams(), obtener la cteogria y buscar un listado de productos segun esa categoria

IMPORTANTE: Tanto ItemDetail como ItemList, deben leer los datos de forma asíncrona ( useEffect - useState )
