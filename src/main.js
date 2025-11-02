import './style.css'
import viteLogo from '/vite.svg'
import logots from './logots.svg'
import crearEnlaceCategoria from './modulos/crearEnlaceCategorias.js'
import logo from './modulos/logo.js'
import './modulos/renderizarCategorias.js'
//import './modulos/catalogo.js';



document.querySelector('#app').innerHTML = `
  <div>

  </div>
`
const slogan = 'Productos y accesorios de belleza';
const nombreTienda = 'Tapia Store';
logo(logots, slogan, nombreTienda);

crearEnlaceCategoria();
