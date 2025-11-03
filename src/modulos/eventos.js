const catalogo = document.querySelector('.catalogo');
const imagenProducto = document.querySelector('.imagen-producto');
console.log(imagenProducto)


imagenProducto.addEventListener('mouseover', (e)=>{
    

    const alt = imagenProducto.getAttribute('alt');
    alert(alt)
    
    
})
