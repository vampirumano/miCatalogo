import data from '../datos/array-productos'

const renderizarCategorias = () =>{
    const contenedor = document.querySelector('.catalogo');
    const params = new URLSearchParams (window.location.search);
    const categoriaSelecionada =params.get('categoria');

    const productosFiltrados = categoriaSelecionada
    ? data.filter((producto)=> producto.categoría===categoriaSelecionada
    ):data
    productosFiltrados.forEach (p => {
        const enlaceProducto = document.createElement('a');
        enlaceProducto.href = 'index.html';
        enlaceProducto.classList.add('producto');
        enlaceProducto.innerHTML = `
            <img src= ${p.imagen[0]} alt=
            ${p.nombre}>
            <p>${p.nombre}</p>
            <p><span>${p.precio}</span></p>
        `
        contenedor.append(enlaceProducto)
    })
    console.log(productosFiltrados)
    
}

renderizarCategorias()