const renderizarCategorias = (data) =>{
    const contenedor = document.querySelector('.catalogo');
    const params = new URLSearchParams (window.location.search);
    console.log(window.location.search)
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
            '${p.nombre}' class = 'imagen-producto' data-id =  ${p.id}>
            <p>${p.nombre}</p>
            <p><span>$ ${p.precio}</span></p>
        `
        contenedor.append(enlaceProducto)
    })
    
    
}

export default renderizarCategorias;