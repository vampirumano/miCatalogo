import datos from '../datos/array-productos'


const crearEnlaceCategoria = ()=>{
    const menu = document.querySelector('.menu');
    const todo = document.createElement('a');
    todo.href = 'index.html';
    todo.textContent = 'Todo';
    menu.append(todo);
    const categoriaUnica = [...new Set (datos.map(categoria=>categoria.categoría))];
    categoriaUnica.forEach(categoria=>{
        const enlace = document.createElement('a');
        enlace.href = `index.html?categoria=${categoria}`;
        enlace.dataset.categoria = `${categoria}`
        enlace.textContent = `${categoria}`;
        menu.append(enlace)
       
    })
    
}



export default crearEnlaceCategoria;