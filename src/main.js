import './style.css'
import viteLogo from '/vite.svg'
import logots from './logots.svg'

import data from './datos/array-productos.js'
console.log(data)
import crearEnlaceCategoria from './modulos/crearEnlaceCategorias.js'
import logo from './modulos/logo.js'
import renderizarCategorias from './modulos/renderizarCategorias.js'
import './modulos/eventos.js'
import alternarImagenHover from './modulos/eventos.js'



document.querySelector('#app').innerHTML = `
  <div>

  </div>
`
const slogan = 'Productos y accesorios de belleza';
const nombreTienda = 'Tapia Store';
logo(logots, slogan, nombreTienda);

crearEnlaceCategoria(data);
renderizarCategorias(data);
alternarImagenHover(data)

