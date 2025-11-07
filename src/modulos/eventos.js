//EVENNTO PARA ALTERNAR IMAGEN[0] CON IMAGEN[1] Y MOSTRAR EN EL CATÁLOGO



const alternarImagenHover = (data)=>{
    const catalogo = document.querySelector('.catalogo');
    catalogo.addEventListener('mouseover', (e)=>{
        
        const id = Number(e.target.dataset.id);
        if(!id) return;
        const producto = data.find(p=>p.id === id);
        const imagen = e.target.closest('img');
        if(!imagen)return;
        imagen.classList.add('oculto');

        setTimeout(()=>{
            imagen.classList.remove('oculto');
            producto && producto.imagen[1]?e.target.src = producto.imagen[1]:'';
            // if(producto && producto.imagen[1]){
            //     e.target.src = producto.imagen[1]
            // }
            
        },150)
        
        
        
        
    })

catalogo.addEventListener('mouseout', (e)=>{
        
        const id = Number(e.target.dataset.id);
        if(!id) return;
        const producto = data.find(p=>p.id === id);
        const imagen = e.target.closest('img');
        if(!imagen)return;
        imagen.classList.add('oculto');

        setTimeout(()=>{
            imagen.classList.remove('oculto')
            producto && producto.imagen[0]?e.target.src = producto.imagen[0]:'';
        },150)
        
        
        
        
    })
}

export default alternarImagenHover;

// console.log(imagenProducto)


// imagenProducto.addEventListener('mouseover', (e)=>{
    

//     const alt = imagenProducto.getAttribute('alt');
//     alert(alt)
    
    
// })
