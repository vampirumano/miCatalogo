//import logots from '../logots.svg'


const logo = (logoImg, sloganText = 'Productos', nombreTienda = 'Tapia Store')=>{
    const contenedorLogo = document.querySelector('.logo');
    const contenedorSlogan = document.querySelector('.slogan');
    
    const imagenLogo = document.createElement('img');
    imagenLogo.src = logoImg;
    imagenLogo.alt = `Logo ${nombreTienda}`;
    imagenLogo.classList.add('logo');
    const slogan = document.createElement('p');
    slogan.textContent = `${sloganText}`;
    
    contenedorLogo.append(imagenLogo);
    contenedorSlogan.append(slogan);
    console.log(imagenLogo)
    
}

export default logo;