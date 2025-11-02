import data from '../datos/array-productos'
const productosFiltrados = data.filter((producto)=>{
    if (producto.categoría === 'gafas para dama')
        console.log(producto)
})
